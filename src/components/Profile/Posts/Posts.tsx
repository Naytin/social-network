import React, {useEffect} from "react";
import {Post} from "./Post/Post";
import style from './Posts.module.scss'
import {actionType, postsType} from '../../../redux/state'
import {AddNewPostText, AddPost} from "../../../redux/actionsCreator/profileAC";

type propsType = {
    posts: Array<postsType>
    newPostText: string
    dispatch: (action: actionType) => void
}

export const Posts = ({posts, dispatch, newPostText}: propsType) => {

    // создаем ссылку на элемент, который мы привязываем к textarea
    // Использование React.createRef() - это устаревший способ взаимодействия с элементами(BLL - логикой)
    const getMessage = React.createRef<HTMLTextAreaElement>();
    const [modal, setModal] = React.useState(true)

    function addPostText() {
        let text = getMessage.current?.value // checking if getMessage has a value or undefined
        if (text) {
            dispatch(AddPost(text))
            setModal(!modal)
        }
    }

    // useEffect(() => {
    //     window.addEventListener('click', (e) => {
    //         if (getMessage.current) {
    //             console.log('click')
    //         }
    //     })
    // })


    let onChangePostText = () => {
        let text = getMessage.current?.value
        if (text) {
            dispatch(AddNewPostText(text))
        }
    }

    const onModal = () => {
        setModal(!modal)
    }

    let post = posts.map((elem, i) => <Post message={elem.message} likesCount={elem.likesCount} id={elem.id} key={i}/>)
    return (
        <div className={style.posts__wrapper}>
            <span className={style.modal__open} onClick={onModal}></span>

            {modal &&
                <div className={style.modal}>
                    <textarea ref={getMessage} onChange={onChangePostText} value={newPostText}>
                    </textarea>
                    <button onClick={addPostText}>Add Post</button>
                </div>
            }
            <div className="post">
                {post}
            </div>
        </div>)
}

