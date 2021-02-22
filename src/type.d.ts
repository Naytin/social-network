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

type userType = {
    id: number | string
    photos: {small: null | string, large: null | string}
    followed: boolean
    name: string
    status: string | null
    uniqueUrlName: string | null
    // location: {city: string, country: string}
}

type usersType = {
    users: userType[]
}

type actionType = {
    type: string,
    value?: any
}

type DispatchDialogsType = {
    AddMessage: (value: string) => void
    AddNewMessageText: (value: string) => void
}

type DispatchProfileType = {
    AddPost: (value: string) => void
    AddNewPostText: (value: string) => void
}
type DispatchUsersType = {
    follow: (value: number | string) => void
    unfollow: (value: number | string) => void
    setUsers: (value: any) => void
}

