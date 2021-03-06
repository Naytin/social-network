import React from "react";
import { Link } from "react-router-dom";
import style from './Dialog.module.scss'

type objectType = {
    avatar: string,
    name: string,
}

type dialogType = {
    data: objectType
    id: number
    status: statusType,
    userId: string
    getUserId: (userId: string) => void
}
export const Dialog = React.memo(({data, status, userId, getUserId}: dialogType) => {
    let path = `/dialogs/user/${data.name}`
    const getUserIdHandler = () => {
        getUserId(userId)
    }
    return (
        <Link to={path}>
            <div className={style.dialog} onClick={getUserIdHandler}>
                <div className={style.avatar__wrapper}>
                    <img src={data.avatar} alt=""/>
                    <span className={status.isOnline ? style.online : style.offline }></span>
                </div>
                <div className={style.status__block}>
                    <div>{data.name}</div>
                    <span className={style.status}>{status.title}</span>
                </div>
            </div>
        </Link>

    )
});