import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.scss'
type PropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

export const Header = ({login, isAuth, logout}: PropsType) => {
    return (
        <header className={style.header}>
            <img src="https://www.designlime.co.uk/wp-content/uploads/2020/07/social-network-icon-png.png"
                alt=""/>
                <div className={style.login}>
                    {isAuth ? <div><button className={style.logout} onClick={logout}>Logout</button><span>{login}</span></div> : <NavLink to='/login'>Login</NavLink>}
                </div>
        </header>
    )
}