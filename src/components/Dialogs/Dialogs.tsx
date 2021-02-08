import React from "react";
import style from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {actionType, dialogsType, messagesType} from '../../redux/state'
import {AddMessage, AddNewMessageText} from "../../redux/actionsCreator/dialogsAC";



type PropsType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
    newMessageText: string
    dispatch: (action: actionType) => void
}

export const Dialogs = ({dialogs, messages, newMessageText, dispatch}: PropsType) => {
    let messageBody = React.createRef<HTMLInputElement>() // create link for HTML element. and set implicit typing

    const onChangeMessage = () => {
        if (messageBody.current?.value) {
            let text = messageBody.current.value
            dispatch(AddNewMessageText(text))
        }
    }

    const onSendMessage = () => {
        let text = messageBody.current?.value
        if (text) {
            dispatch(AddMessage(text))
        }

    }


    let dialog = dialogs.map((d, i) => <Dialog key={i} id={i} data={dialogs[i]} status={dialogs[i].status}/>)
    let message = messages.map(m => <Messages message={m.message} name={m.name} id={m.id} key={m.id}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <h4 className={style.title}>Friends messages</h4>
                <div className={style.dialog__wrapper}>
                    {dialog}
                </div>
                <div className={style.shadow__bottom}></div>
            </div>
            <div className={style.messages}>
                <div className={style.shadow__top}></div>
                <div className={style.message__wrapper}>
                    {message}
                </div>
                <div className={style.input_btn__block}>
                    <input type="text" ref={messageBody} onChange={onChangeMessage} value={newMessageText}/>
                    <div className={style.icon}>
                        <i onClick={onSendMessage}>Send</i>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;


// export const Dialogs = ({dialogs, messages, newMessageText, dispatch}: PropsType) => {
//
//
//     let messageBody = React.createRef<HTMLInputElement>()
//
//     const onChangeMessage = () => {
//         if (messageBody.current?.value) {
//             let text = messageBody.current.value
//             dispatch(AddNewMessageText(text))
//         }
//     }
//
//     const onSendMessage = () => {
//         let text = messageBody.current?.value
//         if (text) {
//             dispatch(AddMessage(text))
//         }
//
//     }
//
//
//     let dialog = dialogs.map((d, i) => <Dialog key={i} id={i} data={dialogs[i]} status={dialogs[i].status}/>)
//     let message = messages.map(m => <Messages message={m.message} name={m.name} id={m.id} key={m.id}/>)
//     return (
//         <div className={style.dialogs}>
//             <div className={style.dialogsItem}>
//                 <h4 className={style.title}>Friends messages</h4>
//                 <div className={style.dialog__wrapper}>
//                     {dialog}
//                 </div>
//                 <div className={style.shadow__bottom}></div>
//             </div>
//             <div className={style.messages}>
//                 <div className={style.shadow__top}></div>
//                 <div className={style.message__wrapper}>
//                     {message}
//                 </div>
//                 <div className={style.input_btn__block}>
//                     <input type="text" ref={messageBody} onChange={onChangeMessage} value={newMessageText}/>
//                     <div className={style.icon}>
//                         <i onClick={onSendMessage}>Send</i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// };
//
//
// export default Dialogs;