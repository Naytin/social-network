
type postsType = {
    id: number,
    message: string,
    likesCount: number
}
type profilePageType = {
    posts: Array<postsType>,
    newPostText: string
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
    id: number
    photos: {small: null | string, large: null | string}
    followed: boolean
    name: string
    status: string | null
    uniqueUrlName: string | null
}

type usersType = {
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
    addNewMessageText: (value: string) => void

}

type DispatchProfileType = {
    addPost: (value: string) => void
    addNewPostText: (value: string) => void
    setUserProfile?: (profile: profileUserType) => void
}

// type DispatchUsersType = {
//     follow: (uId: number) => void
//     unfollow: (uId: number) => void
//     setUsers?: (users: userType[]) => void
//     setCurrentPage?: (currentPage: number) => void
//     setTotalUsersCount?: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
//     getUsersTC: (currentPage: number, pageSize: number) => ThunkType
// }
