import React from "react";
import style from './Posts.module.scss'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
type NewPostType = {
    newPostMessage: string
}
export const Posts = ({posts, addPost}: profilePageType & DispatchProfileType) => {
    const addPostText = (text: NewPostType) => {
        addPost(text.newPostMessage)
    }
    return (
        <div className={style.posts__wrapper}>
            <div className={style.modal}>
                <AddNewPost onSubmit={addPostText}/>{/* Передаем в форму callback который под капотом
                будет вызван как handleSubmit и нам вернется объект, с данными из формы*/}
            </div>
        </div>)
}
// создаем компонент form и типизируем стандартным InjectedFormProps который принимает дженерик
const AddNewPostForm: React.FC<InjectedFormProps<NewPostType>> = (props) => {
    console.log(props)
    return (
        //e.preventDefault
        // get all form data and put them to object
        // props.onSubmit(formData)
       //по умолчанию, нам нужно передать стандартный обработчик handleSubmit, который нам попадает из ХОКа reduxForm
        <form onSubmit={props.handleSubmit}>
            {/* вместо тега input нужно заменять на Field component='textarea/input' name с уникальным именем н*/}
            <Field component='textarea' name={'newPostMessage'}/>
            <div><Field component="input" name={'password'} type="text" placeholder={'Password'}/></div>
            <button>Add Post</button>
        </form>
    )
}

// мы должны обернуть нашу форму ХОКом reduxForm,
const AddNewPost = reduxForm<NewPostType>({
    // задаем уникальное имя
    form: 'addNewPost'
})(AddNewPostForm)

