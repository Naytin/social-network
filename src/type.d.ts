
type postsType = {
    id: number,
    message: string,
    likesCount: number
}
type profilePageType = {
    posts: Array<postsType>,
    profile?: profileUserType | null | undefined
    status: string
}
type profileUserContacts = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type profileUserType = {
    aboutMe: string
    contacts: profileUserContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
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
    messages: Array<messagesType> | null
}
type messagesType = {
    id: number,
    message: string,
    name: string,
}
type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
}
interface stateType  {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

type userType = {
    id: number
    photos: {small: null | string, large: null | string}
    followed: boolean
    name: string
    status: string | null
    uniqueUrlName: string | null
}

type usersType = {
    filter: string
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type actionType = {
    type: string,
    value?: string
}

type DispatchDialogsType = {
    addMessage: (value: string) => void
}

type DispatchProfileType = {
    addPost: (value: string) => void
    setUserProfile?: (profile: profileUserType) => void
}
