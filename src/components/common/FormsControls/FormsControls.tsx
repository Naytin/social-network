import React from 'react'
import style from './FormsControls.module.scss'

// const FormControl = ({input, meta,child, ...props}: any) => {
//     const hasError = meta.touched && meta.error
//     return <>
//         <div className={`${style.formControl} ${hasError ? style.error : ''}`} {...input} {...props}>
//             {props.children}
//         </div>
//         {hasError && <span className={style.errorMessage}>{meta.error}</span>}
//     </>
// }
//
// export const TextArea = (props: any) => {
//     const {input, meta, child, restProps} = props
//     return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
// }

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


