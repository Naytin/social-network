import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";

export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
export type profilePageType = {
    posts: Array<postsType>,
    newPostText: string
}

export type statusType = {
    title: string,
    isOnline: boolean
}

export type dialogsType = {
    avatar: string,
    name: string,
    status: statusType
}
export type messagesType = {
    id: number,
    message: string,
    name: string,
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
    newMessageText: string
}
export type stateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

export type actionType = {
    type: string,
    value: string
}

export type storeType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    getState: () => stateType
    subscribe: (observer: (state: stateType)=> void) => void
    dispatch: (action: actionType) => void
}


const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!', likesCount: 11},
                {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!', likesCount: 2},
                {id: 3, message: 'I\'m Vova' , likesCount: 111},
                {id: 4, message: 'Goodbye', likesCount: 1},
            ],
            newPostText: 'write something'
        },
        dialogsPage: {
            dialogs: [
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV83gjFPxbUtDH5iJuUHJHG45z--_hYg6GUA&usqp=CAU',
                    name: 'Sveta',
                    status: {
                        title: 'Online',
                        isOnline: true
                    }
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
                    name: 'Angelina',
                    status: {
                        title: 'Angelina left 7 minute ago',
                        isOnline: false
                    }
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AVHYXRxxtX6-fzIMlSWLwqMDKCMVudzdiA&usqp=CAU',
                    name: 'Artem',
                    status: {
                        title: 'Angelina left 1 day ago',
                        isOnline: false
                    }
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
                    name: 'Vova',
                    status: {
                        title: 'Online',
                        isOnline: true
                    }
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
                    name: 'Naytin',
                    status: {
                        title: 'Online',
                        isOnline: true
                    }
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
                    name: 'Svet_v',
                    status: {
                        title: 'Online',
                        isOnline: true
                    }
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU',
                    name: '@Lera',
                    status: {
                        title: 'Online',
                        isOnline: true
                    }
                },
                {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU',
                    name: 'Valera',
                    status: {
                        title: 'Online',
                        isOnline: true
                    }
                },
            ],
            messages: [
                {id: 1, message: 'Hello, how are you?', name: 'Sveta'},
                {id: 2, message: 'I,m a good student', name: 'my'},
                {id: 3, message: 'you, how are you', name: 'Alina'},
                {id: 4, message: 'goodbye my friend', name: 'my'},
                {id: 5, message: 'goodbye my friend', name: 'Artem'},
                {id: 6, message: 'goodbye my friend', name: 'my'},
                {id: 7, message: 'goodbye my friend', name: 'Artem'},
                {id: 8, message: 'goodbye my friend', name: 'Artem'},
                {id: 9, message: 'goodbye my friend', name: 'Artem'},
                {id: 10, message: 'goodbye my friend', name: 'Artem'},
            ],
            newMessageText: 'I\'m Message'
        }
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}

export default store;