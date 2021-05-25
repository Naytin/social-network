import {INITIALIZED} from "../actions/actions";
import {ActionsType} from '../actionsCreator/appAC'

let initialState = {
    initialized: false,
    fake: 10
}



// Reducer - это чистая функция, которая принимает старый стейт, актион
// если нужно модифицирует(добавляет какие-то данные) его по правилам имутабельности (работает с копией стейта и возвращает)
// измененную копию из этой функции. Или возвращает нетронутый стейт, если ничего не изменилось.
const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case INITIALIZED:
            return {...state, initialized: true}
        case 'FAKE':
            return {...state, fake: state.fake + 1}
        default:
            return state

    }
}

type InitialStateType = {
    initialized: boolean
    fake: number
}

export default appReducer;

