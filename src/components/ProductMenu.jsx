import React from 'react';

export default function ProductMenu() {
    return (
        <div className='prodcut-menu'>
            <div id='right-menu'>
                <a href='#'>
                    <p>درگاه پرداخت</p>
                    <p className='prodcut-menu-text-below'>مهندسی شده برای فروش بیشتر</p>
                </a>
                <a href='#'>
                    <p>زرین لینک</p>
                    <p className='prodcut-menu-text-below'>لینک پرداخت در شبکه‌های اجتماعی</p>
                </a>
                <a href='#'>
                    <p>زرین پلاس</p>
                    <p className='prodcut-menu-text-below'>ابزار هوشمند سوددهی</p>
                </a>
            </div>
            <div id='left-menu'>
                <a href='#'>
                    <p>زرین کارت</p>
                    <p className='prodcut-menu-text-below'>طلایی ترین کارت بانکی</p>
                </a>
                <a href='#'>
                    <p>تسهیم</p>
                    <p className='prodcut-menu-text-below'>درگاه پرداخت اشتراکی</p>
                </a>
            </div>
        </div>
    );
};

