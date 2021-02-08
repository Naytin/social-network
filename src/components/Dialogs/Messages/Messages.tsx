import React from "react";
import {messagesType} from '../../../redux/state'
import {MessageItemMy, MessageItem} from "./MessageItem/MessageItemMy";

export const Messages = ({message, name, id}: messagesType) => {
    if (name === 'my') {
        return <MessageItemMy name={name} message={message}/>
    } else {
        return <MessageItem name={name} message={message}/>
    }
}
