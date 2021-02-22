import { FOLLOW,  UNFOLLOW, SET_USERS} from "../actions/actions";



const initialState = {
    users: [
        // {id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', followed: false, fullName: 'Vova', status: 'Status', location: {city: 'Chernihiv', country: 'Ukraine'} },
        // {id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', followed: true, fullName: 'Sveta', status: 'Status', location: {city: 'Chernihiv', country: 'Ukraine'} },
        // {id: 3, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', followed: false, fullName: 'John', status: 'Status', location: {city: 'Chicago', country: 'US'} }
    ],
    pageSize: 10,
}

// // Reducer - это чистая функция, которая принимает старый стейт, актион
// // если нужно модифицирует(добавляет какие-то данные) его по правилам имутабельности (работает с копией стейта и возвращает)
// // измененную копию из этой функции. Или возвращает нетронутый стейт, если ничего не изменилось.
const usersReducer = (state: usersType = initialState, action: actionType) => {
    switch (action.type) {
        case FOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => u.id === action.value ? {...u, followed: true} : u)
                }
        // если в case нету ретурна, то необходимо делать брейк, чтобы case не проваливался дальше.
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.value ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.value]
            }
        default:
            return state // если ничего не изменилось, по дефолту возвращаем неизмененный стейт

    }
}
export default usersReducer;


