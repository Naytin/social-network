import { SET_USER_DATA} from "../actions/actions";
import {authMe, FormDataType} from "../../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../store";

export const setAuthUserDataAC = (email: string,id: number,  login: string):authUserACType =>
    ({ type: SET_USER_DATA, payload: {email, id,  login } })

type ThunkType = ThunkAction<void, AppStateType, unknown, authUserACType>

export const auth = ():ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, authUserACType>) => {
        authMe.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let { email, id, login } = data.data
                    dispatch(setAuthUserDataAC(email, id, login))
                }
            })
    }
}

export const login = (formData: FormDataType):ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, authUserACType>) => {
        authMe.login(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    let { email, id, login } = data.data
                    dispatch(setAuthUserDataAC(email, id, login))
                }
            })
    }
}

export type authUserACType = {
    type: typeof SET_USER_DATA
    payload: {
        email: string
        id: number
        login: string
    }
}