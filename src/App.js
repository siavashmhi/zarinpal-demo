import React from "react";
import './assets/styles/App.css'
import '../src/assets/styles/fonts.css'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Section from "./components/Section";
import Startbox from "./components/Startbox";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Bell from "./components/Bell";
import pgImage from './assets/icons/pg.svg'
import socialImage from './assets/icons/social-image.svg'
import zarinCard from './assets/icons/zarincard.svg'
import payOut from './assets/icons/payout.svg'
import zarinPlus from './assets/icons/zarinplus.svg'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Cart
        image={pgImage}
        title='درگاه پرداخت اینترنتی' 
        title2='مهندسی شده برای رشد و فروش بیش‌تر'
        description='درگاه پرداخت زرین‌پال، 
        با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی(PSPها)،
        کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند
        ، باعث افزایش درصد تراکنش‌های موفق می‌شود.'
        btnText='ساخت درگاه پرداخت'
        />
      <Cart
        image={socialImage}
        title='زرین‌لینک'
        title2='پرداخت در شبکه‌های اجتماعی'
        description='زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، 
        باعث افزایش فروش محصولات و خدمات،
         از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود.'
        btnText='ساخت زرین لینک'
       />
       <Cart
        image={zarinCard}
        title='زرین کارت'
        title2='طلایی‌ترین کارتِ بانکی'
        description='زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و
        متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و
        امکانات یک حساب بانکی تمام عیار برخوردار است.
        زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی و
        کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند.'
        btnText='درخواست زرین کارت'
        />
      <Cart
        image={payOut}
        title='تسهیم'
        title2='درگاه پرداخت اشتراکی'
        description='تسهیم بهترین روش برای مدیریت مالی کسب‌ و
          کارهای شراکتی است که به واسطه‌ی آن،
         درآمد حاصل از فروش محصولات یا خدمات،
          در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و
          به صورت جداگانه به حساب هر شخص واریز می‌‌شود.'
        btnText='درخواست فعال سازی تسهیم'
       />
      <Cart
        image={zarinPlus}
        title='زرین پلاس'
        title2='ابزار هوشمند سوددهی'
        description='زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و
         کارها در هر اندازه و دسته‌بندی شغلی،
          با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و
          افزایش فروش محصولات خود، بتوانند کسب و
          کار خود را به بهترین شکل توسعه و گسترش دهند و
          جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند.'
        btnText='پیوستن به زرین پلاس'
       />
      <Section />
      <Startbox />
      <Support />
      <Footer />
      <Bell />
    </div>
  );
}