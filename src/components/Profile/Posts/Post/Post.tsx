import React from "react";
import style from './Post.module.scss'

type PostType = {
    message: string,
    likesCount: number
    id: number
}

export const Post = ({message, likesCount}: PostType) => {

    let date = new Date().toJSON().slice(0, 10);
    let time = new Date().toTimeString().slice(0, 8);
    let dateTime = `${date} ${time}`;


    return (
        <div className={style.post__item}>
            <div className={style.post__header}>
                <img className={style.post__avatar}
                     src="https://image.flaticon.com/icons/png/512/147/147144.png"
                     alt=""/>
                <div>
                    <span className={style.post__name}>
                        James Luis
                     </span>
                    <time>{date}</time>
                </div>
            </div>
            <article>
                {message}
            </article>
            <div className={style.post__comments}>
                <span>Likes<b>{likesCount}</b></span>
            </div>
        </div>)
}