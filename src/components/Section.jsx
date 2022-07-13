import React from 'react';
import '../assets/styles/section.css'
import veriFieldIcon from '../assets/icons/verifiedIcon.svg'
import spliteIcon from '../assets/icons/splite.svg'
import supportIcon from '../assets/icons/support.svg'

export default function Section() {
    return (
        <article class="attributes">
            <div class="definition">
                <h3>ویژگی‌های درگاه پرداخت زرین‌پال</h3>
                <p>
                    درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر
                    وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای
                    هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.
                </p>
            </div>
            <div class="items">
                <div class="item first-item">
                    <div>
                        <img src={veriFieldIcon} alt='icon' />
                        <h4>ضمانتِ پرداخت</h4>
                    </div>
                    <p>
                    درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را
                    به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.
                    </p>
                </div>
                <div class="item secound-item">
                    <div>
                        <img src={spliteIcon} alt='icon' />
                        <h4>مسیردهی هوشمند</h4>
                    </div>
                    <p>
                    استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود
                    کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق
                    هدایت شوند.
                    </p>
                </div>
                <div class="item third-item">
                    <div>
                        <img src={supportIcon} alt='supportIcon' />
                        <h4>پشتیبانی ۲۴/۷</h4>
                    </div>
                    <p>
                    هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و
                    راهنمایی به کاربران هستیم.
                    </p>
                </div>
                <div class="item fourth-item">
                    <div>
                        <img src={spliteIcon} alt='icon' />
                        <h4>امنیتِ پرداخت</h4>
                    </div>
                    <p>
                    درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام
                    پرداخت‌‌های اینترنتی آن‌هاست.
                    </p>
                </div>
            </div>
      </article>
    );
};