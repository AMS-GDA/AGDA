import React, {Component} from 'react';
import {Link} from 'react-router';
import css from './mobileMenu.css';

export default class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    menuItems() {
        return (
            <div className={css.wrapper}>
                {this.menuIcon()}
                <div className={css.menuItem}><Link to="/">Home</Link></div>
                <div className={css.menuItem}><Link to="about">About</Link></div>
                <div className={css.menuItem}><Link to="calendar">Calendar</Link></div>
                <div className={css.menuItem}><Link to="members">Member Resources</Link></div>
                <div className={css.menuItem}><Link to="vr">VR Division</Link></div>
            </div>
        );
    }

    menuIcon() {
        return (
            <div className={css.icon} onClick={this.toggleMenu} id="menu">
                <div className={css.iconBar}></div>
                <div className={css.iconBar}></div>
                <div className={css.iconBar}></div>
            </div>
        );
    }

    toggleMenu() {
        const isOpen = !this.state.isOpen;
        this.setState({ isOpen });
        if (isOpen) {
            setTimeout(() => {
                this.addExtraClassForMenuOpen();
            },50);
        }
    }

    addExtraClassForMenuOpen() {
        if (document.getElementById('menu') !== null) {
            let childElems = document.getElementById('menu').children;
            for (let i = 0; i < childElems.length; i++) {
                childElems[i].classList.add(css.closeBar);
            }
        }
    }

    render() {
        const {isOpen, hasBeenToggled} = this.state;
        return isOpen ? this.menuItems() : this.menuIcon();
    }
}
