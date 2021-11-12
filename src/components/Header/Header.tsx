import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={s.header_wrapper}>
        <div className={s.header}>
            <div className={s.logo}>
                <img className={s.img_logo} alt='logo'
                     src='https://www.nicepng.com/png/full/82-824139_chat-icons-png-image-library-message-icon-black.png'/>
                <div className={s.text_logo}>mesUp</div>
            </div>
        </div>
    </header>
}

export default Header;