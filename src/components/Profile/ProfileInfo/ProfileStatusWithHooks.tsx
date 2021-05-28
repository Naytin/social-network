import React, {ChangeEvent, KeyboardEvent, useEffect} from 'react'

const ProfileStatusWithHooks: React.FC<PropsType> = React.memo((props) => {
    const [status, setStatus] = React.useState(props.status)
    const [editMode, setEditMode] = React.useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) // call useEffect when props.status changed

    const activateEditMode = () => {
        if (props.profileStatus?.userId === 13139) {
            setEditMode(true)
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusProfile(status)
    }

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const changeStatusKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditMode(false)
            setStatus(e.currentTarget.value)
            props.updateStatusProfile(status)
        }
    }


    return (
        <>
            {!editMode &&
            <div onDoubleClick={activateEditMode}><span>{status || 'No status'}</span></div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onKeyPress={changeStatusKey}
                       onChange={changeStatus}
                       type="text"
                       value={status}/>
            </div>}
        </>
    )
})

// types
type PropsType = {
    updateStatusProfile: (status: string) => void
    status: string
    profileStatus: profileUserType | null | undefined
}

export default ProfileStatusWithHooks