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
}
export const Dialog = React.memo(({data, id, status}: dialogType) => {
    let path = `/dialogs/${id}`
    return (
        <Link to={path}>
            <div className={style.dialog}>
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