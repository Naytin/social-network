import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {auth, logout} from "../../redux/actionsCreator/authAC";
import {AppStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

type CallbacksType = {
    auth: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderPropsType & CallbacksType> {
    componentDidMount() {
        this.props.auth()
    }
    logout = () => {
        this.props.logout()
        return <Redirect to='/profile'/>
    }
    render() {
        return (
            <Header logout={this.logout} login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): HeaderPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<HeaderPropsType, CallbacksType, {}, AppStateType>(mapStateToProps, {auth,logout})(HeaderContainer)