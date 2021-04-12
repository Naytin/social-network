import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import {
    addPost,
    getUserProfile,
    getUserStatus,
    updateStatusProfile
} from "../../redux/actionsCreator/profileAC";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ParamsType = {
    userId: string
}

type MapStateProfileType = {
    posts: postsType[]
    profile: profileUserType | null | undefined
    status: string
    userId: number | null
}

export type DispatchProfileType = {
    addPost: (value: string) => void
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateStatusProfile: (status: string) => void
}

export type OwnProfilePropsType = MapStateProfileType & DispatchProfileType

type PropsType = RouteComponentProps<ParamsType> & OwnProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        // get match params - userId from browser
        let userId = +this.props.match.params.userId
        if (!userId) {
            if(this.props.userId !== null) userId = this.props.userId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            if(this.props.userId) {
                this.props.getUserProfile(this.props.userId)
                this.props.getUserStatus(this.props.userId)
            }
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     updateStatusProfile={this.props.updateStatusProfile}
                     status={this.props.status}
            />
        )
    }
}

const MapStateToProps = (state: AppStateType): MapStateProfileType => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id
})


// withRouter - позволяет получить доступ к истории(свойствам) и ближайшему Route соответствию.
// withRouter - будет передавать обновленные match,location,history - свойства, обернутому компоненту при каждом рендере
let withRouterHOC = withRouter(ProfileContainer)

export default compose(
    connect<MapStateProfileType, DispatchProfileType, {}, AppStateType>
    (MapStateToProps, {addPost, getUserProfile, getUserStatus, updateStatusProfile})
)(withRouterHOC)



