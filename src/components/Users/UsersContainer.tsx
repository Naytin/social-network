import React from 'react'
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
// import Pagination from "./Pagination";


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

class UsersContainer extends React.PureComponent<usersType & CallbacksType> {
    //componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM)
    // В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
    componentDidMount() {
        this.props.usersRequest(this.props.currentPage, this.props.pageSize)
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

    render() {
        return (<>
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