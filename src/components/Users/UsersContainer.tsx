import React from 'react'
import {connect} from "react-redux";
import {compose} from 'redux';


import Users from "./Users";
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/actionsCreator/usersAC";
import axios from 'axios';
import {AppStateType} from '../../redux/store';
import Preloader from "../common/Preloader/Preloader";

// нам нужна классовая компонента, когда мы хотим взаимодействовать с обьектом. и для избежания side Effect-а. в данной
// ситуации, для запроса на сервер
// функциональная компонента - это чистая функция, которая принимает пропсы и возвращает jsx, при этом она не может
// никак менять состояние стейта
// или делать запросы на сервер,
// а лиш через dispatcher отсылать action для изменения состояния.

class UsersContainer extends React.Component<usersType & DispatchUsersType> {
    //componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM)
    // В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                if (this.props.setUsers) this.props.setUsers(response.data.items)
                if (this.props.setTotalUsersCount) this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        if (this.props.setCurrentPage) {
            this.props.setCurrentPage(pageNumber)
        }
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                if (this.props.setUsers) this.props.setUsers(response.data.items)
            });
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
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
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
        isFetching: state.usersPage.isFetching
    }
}

export default compose(
    connect<usersType, DispatchUsersType, {}, AppStateType>
    (mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    })
)(UsersContainer)
