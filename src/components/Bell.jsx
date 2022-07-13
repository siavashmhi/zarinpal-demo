import React from 'react';
import bellIcon from '../assets/icons/bell.svg'
import '../assets/styles/bell.css'

export default function Bell() {
    return (
        <div className='bell'>
            <img src={bellIcon} alt='icon' />
        </div>
    );
};

