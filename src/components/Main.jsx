import React from 'react';
import homeImage from '../assets/icons/home.svg'
import '../assets/styles/main.css'
import goDown from '../assets/icons/down-arrow-svgrepo-com.svg'

export default function Main() {
    return (
        <main>
            <div className='banner'>
                <div className='banner-text'>
                    <h3>بیش از ۱۲ سال</h3>
                    <h3>انتخاب مطمئنِ کسب و کارهای انلاین</h3>
                    <p>زرین‌پال،
                        اولین پرداخت‌یار پیشگام کشور،
                        با به‌کارگیری سبک و ا
                        ستانداردهای جدید در ارائه‌ی خدمات
                         درگاه پرداخت اینترنتی، سرویس‌های متنوعی 
                        در حوزه‌ی پرداخت الکترونیک را برای کسب و
                         کارها ارائه کرده است؛ با این هدف که در
                        افزایش سهم تجارت الکترونیکی
                        در تولید ناخالص ملی و
                        کمک به رشد و توسعه‌ی کسب‌وکارها،
                        نقش سازنده‌‌ای ایفا کند.</p>
                    <div className='banner-btns'>
                        <a className='register' href='#'> ثبت نام</a>
                        <a className='login' href='#'> ورود</a>
                    </div>
                </div>
                <div className='banner-image'>
                    <img src={homeImage} alt='home-image' />
                </div>
            </div>
            <div className='go-down'>
                <div></div>
                <img src={goDown} alt='icon' />
            </div>
        </main>
    );
};

