import {ADD_MESSAGE, ADD_NEW_MESSAGE_TEXT} from "../actions/actions";

export const AddMessage = (value: string) => ({type: ADD_MESSAGE, value})
export const AddNewMessageText = (value: string) => ({type: ADD_NEW_MESSAGE_TEXT, value})