import React from "react";
import {Post} from "./Post/Post";
import style from './Posts.module.scss'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../utils/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

// создаем компонент form и типизируем стандартным InjectedFormProps который принимает дженерик
const AddNewPostForm: React.FC<InjectedFormProps<NewPostType>> = (props) => {
    return (
        //e.preventDefault
        // get all form data and put them to object
        // props.onSubmit(formData)
        //по умолчанию, нам нужно передать стандартный обработчик handleSubmit, который нам попадает из ХОКа reduxForm
        <form onSubmit={props.handleSubmit}>
            {/* вместо тега input нужно заменять на Field component='textarea/input' name с уникальным именем н*/}
            <Field component={TextArea}
                   name={'newPostMessage'}
                   validate={[required]}
            />
            <button>Add Post</button>
        </form>
    )
}

// мы должны обернуть нашу форму ХОКом reduxForm,
const AddNewPost = reduxForm<NewPostType>({
    // задаем уникальное имя
    form: 'addNewPost'
})(AddNewPostForm)

export const Posts = ({posts, addPost}: profilePageType & DispatchProfileType) => {
    const [modal, setModal] = React.useState(false)

    const onSubmit = (text: NewPostType) => {
        addPost(text.newPostMessage)
        setModal(!modal)
    }

    const onModal = () => setModal(!modal)

    let post = posts.map((elem, i) => <Post message={elem.message} likesCount={elem.likesCount} id={elem.id} key={i}/>)
    return (
        <div className={style.posts__wrapper}>
            <span className={style.modal__open} onClick={onModal}></span>
            {modal &&
            <div className={style.modal}>
                <AddNewPost onSubmit={onSubmit}/>{/* Передаем в форму callback который под капотом
                будет вызван как handleSubmit и нам вернется объект, с данными из формы*/}
            </div>
            }
            <div className="post">
                {post}
            </div>
        </div>)
}

// types
type NewPostType = {
    newPostMessage: string
}

