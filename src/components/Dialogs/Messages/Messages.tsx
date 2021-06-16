import React from "react";
import {MessageItemMy, MessageItem} from "./MessageItem/MessageItemMy";

type messagesType = {
    id: number,
    message: string,
    name: string,
    avatar: string
}
export const Messages = React.memo(({message, name, id,avatar}: messagesType) => {
    if (name === 'Naytin') {
        return <MessageItemMy name={name} message={message} id={id}/>
    } else {
        return <MessageItem avatar={avatar} name={name} message={message} id={id}/>
    }
})
