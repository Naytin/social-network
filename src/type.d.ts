type postsType = {
    id: number,
    message: string,
    likesCount: number
}
type profilePageType = {
    posts: Array<postsType>,
    newPostText: string
}

type statusType = {
    title: string,
    isOnline: boolean
}

type dialogsType = {
    avatar: string,
    name: string,
    status: statusType
}
type messagesType = {
    id: number,
    message: string,
    name: string,
}
type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
    newMessageText: string
}
interface stateType  {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

type actionType = {
    type: string,
    value: string
}




type DispatchType = (args: actionType) => actionType