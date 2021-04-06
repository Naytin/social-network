import React from "react";
import { Link } from "react-router-dom";
import style from "./ProfileInfo.module.scss";
import ProfileStatus from './ProfileStatus'


type PropsType = {
    profile: profileUserType | null | undefined
}

let icon = "https://image.flaticon.com/icons/png/512/147/147144.png"

export const ProfileInfo = (props: PropsType) => {
    return (
        <div className={style.profileInfo}>
            <div className={style.profileInfo__wrapper}>
                <div>
                    <img className={style.profileInfo__avatar}
                        src={props.profile?.photos.small ? props.profile?.photos.small : icon}
                         alt=""/>
                </div>
            </div>

            <div className={style.profileInfo__des}>
                <ul className={style.profileInfo__menu}>
                    <Link to='Profile/About' className={style.profileInfo__menu_item}>About</Link>
                    <Link to='Profile/Friends' className={style.profileInfo__menu_item}>Friends</Link>
                    <h6 className={style.profileInfo__title}>{props.profile?.fullName}</h6>
                    <Link to='/Settings' className={style.profileInfo__menu_item}>Settings</Link>
                    <Link to='Profile/Photos' className={style.profileInfo__menu_item}>Photos</Link>
                </ul>
                <div className={style.profileInfo__info}>San Francisco, CA</div>
                <ProfileStatus />
            </div>
        </div>
    )
}