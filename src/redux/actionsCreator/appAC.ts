import {INITIALIZED} from "../actions/actions";
import {auth} from "./authAC";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";

// actions
export const initializedSuccess = () =>
    ({type: INITIALIZED}) as const

export const fake = () =>
    ({type: 'FAKE'}) as const

export const initializeApp = (): ThunkType => (dispatch) => {
    let res = dispatch(auth())
    Promise.all([res]).then(() => {
        dispatch(initializedSuccess())
    })
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
export type ActionsType =
    ReturnType<typeof initializedSuccess> |
    ReturnType<typeof fake>
