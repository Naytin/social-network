import {ADD_NEW_POST_TEXT, ADD_POST, SET_USER_PROFILE} from "../actions/actions";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../store";
import {profileAPI} from "../../api/api";
export const addPost = (value: string):AddPostACType => ({type: ADD_POST, value})
export const addNewPostText = (value: string):AddNewPostTextACType =>
    ({type: ADD_NEW_POST_TEXT, value})
export const setUserProfile = (profile: profileUserType):SetUserProfileType  => ({type: SET_USER_PROFILE, profile})


type ThunkType = ThunkAction<void, AppStateType, unknown, ProfileACTypes>

export const getUserProfile = (userId: string):ThunkType => {
    // замыкание, функция внутри другой фунцкии
    return (dispatch: ThunkDispatch<AppStateType, unknown, ProfileACTypes>) => {
        profileAPI.getProfile(userId)
            .then(data => dispatch(setUserProfile(data)))
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

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: profileUserType
}

export type ProfileACTypes =
    AddPostACType |
    AddNewPostTextACType |
    SetUserProfileType
