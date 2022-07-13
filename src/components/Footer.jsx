import React from 'react';
import '../assets/styles/footer.css'
import instaIcon from '../assets/icons/instagram.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import telegramIcon from '../assets/icons/telegram.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import aparatIcon from '../assets/icons/aparat.svg'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-links'>
                <div>
                    <p>محصولات</p>
                    <ul>
                        <li><a href="#">زرین‌لینک</a></li>
                        <li><a href="#">درگاه پرداخت اینترنتی</a></li>
                        <li><a href="#">زرین‌کارت</a></li>
                        <li><a href="#">تسهیم</a></li>
                    </ul>
                </div>
                <div>
                    <p>آشنایی با زرین‌پال</p>
                    <ul>
                        <li><a href="#">تعرفه ها</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">سوالات متداول</a></li>
                        <li><a href="#">همکاری در فروش</a></li>
                    </ul>
                </div>
                <div>
                    <p>ارتباط بیشتر</p>
                    <ul>
                        <li><a href="#">تماس با ما</a></li>
                        <li><a href="#">قوانین و مقررات</a></li>
                        <li><a href="#">حریم خصوصی</a></li>
                    </ul>
                </div>
                <div>
                    <p>منابع</p>
                    <ul>
                        <li><a href="#">دریافت شماره شبا</a></li>
                        <li><a href="#">زرین‌بین</a></li>
                        <li><a href="#">توسعه دهندگان</a></li>
                        <li><a href="#">وبلاگ</a></li>
                    </ul>
                </div>
            </div>
            <div className='social-media'>
                <p>زرین‌پال در شبکه‌های اجتماعی:</p>
                <div>
                    <a><img src={instaIcon} alt='icon' /></a>
                    <a><img src={twitterIcon} alt='icon' /></a>
                    <a><img src={telegramIcon} alt='icon' /></a>
                    <a><img src={linkedinIcon} alt='icon' /></a>
                    <a><img src={aparatIcon} alt='icon' /></a>
                </div>
            </div>
        </footer>
    );
};