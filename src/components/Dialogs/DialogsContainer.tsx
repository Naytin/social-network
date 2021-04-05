import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessage, addNewMessageText} from "../../redux/actionsCreator/dialogsAC";
import {compose, Dispatch} from 'redux';
import { AppStateType } from '../../redux/store';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type OwnPropsType = {

}

const mapStateToProps = (state: AppStateType):dialogsPageType & OwnPropsType => ({
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
})


const mapDispatchToProps = (dispatch: Dispatch):DispatchDialogsType => {
    return {
        addNewMessageText: (userId: string) => {
            dispatch(addNewMessageText(userId))
        },
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
    connect<dialogsPageType,DispatchDialogsType,OwnPropsType, AppStateType>
    (mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

export default DialogsContainer
