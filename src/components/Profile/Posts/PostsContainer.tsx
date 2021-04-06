import {Posts} from "./Posts"
import {addNewPostText, addPost, setUserProfile} from "../../../redux/actionsCreator/profileAC";
import {AppStateType} from "../../../redux/store";
import {connect} from "react-redux";

type OwnPropsType = {}


// функция mapStateToProps которая принимает весь стейт целиком и возвращает только те данные,
// которые нам нужны и которые мы описываем в ней
const mapStateToProps = (state: AppStateType): profilePageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        status: state.profilePage.status
    }
}
// функция mapDispatchToProps служит для того, чтобы передавать дочерней, презентационной компоненте,
// callback-функции


// для сокращения кода, мы можем не создавать callback-mapDispatchToProps, а просто передать объекты(ActionCreators) вторым параметром в connect,
// а connect уже сам создаст mapDispatchToProps вложит каждый ActionCreators в dispatch
// если в объекте имя ключ: значение совпадает, то мы пишем просто ключ.
const PostsContainer = connect<profilePageType, DispatchProfileType, OwnPropsType, AppStateType>
(mapStateToProps, {addNewPostText,addPost,setUserProfile})
(Posts)

export default PostsContainer