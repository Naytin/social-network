import {ADD_NEW_POST_TEXT, ADD_POST} from "../actions/actions";
export const AddPost = (value: string) => ({type: ADD_POST, value})
export const AddNewPostText = (value: string) => ({type: ADD_NEW_POST_TEXT, value})