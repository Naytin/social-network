import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import { logout} from "../../redux/actionsCreator/authAC";
import {AppStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

class HeaderContainer extends React.Component<HeaderPropsType & CallbacksType> {
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

//types
type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}
type CallbacksType = {
    logout: () => void
}

export default connect<HeaderPropsType, CallbacksType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer)