import { SET_USER_DATA} from "../actions/actions";
import {authMe, FormDataType} from "../../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../store";
import {stopSubmit} from "redux-form";

export const setAuthUserDataAC = ({email,id,login,isAuth}:AuthStateType):authUserACType =>
    ({ type: SET_USER_DATA, payload: {email, id,  login, isAuth} })

type ThunkType = ThunkAction<void, AppStateType, unknown, authUserACType>

export const auth = ():ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, authUserACType>) => {
        authMe.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let { email, id, login } = data.data
                    let isAuth = true
                    dispatch(setAuthUserDataAC({email, id, login, isAuth}))
                }
            })
    }
}

export const login = (formData: FormDataType):ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, authUserACType>) => {
        authMe.login(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(auth())
                } else {
                    let error = data.messages.length > 0 ? data.messages[0] : 'Email or password is wrong'
                    let action:any = stopSubmit('login',{_error: error})
                    dispatch(action);
                }
            })
    }
}

export const logout = ():ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, authUserACType>) => {
        authMe.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    let isAuth = false
                    let email = null
                    let id = null
                    let login = null
                    dispatch(setAuthUserDataAC({email,id,login, isAuth}))
                }
            })
    }
}

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type authUserACType = {
    type: typeof SET_USER_DATA
    payload: AuthStateType
}