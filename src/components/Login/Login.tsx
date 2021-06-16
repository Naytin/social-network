import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {login} from "../../redux/actionsCreator/authAC";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {Redirect} from "react-router-dom";
import style from './Login.module.scss'
import Button from "../common/Button/Button";

const LoginForm: React.FC<InjectedFormProps<FormDataType>>  = (props) => {
    //e.preventDefault
    // get all form data and put them to object
    // props.onSubmit(formData)
    return (<form onSubmit={props.handleSubmit}>
                <div><span>{props.error}</span></div>
                <div style={{position: 'relative'}}>
                    <div>Email or username</div>
                    <Field component={Input}
                            name={'email'}
                            type="text"
                            placeholder={'Login'}
                            validate={[required]}
                /></div>
                <div style={{position: 'relative'}}>
                    <Field component={Input}
                            name={'password'}
                            type="password"
                            placeholder={'Password'}
                            validate={[required]}
                /></div>
                <div>
                    <Field component='input'
                            name={'rememberMe'}
                            type="checkbox"/>
                            <span>Remember Me</span>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button style={{'width': '120px'}}>Login</Button>
                </div>
            </form>
    )
}

//HOC reduxForm - это контейнерная компонента
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props: MapDispatchToProps & MapStateToProps) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={style.loginContainer}>
            <h1>Log in</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth
})

// types
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type MapStateToProps = {
    isAuth: boolean
}
type MapDispatchToProps = {
    login: (formData: FormDataType) => void
}

export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps, {login}
)(Login)
