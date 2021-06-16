import React from "react";
import style from './Navbar.module.scss'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <Link className={`${style.nav__item} icon-profile`} to='/profile'/>
                <Link className={`${style.nav__item} icon-commenting-o`} to='/dialogs'/>
                {/*<Link className={style.nav__item} to='/news'> News</Link>*/}
                {/*<Link className={style.nav__item} to='/music'>Music</Link>*/}
                {/*<Link className={style.nav__item} to='/settings'>Settings</Link>*/}
                <Link className={`${style.nav__item} icon-group`} to='/users'/>
            </ul>
        </nav>
    )
}
