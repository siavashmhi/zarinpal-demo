import React, { useState } from 'react';
import ProductMenu from './ProductMenu';
import MoreMenu from './MoreMenu';
import styled from 'styled-components';
import '../assets/styles/navbar.css'
import logoImage from '../assets/icons/logo-white.svg'
import downArrow from '../assets/icons/down-arrow-svgrepo-com.svg'
import menu from '../assets/icons/hamburger.svg'
import crossIcon from '../assets/icons/cross.svg'
import arrow from '../assets/icons/arrow.svg'

const Div = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    background-color: #fff;
    font-family: YekanBakhMedium;
    transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%)'};
`

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [showProductMenu, setShowProductMenu] = useState(false)
    const [moreMenu, setMoreMenu] = useState(false)

    return (
        <React.Fragment>
            <header className='header'>
                <div>
                    <img src={logoImage} alt='logo' className='myLogo' /> 
                </div>
                <nav>
                    <ul className='headerUl'>
                        <li class="more-menu" id='show-product-menu'
                         onMouseEnter={() => setShowProductMenu(!showProductMenu)}
                         onMouseLeave={() => setShowProductMenu(!showProductMenu)}>
                            <a href='#'>محصولات</a>
                            <img src={downArrow} alt='logo' />
                            {showProductMenu && <ProductMenu />}
                        </li>
                        <li><a href='#'>تعرفه ها</a></li>
                        <li><a href='#'>توسعه دهندگان</a></li>
                        <li><a href='#'>تماس با ما</a></li>
                        <li onMouseEnter={() => setMoreMenu(!moreMenu)}
                            onMouseLeave={() => setMoreMenu(!moreMenu)}
                            class="more-menu" id="show-more-menu">
                            <a href='#'>بیش تر</a>
                            <img src={downArrow} alt='logo' />
                            {moreMenu && <MoreMenu />}
                        </li>
                        <li className='zarinpalBtn'>
                            <a href='#'> زرین پال من</a>
                        </li>
                    </ul>
                </nav>
                <img onClick={()=> setOpen(!open) } src={menu} alt='menu' className='hamburgerIcon' />
            </header>

            <Div open={open}>
                <div className='crosIcon'>
                    <img onClick={()=> setOpen(!open) } src={crossIcon} alt='icon'/>
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
            </Div>   
        </React.Fragment>
    );
};