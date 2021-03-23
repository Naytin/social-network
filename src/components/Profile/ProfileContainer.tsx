import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import {addNewPostText, addPost, getUserProfile} from "../../redux/actionsCreator/profileAC";
import { RouteComponentProps, withRouter } from "react-router-dom";

type ParamsType = {
    userId: string
}

type MapStateProfileType = {
    posts: postsType[]
    newPostText: string
    profile: profileUserType | null | undefined
}

export type DispatchProfileType = {
    addPost: (value: string) => void
    addNewPostText: (value: string) => void
    getUserProfile: (userId: string) => void

}

export type OwnProfilePropsType = MapStateProfileType & DispatchProfileType

type PropsType = RouteComponentProps<ParamsType> & OwnProfilePropsType

class ProfileContainer extends React.Component<PropsType > {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(userId) {
            this.props.getUserProfile(userId)
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const MapStateToProps = (state: AppStateType): MapStateProfileType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
})

let withRouterHOC = withRouter(ProfileContainer)

export default compose(
    connect<MapStateProfileType, DispatchProfileType, {}, AppStateType>
    (MapStateToProps, {addPost, addNewPostText,getUserProfile})
)(withRouterHOC)



