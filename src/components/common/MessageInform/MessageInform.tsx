import React, { HTMLAttributes} from 'react'
import s from './MessageInform.module.scss'



const MessageInform: React.FC<HTMLAttributes<HTMLDivElement>> = React.memo(({
                                      className,
                                      ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
                                  }) => {
    return <div className={s.box__message} {...restProps}/>
})

export default MessageInform