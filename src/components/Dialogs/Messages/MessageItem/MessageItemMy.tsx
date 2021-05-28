import style from "../Messages.module.scss";
import React from "react";


export const MessageItemMy = React.memo(({name, message, id}: messagesType) => {
    return (
        <div className={style.messagesMy}>
            <span className={style.message}>
                {message}
            </span>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV83gjFPxbUtDH5iJuUHJHG45z--_hYg6GUA&usqp=CAU'
                    alt=""/>
                <div>{name}</div>
            </div>
        </div>

    )
})

export const MessageItem = React.memo(({name, message, id}: messagesType) => {
    return (
        <div className={style.messagesSubscriber}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV83gjFPxbUtDH5iJuUHJHG45z--_hYg6GUA&usqp=CAU'
                    alt=""/>
                <div>{name}</div>
            </div>
            <span className={style.message}>
                {message}
            </span>
        </div>

    )
})

