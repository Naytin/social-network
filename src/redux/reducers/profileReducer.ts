// import {actionType, profilePageType} from "../state";
import {ADD_NEW_POST_TEXT, ADD_POST} from "../actions/actions";



// export type postsType = {
//     id: number,
//     message: string,
//     likesCount: number
// }
// export type profilePageType = {
//     posts: Array<postsType>,
//     newPostText: string
// }


let initialState: profilePageType = {
    posts: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!', likesCount: 11},
        {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!', likesCount: 2},
        {id: 3, message: 'I\'m Vova' , likesCount: 111},
        {id: 4, message: 'Goodbye', likesCount: 1},
    ],
    newPostText: 'write something'
    // profile: null,
    // status: 'Hello my friend!'
};

// type actionType = {
//     type: string
//     value?: string
// }


// Reducer - это чистая функция, которая принимает старый стейт, актион
// если нужно модифицирует(добавляет какие-то данные) его по правилам имутабельности (работает с копией стейта и возвращает)
// измененную копию из этой функции. Или возвращает нетронутый стейт, если ничего не изменилось.
const profileReducer = (state: profilePageType = initialState, action: actionType): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            let messageBody = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 4, message: messageBody, likesCount: 0}]
            }
        case ADD_NEW_POST_TEXT:
            return {...state, newPostText: action.value ? action.value : ''}
        default:
            return state
    }
}
export default profileReducer;


