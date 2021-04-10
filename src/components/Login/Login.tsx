import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {login} from "../../redux/actionsCreator/authAC";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type MapStateToProps = {

}

type MapDispatchToProps = {
    login: (formData: FormDataType) => void
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>>  = (props) => {
    //e.preventDefault
    // get all form data and put them to object
    // props.onSubmit(formData)
    return (<form onSubmit={props.handleSubmit}>
                <div><Field component="input" name={'login'} type="text" placeholder={'Login'}/></div>
                <div><Field component="input" name={'password'} type="text" placeholder={'Password'}/></div>
                <div><Field component="input" name={'rememberMe'} type="checkbox"/></div>
                <div>
                    <button >Login</button>
                </div>
            </form>
    )
}

//HOC reduxForm - это контейнерная компонента
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props: MapDispatchToProps) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData)
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({

})

export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps, {login}
)
(Login)
