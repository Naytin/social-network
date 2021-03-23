import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {auth} from "../../redux/actionsCreator/authAC";
import {AppStateType} from "../../redux/store";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

type CallbacksType = {
    auth: () => void
}

class HeaderContainer extends React.Component<HeaderPropsType & CallbacksType> {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): HeaderPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<HeaderPropsType, CallbacksType, {}, AppStateType>(mapStateToProps, {auth})(HeaderContainer)