import React from 'react'


class ProfileStatus extends React.Component<any, any> {
    state ={
        editMode: false
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div  onDoubleClick={this.activateEditMode.bind(this)}><span>{'Hello'}</span></div>}
                {this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={'Hello'}/>
                </div>}
            </>
        )
    }
}

export default ProfileStatus