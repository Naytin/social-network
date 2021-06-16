import { ADD_MESSAGE} from "../actions/actions";

const initialState: dialogsPageType = {
    dialogs: [
        {
            id: '1',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV83gjFPxbUtDH5iJuUHJHG45z--_hYg6GUA&usqp=CAU',
            name: 'Sveta',
            status: {
                title: 'Online',
                isOnline: false
            },
            messages: null
        },
        {
            id: '2',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
            name: 'Angelina',
            status: {
                title: 'Angelina left 7 minute ago',
                isOnline: false
            },
            messages: null
        },
        {
            id: '3',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AVHYXRxxtX6-fzIMlSWLwqMDKCMVudzdiA&usqp=CAU',
            name: 'Artem',
            status: {
                title: 'Angelina left 1 day ago',
                isOnline: false
            },
            messages: null
        },
        {
            id: '4',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
            name: 'Vova',
            status: {
                title: 'Online',
                isOnline: true
            },
            messages: null
        },
        {
            id: '5',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
            name: 'Naytin',
            status: {
                title: 'Online',
                isOnline: true
            },
            messages: null
        },
        {
            id: '6',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
            name: 'Svet_v',
            status: {
                title: 'Online',
                isOnline: true
            },
            messages: [
                { id: 1, message: "Hello, I'm Sveta" , name: 'Svet_v' },
                { id: 2, message: 'Hi!, how are you?', name: 'Naytin' },
                { id: 3, message: 'I,m fine, thx!', name: 'Svet_v' },
            ]
        },
        {
            id: '7',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
            name: '@Lera',
            status: {
                title: 'Online',
                isOnline: true
            },
            messages: [
                { id: 1, message: "Hello, I'm Lera" , name: 'Lera' },
                { id: 2, message: 'Hi!, how are you?', name: 'Naytin' },
                { id: 3, message: 'I,m fine, thx!', name: 'Lera' },
            ]
        },
        {
            id: '8',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
            name: 'Valera',
            status: {
                title: 'Online',
                isOnline: true
            },
            messages: [
                { id: 1, message: "Hello, I'm Valera" , name: 'Valera' },
                { id: 2, message: 'I,m fine, thx!', name: 'Valera' },
            ]
        },
    ],
    messages: [
        { id: 1, message: 'Hello, how are you?', name: 'Sveta' },
        { id: 2, message: 'I,m fine, thx!', name: 'Naytin' },
        { id: 3, message: 'you, how are you', name: 'Alina' },
        { id: 4, message: 'goodbye my friend', name: 'Naytin' },
        { id: 5, message: 'goodbye my friend', name: 'Artem' },
        { id: 6, message: 'goodbye my friend', name: 'Naytin' },
        { id: 7, message: 'goodbye my friend', name: 'Artem' },
        { id: 8, message: 'goodbye my friend', name: 'Artem' },
        { id: 9, message: 'goodbye my friend', name: 'Artem' },
        { id: 10, message: 'goodbye my friend', name: 'Artem' },
    ]
}

// // Reducer - это чистая функция, которая принимает старый стейт, актион
// // если нужно модифицирует(добавляет какие-то данные) его по правилам имутабельности (работает с копией стейта и возвращает)
// // измененную копию из этой функции. Или возвращает нетронутый стейт, если ничего не изменилось.
const dialogsReducer = (state: dialogsPageType = initialState, action: actionType): dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = action.value;
            return {
                ...state,
                messages: [...state.messages, { id: 11, message: messageText ? messageText : '', name: 'Naytin' }]
            }
        default:
            return state // если ничего не изменилось, по дефолту возвращаем неизмененный стейт

    }
}
export default dialogsReducer;


