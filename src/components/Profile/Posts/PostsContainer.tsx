import {Posts} from "./Posts"
import {addPost, setUserProfile} from "../../../redux/actionsCreator/profileAC";
import {AppStateType} from "../../../redux/store";
import {connect} from "react-redux";
import React from "react";



class PostsContainer extends React.Component<OwnPostsPropsType, DispatchProfileType> {

    shouldComponentUpdate(nextProps: Readonly<OwnPostsPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
        return nextProps != this.props || nextState != this.state
    }

    render() {
        return <Posts posts={this.props.posts} status={this.props.status} addPost={this.props.addPost}/>;
    }
}


// функция mapStateToProps которая принимает весь стейт целиком и возвращает только те данные,
// которые нам нужны и которые мы описываем в ней
const mapStateToProps = (state: AppStateType): profilePageType => {
    return {
        posts: state.profilePage.posts,
        status: state.profilePage.status
    }
}
// функция mapDispatchToProps служит для того, чтобы передавать дочерней, презентационной компоненте,
// callback-функции


// для сокращения кода, мы можем не создавать callback-mapDispatchToProps, а просто передать объекты(ActionCreators) вторым параметром в connect,
// а connect уже сам создаст mapDispatchToProps вложит каждый ActionCreators в dispatch
// если в объекте имя ключ: значение совпадает, то мы пишем просто ключ.
export default connect<profilePageType, DispatchProfileType, {}, AppStateType>
(mapStateToProps, {addPost,setUserProfile})
(PostsContainer)

type MapStateProfileType = {
    posts: postsType[]
    status: string
}
export type OwnPostsPropsType = MapStateProfileType & DispatchProfileType
