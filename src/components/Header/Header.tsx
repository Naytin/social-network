import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.scss'
type PropsType = {
    login: string | null
    isAuth: boolean
}

export const Header = ({login, isAuth}: PropsType) => {
    return (
        <header className={style.header}>
            <img
                src="https://www.designlime.co.uk/wp-content/uploads/2020/07/social-network-icon-png.png"
                alt=""/>
                <div className={style.login}>
                    {isAuth ? login : <NavLink to='/login'>Login</NavLink>}
                </div>
        </header>
    )
}