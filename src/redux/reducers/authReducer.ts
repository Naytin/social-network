// import { authMe } from '../api/api'

import {SET_USER_DATA} from "../actions/actions";
import {authUserACType} from "../actionsCreator/authAC";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

// Reducer - это чистая функция, которая принимает старый стейт, актион
// если нужно модифицирует(добавляет какие-то данные) его по правилам имутабельности (работает с копией стейта и возвращает)
// измененную копию из этой функции. Или возвращает нетронутый стейт, если ничего не изменилось.
const authReducer = (state: AuthStateType = initialState, action: authUserACType):AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload, isAuth: true}
        default:
            return state
    }

}

// export const getUserAuthData = () => {
//     return (dispatch) => {
//         authMe.login()
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     let { email, id, login } = data.data
//                     dispatch(setAuthUserData(id, email, login))
//                 }
//             })
//     }
// }

export default authReducer;