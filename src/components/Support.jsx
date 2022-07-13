import React from 'react';
import '../assets/styles/support.css'
import arrowIcon from '../assets/icons/arrow.svg'

export default function Support() {
    return (
        <div className='support'>
            <div className='support-number'>
                <p>
                    پشتیبانی ۲۴ ساعته، ۷ روز هفته <span className='line'>|</span> شماره تماس: <span className='phone-number'>۴۱۲۳۹-۰۲۱</span>
                </p>
            </div>
            <div className='support-title'>
                <p>درخواست پشتیبانی</p>
                <img src={arrowIcon} alt='icon' />
            </div>
        </div>
    );
};