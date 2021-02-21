import { ADD_MESSAGE, ADD_NEW_MESSAGE_TEXT } from "../actions/actions";

const initialState: dialogsPageType = {
    dialogs: [
        {
            id: '1',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV83gjFPxbUtDH5iJuUHJHG45z--_hYg6GUA&usqp=CAU',
            name: 'Sveta',
            status: {
                title: 'Online',
                isOnline: true
            }
        },
        {
            id: '2',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
            name: 'Angelina',
            status: {
                title: 'Angelina left 7 minute ago',
                isOnline: false
            }
        },
        {
            id: '3',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AVHYXRxxtX6-fzIMlSWLwqMDKCMVudzdiA&usqp=CAU',
            name: 'Artem',
            status: {
                title: 'Angelina left 1 day ago',
                isOnline: false
            }
        },
        {
            id: '4',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
            name: 'Vova',
            status: {
                title: 'Online',
                isOnline: true
            }
        },
        {
            id: '5',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
            name: 'Naytin',
            status: {
                title: 'Online',
                isOnline: true
            }
        },
        {
            id: '6',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
            name: 'Svet_v',
            status: {
                title: 'Online',
                isOnline: true
            }
        },
        {
            id: '7',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
            name: '@Lera',
            status: {
                title: 'Online',
                isOnline: true
            }
        },
        {
            id: '8',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
            name: 'Valera',
            status: {
                title: 'Online',
                isOnline: true
            }
        },
    ],
    messages: [
        { id: 1, message: 'Hello, how are you?', name: 'Sveta' },
        { id: 2, message: 'I,m a good student', name: 'my' },
        { id: 3, message: 'you, how are you', name: 'Alina' },
        { id: 4, message: 'goodbye my friend', name: 'my' },
        { id: 5, message: 'goodbye my friend', name: 'Artem' },
        { id: 6, message: 'goodbye my friend', name: 'my' },
        { id: 7, message: 'goodbye my friend', name: 'Artem' },
        { id: 8, message: 'goodbye my friend', name: 'Artem' },
        { id: 9, message: 'goodbye my friend', name: 'Artem' },
        { id: 10, message: 'goodbye my friend', name: 'Artem' },
    ],
    newMessageText: 'I\'m Message'
}

// // Reducer - это чистая функция, которая принимает старый стейт, актион
// // если нужно модифицирует(добавляет какие-то данные) его по правилам имутабельности (работает с копией стейта и возвращает)
// // измененную копию из этой функции. Или возвращает нетронутый стейт, если ничего не изменилось.
const dialogsReducer = (state: dialogsPageType = initialState, action: actionType): dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 11, message: messageText, name: 'my' }]
            }
        // если в case нету ретурна, то необходимо делать брейк, чтобы case не проваливался дальше.
        case ADD_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.value ? action.value : '',
            }
        default:
            return state // если ничего не изменилось, по дефолту возвращаем неизмененный стейт

    }
}
export default dialogsReducer;


