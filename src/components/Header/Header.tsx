import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.scss'
import Button from "../common/Button/Button";
type PropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

let icon = "https://image.flaticon.com/icons/png/512/147/147144.png"

export const Header = ({login, isAuth, logout}: PropsType) => {
    return (
        <header className={style.header}>
            <div>
                <img className={style.logo} src="https://www.designlime.co.uk/wp-content/uploads/2020/07/social-network-icon-png.png"
                     alt="logo"/>
                Stello
            </div>

                <div className={style.loginContainer}>
                    {isAuth ?
                        <>
                            <div className={style.avatar_container}>
                                <img className={style.header__avatar}
                                     src={icon}
                                     alt='Avatar' />
                                <span>{login}</span>
                            </div>

                            <Button onClick={logout}>Logout</Button>
                        </> : <NavLink to='/login' className={style.login}>Login</NavLink>}

                </div>
        </header>
    )
}