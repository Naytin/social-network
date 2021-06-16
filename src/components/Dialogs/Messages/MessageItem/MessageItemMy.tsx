import style from "../Messages.module.scss";
import React from "react";

type messagesType = {
    id: number,
    message: string,
    name: string,
    avatar?: string
}
export const MessageItemMy = React.memo(({name, message}: messagesType) => {
    return (
        <div className={style.messagesMy}>
            <span className={style.message}>
                {message}
            </span>
            <div>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU'}
                    alt=""/>
                <div>{name}</div>
            </div>
        </div>

    )
})

export const MessageItem = React.memo(({name, message, avatar}: messagesType) => {
    return (
        <div className={style.messagesSubscriber}>
            <div>
                <img
                    src={avatar}
                    alt=""/>
                <div>{name}</div>
            </div>
            <span className={style.message}>
                {message}
            </span>
        </div>

    )
})

