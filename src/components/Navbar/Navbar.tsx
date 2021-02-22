import React from "react";
import style from './Navbar.module.scss'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                {/*<div className={style.link__item}>*/}
                {/*    <img src="https://img.icons8.com/ios/30/ffffff/gender-neutral-user.png" alt='' className={style.icon}/>*/}

                {/*</div>*/}
                <Link className={style.nav__item} to='/profile'>Profile</Link>
                <Link className={style.nav__item} to='/dialogs'>Dialogs</Link>
                <Link className={style.nav__item} to='/news'> News</Link>
                <Link className={style.nav__item} to='/music'>Music</Link>
                <Link className={style.nav__item} to='/settings'>Settings</Link>
                <Link className={style.nav__item} to='/users'>Users</Link>
            </ul>
            {/*<button onClick={openMenu} className={style.open__menu}>&lsaquo;</button>*/}
        </nav>
    )
}
