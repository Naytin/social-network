import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AddMessage, AddNewMessageText} from "../../redux/actionsCreator/dialogsAC";
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
export default compose(
    // types connect with help generic <>
    connect<dialogsPageType,mapDispatch,OwnPropsType, AppStateType>(mapStateToProps, {AddNewMessageText,AddMessage})
    // withAuthRedirect
)(Dialogs)
