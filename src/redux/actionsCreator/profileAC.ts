import {ADD_NEW_POST_TEXT, ADD_POST, SET_USER_PROFILE} from "../actions/actions";
export const addPost = (value: string):AddPostACType => ({type: ADD_POST, value})
export const addNewPostText = (value: string):AddNewPostTextACType =>
    ({type: ADD_NEW_POST_TEXT, value})
export const setUserProfile = (profile: profileUserType):SetUserProfileType  => ({type: SET_USER_PROFILE, profile})

type AddPostACType = {
    type: typeof ADD_POST
    value: string
}

type AddNewPostTextACType = {
    type: typeof ADD_NEW_POST_TEXT
    value: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: profileUserType
}

export type ProfileACTypes =
    AddPostACType |
    AddNewPostTextACType |
    SetUserProfileType
