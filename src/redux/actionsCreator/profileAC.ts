import {ADD_POST, SET_STATUS, SET_USER_PROFILE} from "../actions/actions";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {profileAPI} from "../../api/api";

// actions
export const addPost = (value: string) => ({type: ADD_POST, value}) as const
export const setUserProfile = (profile: profileUserType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const

// thunks
export const getUserProfile = (userId: number): ThunkType =>
    (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => dispatch(setUserProfile(data)))
    }

export const getUserStatus = (userId: number): ThunkType =>
    (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => dispatch(setStatus(data)))
    }

export const updateStatusProfile = (status: string): ThunkType =>
    (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) dispatch(setStatus(status))
            })
    }


// types
export type ThunkType = ThunkAction<void, AppStateType, unknown, ProfileACTypes>
export type ProfileACTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>
