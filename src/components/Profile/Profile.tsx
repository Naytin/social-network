import React from "react";
import style from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

export const Profile = () => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}

