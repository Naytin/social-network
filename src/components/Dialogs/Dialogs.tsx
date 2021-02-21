import React, {KeyboardEvent} from "react";
import style from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";

type PropsType = dialogsPageType & {
    AddMessage: (value: string) => void
    AddNewMessageText: (value: string) => void
}

export const Dialogs = ({dialogs, messages, newMessageText,AddMessage,AddNewMessageText}: PropsType ) => {
    let messageBody = React.createRef<HTMLInputElement>() // create link for HTML element. and set implicit typing

    const onChangeMessage = () => {
        if (messageBody.current?.value) {
            let text = messageBody.current.value
            AddNewMessageText(text)
        }
    }
    const onSendMessage = () => {
        if (messageBody.current?.value) {
            let text = messageBody.current?.value
            AddMessage(text)
        }
    }
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (messageBody.current?.value) {
                let text = messageBody.current?.value
                AddMessage(text)
            }
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <h4 className={style.title}>Friends messages</h4>
                <div className={style.dialog__wrapper}>
                    {dialogs && dialogs.map((d, i) => <Dialog key={i} id={i} data={dialogs[i]} status={dialogs[i].status}/>)}
                </div>
                <div className={style.shadow__bottom}></div>
            </div>
            <div className={style.messages}>
                <div className={style.shadow__top}></div>
                <div className={style.message__wrapper}>
                    {messages && messages.map(m => <Messages message={m.message} name={m.name} id={m.id} key={m.id}/>)}
                </div>
                <div className={style.input_btn__block}>
                    <input type="text" ref={messageBody} onChange={onChangeMessage} onKeyPress={onKeyPress} value={newMessageText}/>
                    <div className={style.icon}>
                        <i onClick={onSendMessage}>Send</i>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;
