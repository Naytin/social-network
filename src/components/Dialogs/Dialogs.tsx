import React from "react";
import style from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {Field,InjectedFormProps, reduxForm} from "redux-form";
import { required } from "../../utils/validators";
import {Input} from "../common/FormsControls/FormsControls";

type PropsType = {
    addMessage: (value: string) => void
}

type AddMessageFormData = {
    dialogsMessage: string
}

export const Dialogs = React.memo(({dialogs, messages,addMessage}: PropsType & dialogsPageType) => {

    const onSubmit = (newMessage: AddMessageFormData) => {
        addMessage(newMessage.dialogsMessage)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <h4 className={style.title}>Friends messages</h4>
                <div className={style.dialog__wrapper}>
                    {dialogs && dialogs.map((d, i) => <Dialog
                        key={i} id={i} data={dialogs[i]}
                        status={dialogs[i].status}/>)}
                </div>
                <div className={style.shadow__bottom}></div>
            </div>
            <div className={style.messages}>
                <div className={style.shadow__top}></div>
                <div className={style.message__wrapper}>
                    {messages && messages.map(m => <Messages
                        message={m.message} name={m.name} id={m.id} key={m.id}/>)}
                </div>
                <AddMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
});

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormData>>  = React.memo((props ) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.input_btn__block}>
            <Field component={Input}
                   name={'dialogsMessage'}
                   validate={[required]}
                   type="text"
                   />
            <div className={style.icon}>
                <button>Send</button>
            </div>
        </form>
    )
})

//HOC reduxForm - это контейнерная компонента
const AddMessageReduxForm = reduxForm<AddMessageFormData>({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs;
