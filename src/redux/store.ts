import {createStore, combineReducers,applyMiddleware,Store} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

const store: Store<stateType, actionType> & {
    dispatch: DispatchType
} = createStore(reducers, applyMiddleware(thunkMiddleware))
//
// //for redux-devtool
// // const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// //
// const store = createStore(reducers,applyMiddleware(thunkMiddleware))
// //
export default store;

export const a = ''