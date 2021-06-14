import { ADD_POST, SET_STATUS, SET_USER_PROFILE} from "../actions/actions";
import {ProfileACTypes} from "../actionsCreator/profileAC";

let initialState: profilePageType = {
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!', likesCount: 11 },
        { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!', likesCount: 2 },
        { id: 3, message: 'I\'m Vova', likesCount: 111 },
        { id: 4, message: 'Goodbye', likesCount: 1 },
    ],
    profile: null,
    status: 'No status'
};

// Reducer - это чистая функция, которая принимает стейт, актион
// если нужно модифицирует(добавляет какие-то данные) его по правилам имутабельности (работает с копией стейта и возвращает)
// измененную копию из этой функции. Или возвращает нетронутый стейт, если ничего не изменилось.
const profileReducer = (state: profilePageType = initialState, action: ProfileACTypes): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            let messageBody = action.value;
            return {
                ...state,
                posts: [...state.posts, { id: 4, message: messageBody, likesCount: 0 }]
            }
        case SET_USER_PROFILE:
            return { ...state, profile: {...action.profile}}
        case SET_STATUS:
            return { ...state, status: action.status}
        default:
            return state
    }
}
export default profileReducer;


