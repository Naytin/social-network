import React from 'react'
import {connect} from "react-redux";
import {compose} from 'redux';
import Users from "./Users";
import {
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingInProgress,
    getUsers, follow, unfollow
} from "../../redux/actionsCreator/usersAC";
import {AppStateType} from '../../redux/store';
import Preloader from "../common/Preloader/Preloader";


// нам нужна классовая компонента, когда мы хотим взаимодействовать с обьектом. и для избежания side Effect-а. в данной
// ситуации, для запроса на сервер
// функциональная компонента - это чистая функция, которая принимает пропсы и возвращает jsx, при этом она не может
// никак менять состояние стейта
// или делать запросы на сервер,
// а лиш через dispatcher отправлять action для изменения состояния.

type CallbacksType = {
    setCurrentPage?: (currentPage: number) => void
    setTotalUsersCount?: (totalCount: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UsersContainer extends React.Component<usersType & CallbacksType> {
    //componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM)
    // В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        if (this.props.setCurrentPage) {
            this.props.setCurrentPage(pageNumber)
        }
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    userFollow = (userId: number) => {
        this.props.follow(userId)
    }
    userUnfollow = (userId: number) => {
        this.props.unfollow(userId)
    }

    // объязательный метод render()
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
                    />
                }
            </>
        )
    }

}

const mapStateToProps = (state: AppStateType): usersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect<usersType, CallbacksType, {}, AppStateType>
    (mapStateToProps, {
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingInProgress,
        getUsers,
        follow,
        unfollow
    })
)(UsersContainer)
