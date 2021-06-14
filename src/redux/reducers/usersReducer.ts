import {
    FOLLOW,
    UNFOLLOW,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "../actions/actions";
import {UsersActionTypes} from "../actionsCreator/usersAC";

const initialState = {
    filter: '',
    users: [
        // {id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', followed: false, fullName: 'Vova', status: 'Status', location: {city: 'Chernihiv', country: 'Ukraine'} },
        // {id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', followed: true, fullName: 'Sveta', status: 'Status', location: {city: 'Chernihiv', country: 'Ukraine'} },
        // {id: 3, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', followed: false, fullName: 'John', status: 'Status', location: {city: 'Chicago', country: 'US'} }
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


// // Reducer - это чистая функция, которая принимает старый стейт, актион
// // если нужно модифицирует(добавляет какие-то данные) его по правилам имутабельности (работает с копией стейта и возвращает)
// // измененную копию из этой функции. Или возвращает нетронутый стейт, если ничего не изменилось.
const usersReducer = (state: usersType = initialState, action: UsersActionTypes): usersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.uId ? {...u, followed: true} : u)
            }
        // если в case нету ретурна, то необходимо делать брейк, чтобы case не проваливался дальше.
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.uId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalCount > 100 ? 100 : action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state // если ничего не изменилось, по дефолту возвращаем неизмененный стейт

    }
}
export default usersReducer;




