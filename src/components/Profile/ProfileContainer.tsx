import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import {addNewPostText, addPost, setUserProfile} from "../../redux/actionsCreator/profileAC";
import axios from "axios";

type OwnPropsType = {}

class ProfileContainer extends React.Component<profilePageType & DispatchProfileType > {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(
            response => {
                this.props.setUserProfile(response.data)
            }
        )
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const MapStateToProps = (state: AppStateType): profilePageType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
})
export default compose(
    connect<profilePageType, DispatchProfileType, OwnPropsType, AppStateType>
    (MapStateToProps, {addPost, addNewPostText,setUserProfile})
)(ProfileContainer)



