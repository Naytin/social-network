import React from "react";
import style from './Header.module.scss'

export const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://www.designlime.co.uk/wp-content/uploads/2020/07/social-network-icon-png.png"
                alt=""/>
        </header>
    )
}