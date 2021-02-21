import React from "react";
import style from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

export const Profile = ({posts, newPostText, AddPost, AddNewPostText}: profilePageType & DispatchProfileType) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}

