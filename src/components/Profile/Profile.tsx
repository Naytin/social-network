import React from "react";
import style from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

type PropsType = {
    profile: profileUserType | null | undefined
    updateStatusProfile: (status: string) => void
    status: string
    myId: number | null
}
export const Profile = (props: PropsType) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={props.profile}
                         updateStatusProfile={props.updateStatusProfile}
                         status={props.status}
                         myId={props.myId}
            />
            <PostsContainer/>
        </div>
    )
}

