import {FOLLOW, UNFOLLOW, SET_USERS, SET_CURRENT_PAGE, SET_TOTAL_USERS, TOGGLE_IS_FETCHING} from "../actions/actions";

export const follow = (uId: number):followActionType => ({type: FOLLOW, uId})
export const unfollow = (uId: number):unFollowActionType => ({type: UNFOLLOW, uId})
export const setUsers = (users: userType[]):setUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number):setPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number):setTotalUsersActionType => ({type: SET_TOTAL_USERS, totalCount})
export const toggleIsFetching = (isFetching: boolean):toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})




type followActionType = {
    type: typeof FOLLOW
    uId: number
}

type unFollowActionType = {
    type: typeof UNFOLLOW
    uId: number
}

type setPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type setUsersActionType = {
    type: typeof SET_USERS
    users: userType[]
}
type setTotalUsersActionType = {
    type: typeof SET_TOTAL_USERS
    totalCount: number
}
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type UsersActionTypes =
    followActionType |
    unFollowActionType |
    setPageActionType |
    setUsersActionType |
    setTotalUsersActionType |
    toggleIsFetchingType