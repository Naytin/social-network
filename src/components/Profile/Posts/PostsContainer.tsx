import {Posts} from "./Posts"
import {AddNewPostText, AddPost} from "../../../redux/actionsCreator/profileAC";
import {AppStateType} from "../../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): profilePageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchProfileType => {
    return {
        AddNewPostText: (value: string) => {
            dispatch(AddNewPostText(value))
        },
        AddPost: (value) => {
            dispatch(AddPost(value))
        }
    }
}

const PostsContainer = connect<profilePageType, DispatchProfileType, OwnPropsType, AppStateType>
(mapStateToProps, mapDispatchToProps)
(Posts)

export default PostsContainer