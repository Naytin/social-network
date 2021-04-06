import {ADD_NEW_POST_TEXT, ADD_POST, SET_STATUS, SET_USER_PROFILE} from "../actions/actions";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../store";
import {profileAPI} from "../../api/api";

export const addPost = (value: string): AddPostACType => ({type: ADD_POST, value})
export const addNewPostText = (value: string): AddNewPostTextACType =>
    ({type: ADD_NEW_POST_TEXT, value})
export const setUserProfile = (profile: profileUserType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetProfileStatus => ({type: SET_STATUS, status})



export type ThunkType = ThunkAction<void, AppStateType, unknown, ProfileACTypes>

export const getUserProfile = (userId: string): ThunkType => {
    // замыкание, функция внутри другой фунцкии
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfileACTypes>) => {
        profileAPI.getProfile(userId)
            .then(data => dispatch(setUserProfile(data)))
    }
}

export const getUserStatus = (userId: string): ThunkType => {
    // замыкание, функция внутри другой фунцкии
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfileACTypes>) => {
        profileAPI.getStatus(userId)
            .then(data => dispatch(setStatus(data)))
    }
}

export function updateStatusProfile(status: string): ThunkType {
    // замыкание, функция внутри другой фунцкии
    return function (dispatch: ThunkDispatch<AppStateType, unknown, ProfileACTypes>) {
        profileAPI.updateStatus(status)
            .then(data => {if (data.resultCode === 0) dispatch(setStatus(status))})
    }
}

type AddPostACType = {
    type: typeof ADD_POST
    value: string
}

type AddNewPostTextACType = {
    type: typeof ADD_NEW_POST_TEXT
    value: string
}

type SetProfileStatus = {
    type: typeof SET_STATUS
    status: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: profileUserType
}

export type ProfileACTypes =
    AddPostACType |
    AddNewPostTextACType |
    SetUserProfileType |
    SetProfileStatus
