import React from "react";
import style from './Profile.module.scss'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, postsType} from '../../redux/state'

type propsType = {
    // addPost: () => void
    // changeMessage: (text: string) => void
    posts: Array<postsType>
    newPostText: string
    dispatch: (action: actionType) => void
}

export const Profile = ({posts, newPostText,dispatch}: propsType) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <Posts posts={posts} newPostText={newPostText} dispatch={dispatch} />
        </div>
    )
}

