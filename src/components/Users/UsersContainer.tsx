import React from 'react'
import {connect} from "react-redux";
import {compose, Dispatch} from 'redux';


import Users from "./Users";
import {follow, setUsers, unfollow} from "../../redux/actionsCreator/usersAC";
import axios from 'axios';
import { AppStateType } from '../../redux/store';


// нам нужна классовая компонента, когда мы хотим взаимодействовать с обьектом. и для избежания side Effect-а. в данной ситуации, для запроса на сервер
// функциональная компонента - это читсая функция, которая принимает пропсы и возвращает jsx, при этом она не может никак менять состояние стейта
// или делать запрос на сервер,
// а лиш через dispatcher отсылать action для изменения состояния.
class UsersContainer extends React.Component<usersType & DispatchUsersType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        console.log(this.props)
        return(
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): usersType => {
    return {users: state.usersPage.users}
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchUsersType => {
    return {
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        }
    }
}
export default compose(
    connect<usersType, DispatchUsersType, {}, AppStateType>
    (mapStateToProps, mapDispatchToProps)
)(UsersContainer)
