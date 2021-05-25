import React, {ChangeEvent, KeyboardEvent} from 'react'

class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status:  this.props.status
    }

    componentDidMount() {
        this.props.updateStatusProfile(this.state.status)
    }

    activateEditMode() {
        if(this.props.profileStatus?.userId === 13139) {
            this.setState({
                editMode: true
            })
        }
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
    // componentDidUpdate - позволяет перерисовать компонент, при изменении локального стейта
    // получает prevProps и prevState который мы можем проверить на изменение.
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
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
                    <div  onDoubleClick={this.activateEditMode.bind(this)}><span>{this.props.status || 'No status'}</span></div>}
                {this.state.editMode && <div>
                    <input autoFocus={true}
                           onKeyPress={this.onKeyPress.bind(this)}
                           onChange={this.onStatusChange.bind(this)}
                           onBlur={this.deactivateEditMode.bind(this)}
                           type="text"
                           value={this.state.status}/>
                </div>}
            </>
        )
    }
}

// types
type PropsType = {
    updateStatusProfile: (status: string) => void
    status: string
    profileStatus: profileUserType | null | undefined
}

type StateType = {
    editMode: boolean
    status:  string
}

export default ProfileStatus