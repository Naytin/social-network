import React, {ChangeEvent} from 'react'
import {connect} from "react-redux";
import {compose} from 'redux';
import Users from "./Users";
import {
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingInProgress,
    usersRequest, follow, unfollow, setFilter
} from "../../redux/actionsCreator/usersAC";
import {AppStateType} from '../../redux/store';
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage, getFilteredUsers, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
} from "../../redux/reducers/users-selector";
import s from "./Users.module.scss";
import Button from "../common/Button/Button";


// нам нужна классовая компонента, когда мы хотим взаимодействовать с обьектом. и для избежания side Effect-а. в данной
// ситуации, для запроса на сервер
// функциональная компонента - это чистая функция, которая принимает пропсы и возвращает jsx, при этом она не может
// никак менять состояние стейта
// или делать запросы на сервер,
// а лиш через dispatcher отправлять action для изменения состояния.
// type PropsType =  {
//     currentValue: string
//     timeoutId: NodeJS.Timeout
//     pagesCount: number
//     pages: Array<number>
// }

class UsersContainer extends React.Component<usersType & CallbacksType> {
    //componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM)
    // В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
    state = {
        currentValue: '',
        timeoutId: 0,
        pagesCount: 0,
        pages: []
    }

    componentDidMount() {
        this.props.usersRequest(this.props.currentPage, this.props.pageSize)
        this.setState({
            pagesCount: Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        })
    }

    componentDidUpdate(prevProps: Readonly<usersType & CallbacksType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps !== this.props) {
            let temp = []
            for (let i = 1; i <= this.state.pagesCount; i++) {
                temp.push(i)
            }
            if(temp.length) {
                this.setState({
                    pages: temp
                })
            }
        }
    }


    onPageChanged = (pageNumber: number) => {
        if (this.props.setCurrentPage) {
            this.props.setCurrentPage(pageNumber)
        }
        this.props.usersRequest(pageNumber, this.props.pageSize)
    }
    userFollow = (userId: number) => {
        this.props.follow(userId)
    }
    userUnfollow = (userId: number) => {
        this.props.unfollow(userId)
    }


    onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentValue: e.currentTarget.value
        })
        clearTimeout(this.state.timeoutId)
        this.setState({
            timeoutId: setTimeout(() => {
                this.props.setFilter(this.state.currentValue)
            }, 500)
        })
    }


    render() {
        console.log(this.state.pagesCount)
        return (<>
                {/*<div className={s.pagination}>*/}
                {/*    <div>*/}
                {/*        <input type="search" value='find user' onChange={this.onSearchChange}/>*/}
                {/*        {!this.props.users.length && <div>Users not found</div>}*/}
                {/*    </div>*/}
                {/*    <div className={s.pagination_wrap__btn}>*/}
                {/*        {this.state.pages.map(p => <Button onClick={() => this.onPageChanged(p)}*/}
                {/*                                className={this.props.currentPage === p ? s.selected : ''}*/}
                {/*                                key={p}>{p}</Button>)}*/}
                {/*    </div>*/}
                {/*</div>*/}
                {this.props.isFetching ? <Preloader/> :
                    <Users
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        follow={this.userFollow}
                        unfollow={this.userUnfollow}
                        onPageChanged={this.onPageChanged}
                        followingInProgress={this.props.followingInProgress}
                        setFilter={this.props.setFilter}
                        filter={this.props.filter}
                    />
                }
            </>
        )
    }

}

const mapStateToProps = (state: AppStateType): usersType => {
    return {
        filter: state.usersPage.filter,
        users: getFilteredUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect<usersType, CallbacksType, {}, AppStateType>
    (mapStateToProps, {
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingInProgress,
        usersRequest,
        follow,
        unfollow,
        setFilter
    })
)(UsersContainer)

// types
type CallbacksType = {
    setCurrentPage?: (currentPage: number) => void
    setTotalUsersCount?: (totalCount: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    usersRequest: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFilter: (filter: string) => void
}