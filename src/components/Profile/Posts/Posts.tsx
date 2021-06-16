import React from "react";
import {Post} from "./Post/Post";
import style from './Posts.module.scss'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../utils/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";
import Button from "../../common/Button/Button";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";

// создаем компонент form и типизируем стандартным InjectedFormProps который принимает дженерик
const AddNewPostForm: React.FC<InjectedFormProps<NewPostType>> = React.memo((props) => {
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
            <Button>Send post</Button>
        </form>
    )
})

// мы должны обернуть нашу форму ХОКом reduxForm,
const AddNewPost = reduxForm<NewPostType>({
    // задаем уникальное имя
    form: 'addNewPost'
})(AddNewPostForm)

export const Posts = React.memo(({posts, addPost}: profilePageType & DispatchProfileType) => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const [modal, setModal] = React.useState(false)
    const onSubmit = (text: NewPostType) => {
        addPost(text.newPostMessage)
        setModal(!modal)
    }

    const onModal = () => setModal(!modal)


    let post = posts.map((elem, i) => <Post message={elem.message} likesCount={elem.likesCount} id={elem.id} key={i}/>)
    return (
        <div className={style.posts__wrapper}>
            {/*<Button  onClick={onModal}>Add Post</Button>*/}
            {modal &&
            <div className={style.modal}>
                <AddNewPost onSubmit={onSubmit}/>{/* Передаем в форму callback который под капотом
                будет вызван как handleSubmit и нам вернется объект, с данными из формы*/}
            </div>
            }
            <div className="post">
                {isAuth ? post : 'posts not found'}
            </div>
        </div>)
})

// types
type NewPostType = {
    newPostMessage: string
}

