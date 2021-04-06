import React, {ChangeEvent, KeyboardEvent} from 'react'
import axios from "axios"
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {getUserStatus, updateStatusProfile} from "../../../redux/actionsCreator/profileAC";


type MapStateToPropsType = {
    status: string
}


type MapDispatchToPropsType = {
    updateStatusProfile: (value: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & {

}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidMount() {
        this.props.updateStatusProfile(this.state.status)
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
        this.props.updateStatusProfile(this.state.status)
    }
    onKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            this.setState({
                editMode: false,
            })
            this.props.updateStatusProfile(this.state.status)
        }
    }

    onStatusChange(e :ChangeEvent<HTMLInputElement>) {
        this.setState({
            status: e.currentTarget.value

        })
    }
    // происходит перерисовка компоненты, когда происходить изменение локального стейта
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        // setState дольжен вызываться внутри условия, иначе будет бесконечная перерисовка
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div  onDoubleClick={this.activateEditMode.bind(this)}><span>{this.props.status}</span></div>}
                {this.state.editMode && <div>
                    <input autoFocus={true} onKeyPress={this.onKeyPress.bind(this)} onChange={this.onStatusChange.bind(this)} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.state.status }/>
                </div>}
            </>
        )
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    status: state.profilePage.status
})
export default connect(MapStateToProps, {updateStatusProfile})(ProfileStatus)