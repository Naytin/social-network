import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessage, addNewMessageText} from "../../redux/actionsCreator/dialogsAC";
import { compose } from 'redux';
import { AppStateType } from '../../redux/store';

type OwnPropsType = {

}
const mapStateToProps = (state: AppStateType):dialogsPageType & OwnPropsType => ({
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
)
const DialogsContainer = compose(
    // types connect with help generic <>
    connect<dialogsPageType,DispatchDialogsType,OwnPropsType, AppStateType>
    (mapStateToProps, {addNewMessageText,addMessage})
    // withAuthRedirect
)(Dialogs)

export default DialogsContainer
