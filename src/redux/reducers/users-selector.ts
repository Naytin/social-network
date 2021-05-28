import {AppStateType} from "../store";
// import {createSelector} from "reselect";

export const getUsers = (state: AppStateType) => state.usersPage.users

// library reselect
// takes simple selectors (dependencies) and transfer into function parameters are what ordinary return selectors.
// Selectors can compute derived data, allowing Redux to store the minimal possible state.
// Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
// Selectors are composable. They can be used as input to other selectors.
// export const getUsersSelector = createSelector(getUsers,(users) => {
//     return users.filter(u => true)
// })

export const getFilteredUsers = (state: AppStateType) => state.usersPage.users
    .filter(u => u.name.toLowerCase().indexOf(state.usersPage.filter.toLowerCase()) > -1)

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const getFollowingInProgress= (state: AppStateType) => state.usersPage.followingInProgress