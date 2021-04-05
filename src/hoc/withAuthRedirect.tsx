import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from "../redux/store";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({isAuth: state.auth.isAuth})

// ComponentType - распознает тип компоненты, которая приходит в параметрах. с помощью дженерика <T> получаем компоненту
// и передаем ее в ComponentType<T>
export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        // деструктуризируем пропсы
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        //с помощью as T указываем, чтобы пропсы считывал из типизации как T
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}

