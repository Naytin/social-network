import {
    FOLLOW,
    UNFOLLOW,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "../actions/actions";
import {usersAPI} from "../../api/api";
import { ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";

// actions
export const followAC = (uId: number): followActionType => ({type: FOLLOW, uId})
export const unfollowAC = (uId: number): unFollowActionType => ({type: UNFOLLOW, uId})
export const setUsersAC = (users: userType[]): setUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number): setTotalUsersActionType => ({type: SET_TOTAL_USERS, totalCount})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): toggleFollowingInProgress =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export const setFilter = (filter: string): setFilterType => ({type: 'SET_FILTER', filter})


// thunks
export const usersRequest = (page: number,pageSize: number):ThunkType => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        usersAPI.getUsers(page, pageSize)
            .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        }).catch(e => {
            alert(e)
        });
    }
}


export const follow = (userId: number):ThunkType => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.userFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                    dispatch(toggleFollowingInProgress(false, userId))
                }
            }).catch(e => {
            alert('you are not authorized')
        })
    }
}
export const unfollow = (userId: number):ThunkType => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.userUnfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId))
                    dispatch(toggleFollowingInProgress(false, userId))
                }
            }).catch(e => {
            alert(e)
        })
    }
}

// types
export type ThunkType = ThunkAction<void, AppStateType, unknown, UsersActionTypes>
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

type toggleFollowingInProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

type setFilterType = {
    type: 'SET_FILTER'
    filter: string
}

export type UsersActionTypes =
    followActionType |
    unFollowActionType |
    setPageActionType |
    setUsersActionType |
    setTotalUsersActionType |
    toggleIsFetchingType |
    toggleFollowingInProgress |
    setFilterType