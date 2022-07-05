import React from 'react';
import arrow from '../assets/icons/arrow.svg'
import '../assets/styles/cart.css'

export default function Cart(props) {
    const {image, title, title2, description, btnText} = props
    
    return (
        <section className='cart-container'>
            <div className='image-container'>
                <img src={image} alt='image-section' />
            </div>
            <div className='desc-container'>
                <h2>{title}</h2>
                <h3>{title2}</h3>
                <p>{description}</p>
                <div className='section-links'>
                    <a className='first-button' href='#'> { btnText } </a>
                    <a className='secound-button' href='#'> بیشتر بدانید  
                         <img src={arrow} alt='icon' />
                    </a>
                </div>
            </div>            
        </section>
    );
};

