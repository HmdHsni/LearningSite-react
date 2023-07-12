import React from "react";
import './AboutUs.css'
import Sectionheader from './../SectionHeader/Sectionheader'
import AboutUsBox from "../AboutUsBox/AboutUsBox";
//import Row from 'react-bootstrap/Row';
export default function AboutUs(){
    return(
        <div className="about-us">
      <div className="container">
       <Sectionheader title="ما چه کمکی میکنیم؟" desc="ز اونجایی که آکادمی ما  یک آکادمی خصوصی هست"/>

        <div className="container">
          <div className="Row">
        <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !"/>
        <AboutUsBox title=" اجازه تدریس" desc="به هر مدرسی رو نمیده. چون کیفیت براش مهمه !"/>
        <AboutUsBox title="دوره پولی و رایگان" desc="براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده"/>
        <AboutUsBox  title="اهمیت به کاربر" desc="اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست"/>
          </div>
        </div>
      </div>
    </div>
    )
}