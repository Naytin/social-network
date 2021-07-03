import React from "react";
import style from './Navbar.module.scss'
import {Link, useLocation} from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation()
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <Link className={`${style.nav__item} icon-profile ${location.pathname === '/profile' ? 
                    style.active : null}`} to='/profile'/>
                <Link className={`${style.nav__item} icon-commenting-o ${location.pathname === '/dialogs' ? 
                    style.active : null}`} to='/dialogs'/>
                {/*<Link className={style.nav__item} to='/news'> News</Link>*/}
                {/*<Link className={style.nav__item} to='/music'>Music</Link>*/}
                {/*<Link className={style.nav__item} to='/settings'>Settings</Link>*/}
                <Link className={`${style.nav__item} icon-group ${location.pathname === '/users' ? 
                    style.active : null}`} to='/users'/>
            </ul>
        </nav>
    )
}
