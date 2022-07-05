import React from 'react';
import logoImage from '../assets/icons/logo-white.svg'
import '../assets/styles/navbar.css'
import downArrow from '../assets/icons/down-arrow-svgrepo-com.svg'
import menu from '../assets/icons/hamburger.svg'
import crossIcon from '../assets/icons/cross.svg'
import arrow from '../assets/icons/arrow.svg'

export default function Navbar() {
    return (
        <React.Fragment>
            <header className='header'>
                <div>
                    <img src={logoImage} alt='logo' className='myLogo' /> 
                </div>
                <nav>
                    <ul className='headerUl'>
                        <li>
                            <a href='#'>محصولات</a>
                            <img src={downArrow} alt='logo' />
                        </li>
                        <li><a href='#'>تعرفه ها</a></li>
                        <li><a href='#'>توسعه دهندگان</a></li>
                        <li><a href='#'>تماس با ما</a></li>
                        <li>
                            <a href='#'>بیش تر</a>
                            <img src={downArrow} alt='logo' />
                        </li>
                        <li className='zarinpalBtn'>
                            <a href='#'> زرین پال من</a>
                        </li>
                    </ul>
                </nav>
                <img src={menu} alt='menu' className='hamburgerIcon' />
            </header>
            {/* <div className='hamburgerMenu'>
                <div className='crosIcon'>
                    <img src={crossIcon} alt='icon'/>
                </div>
                <div className='hamburgerMenuItems'>
                    <ul>
                        <li><a href='#'>تعرفه ها</a></li>
                        <li><a href='#'>اپلیکیشن</a></li>
                        <div></div>
                        <li><a href='#'>سوالات متداول</a></li>
                        <li><a href='#'>محصولات</a></li>
                        <li><a href='#'>تماس با ما</a></li>
                    </ul>
                </div>
                <div className='moreItem'>
                    <a href='#'>زرین پال من</a>
                    <img src={arrow} alt='icon' />
                </div>
            </div>    */}
        </React.Fragment>
    );
};

