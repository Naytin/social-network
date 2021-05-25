import {createStore, combineReducers,applyMiddleware} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import appReducer from "./reducers/appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer, // зосдаем ветку form и передаем formReducer из 'redux-form'
    app: appReducer
})

type RootReducerType = typeof reducers // (globalstate: AppStateType) => AppStateType

export type AppStateType = ReturnType<RootReducerType> // get type for all state with helps ReturnType from RootReducerType

//for redux-devtool
// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store
export default store