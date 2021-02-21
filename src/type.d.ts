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
    id: string,
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
    value?: string
}

type DispatchDialogsType = {
    AddMessage: (value: string) => void
    AddNewMessageText: (value: string) => void
}

type DispatchProfileType = {
    AddPost: (value: string) => void
    AddNewPostText: (value: string) => void
}
