import {FOLLOW,  UNFOLLOW, SET_USERS} from "../actions/actions";
export const follow = (value: string | number) => ({type: FOLLOW, value})
export const unfollow = (value: string | number) => ({type: UNFOLLOW, value})
export const setUsers = (value: any) => ({type: SET_USERS, value})