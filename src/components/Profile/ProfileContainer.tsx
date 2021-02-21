import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import {AddNewPostText, AddPost} from "../../redux/actionsCreator/profileAC";

type OwnPropsType = {

}
const MapStateToProps = (state: AppStateType): profilePageType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})


const ProfileContainer = compose(
    connect<profilePageType,DispatchProfileType,OwnPropsType, AppStateType>
    (MapStateToProps,{AddPost, AddNewPostText})
)(Profile)

export default ProfileContainer;
