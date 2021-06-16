import React from 'react'
import style from './FormsControls.module.scss'
import MessageInform from "../MessageInform/MessageInform";

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <>
        <input className={`${style.formControl} ${hasError ? style.error : ''}`} {...input} {...props}/>
        {hasError && <MessageInform className={style.errorMessage}>{meta.error}</MessageInform>}
    </>
}

export const TextArea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <>
            <textarea className={`${style.formControl} ${hasError ? style.error : ''}`} {...input} {...props}/>
        {hasError && <MessageInform className={style.errorMessage}>{meta.error}</MessageInform>}
        </>
}


