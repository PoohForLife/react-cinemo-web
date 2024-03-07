import React, { useState, useEffect } from 'react'
import '../NavigationBar/NavigationBar.css'
import 'boxicons'

function NavigationBar() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    useEffect(() => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.style.top = isShowMenu ? "0" : "-100%"
    }, [isShowMenu]);


    const navLink = document.querySelectorAll('.nav__link')
    navLink.forEach(n => n.addEventListener('click', linkAction))
    function linkAction(){
        setIsShowMenu(false);
    }

    return (
        <>
            <header className="header">
                <nav className="nav containerA">
                    <a href='#' className="nav__logo">XCOMPANY</a>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Contact</a>
                            </li>
                        </ul>
                        <button className="nav__close" id="nav-close" onClick={() => {setIsShowMenu(false)}}>
                            <box-icon name='x'></box-icon>
                        </button>
                    </div>

                    <button className="nav__toggle" id="nav-toggle" onClick={() => {setIsShowMenu(!isShowMenu)}}>
                        <box-icon name='grid-alt'></box-icon>
                    </button>
                </nav>
            </header> 
        </>
    )
}

export default NavigationBar