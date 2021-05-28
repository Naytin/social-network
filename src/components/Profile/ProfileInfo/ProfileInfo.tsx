import React from "react";
import { Link } from "react-router-dom";
import style from "./ProfileInfo.module.scss";
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type PropsType = {
    profile: profileUserType | null | undefined
    updateStatusProfile: (status: string) => void
    status: string
}

let icon = "https://image.flaticon.com/icons/png/512/147/147144.png"

export const ProfileInfo = React.memo((props: PropsType) => {
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
                    <Link to='Test/About' className={style.profileInfo__menu_item}>About</Link>
                    <Link to='Test/Friends' className={style.profileInfo__menu_item}>Friends</Link>
                    <h6 className={style.profileInfo__title}>{props.profile?.fullName}</h6>
                    <Link to='/Settings' className={style.profileInfo__menu_item}>Settings</Link>
                    <Link to='Test/Photos' className={style.profileInfo__menu_item}>Photos</Link>
                </ul>
                <div className={style.profileInfo__info}>San Francisco, CA</div>
                <ProfileStatusWithHooks updateStatusProfile={props.updateStatusProfile}
                              status={props.status}
                             profileStatus={props.profile} />
                {/*<ProfileStatus updateStatusProfile={props.updateStatusProfile}*/}
                {/*               status={props.status}*/}
                {/*               profileStatus={props.profile}*/}
                {/*/>*/}
            </div>
        </div>
    )
})