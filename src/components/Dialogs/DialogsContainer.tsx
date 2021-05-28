import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/actionsCreator/dialogsAC";
import {compose, Dispatch} from 'redux';
import { AppStateType } from '../../redux/store';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state: AppStateType):dialogsPageType & {} => ({
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
})

const mapDispatchToProps = (dispatch: Dispatch):DispatchDialogsType => {
    return {
        addMessage: (value: string) => {
            dispatch(addMessage(value))
        },
    }
}

// при помощи compose()() последовательно вызываем(оборачиваем) компоненту
// compose<React.ComponentType> - указываем, что это компонента
// types connect with help generic <>
// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const DialogsContainer = compose<React.ComponentType>(
    connect<dialogsPageType,DispatchDialogsType,{}, AppStateType>
    (mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

export default DialogsContainer
