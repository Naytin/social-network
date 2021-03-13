import {ADD_MESSAGE, ADD_NEW_MESSAGE_TEXT} from "../actions/actions";

export const addMessage = (value: string) => ({type: ADD_MESSAGE, value})
export const addNewMessageText = (value: string) => ({type: ADD_NEW_MESSAGE_TEXT, value})