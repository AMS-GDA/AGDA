import React from 'react';
import {Link} from 'react-router';
import css from './menu.css';
import {isMobile} from '../utility.js';
import MobileMenu from './MobileMenu.jsx';

export default function Menu() {
    return isMobile() ? <MobileMenu /> : desktopMenu();
}

function desktopMenu() {
    return (
        <div className={css.wrapper}>
            <div className={css.menuItem}><Link to="/">Home</Link></div>
            <div className={css.itemWrapper}>
                <div className={css.menuItem}><Link to="about">About</Link></div>
                <div className={css.menuItem}><Link to="calendar">Calendar</Link></div>
                <div className={css.menuItem}><Link to="vr">VR Division</Link></div>
            </div>
        </div>
    );
}
