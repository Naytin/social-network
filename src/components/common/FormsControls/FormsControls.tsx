import React from 'react'
import style from './FormsControls.module.scss'

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <>
        <input className={`${style.formControl} ${hasError ? style.error : ''}`} {...input} {...props}/>
        {hasError && <span className={style.errorMessage}>{meta.error}</span>}
    </>
}

export const TextArea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <>
            <textarea className={`${style.formControl} ${hasError ? style.error : ''}`} {...input} {...props}/>
            {hasError && <span className={style.errorMessage}>{meta.error}</span>}
        </>
}


