import {createStore, combineReducers,applyMiddleware} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

console.log(reducers)

type RootReducerType = typeof reducers // with help typeof get types from reducers function

export type AppStateType = ReturnType<RootReducerType> // получаем тип для всего стейта при помощи функции ReturnType из RootReducerType

//for redux-devtool
// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store
export default store;