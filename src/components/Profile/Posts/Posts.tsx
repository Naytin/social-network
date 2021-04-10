import React from "react";
import {Post} from "./Post/Post";
import style from './Posts.module.scss'
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type NewPostType = {
    newPostMessage: string
}

export const Posts = ({posts, addPost}: profilePageType & DispatchProfileType) => {
    // создаем ссылку на элемент, который мы привязываем к textarea
    // Использование React.createRef() - это устаревший способ взаимодействия с элементами(BLL - логикой)
    const [modal, setModal] = React.useState(false)

    const addPostText = (text: NewPostType) => {
        addPost(text.newPostMessage)
        setModal(!modal)
    }

    const onModal = () => setModal(!modal)

    let post = posts.map((elem, i) => <Post message={elem.message}
                                            likesCount={elem.likesCount} id={elem.id} key={i}/>)
    return (
        <div className={style.posts__wrapper}>
            <span className={style.modal__open} onClick={onModal}></span>
            {modal &&
            <div className={style.modal}>
                <AddNewPost onSubmit={addPostText}/>
            </div>
            }
            <div className="post">
                {post}
            </div>
        </div>)
}

const AddNewPostForm: React.FC<InjectedFormProps<NewPostType>> = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name={'newPostMessage'}/>
            <button>Add Post</button>
        </form>
    )
}


const AddNewPost = reduxForm<NewPostType>({
    form: 'addNewPost'
})(AddNewPostForm)

