import React from "react";
import './Sectionheader.css'
import { Link } from "react-router-dom";
export default function Sectionheader({title,desc,btnTitle}){
    return(
        <div className="courses-header">
        <div className="courses-header__right">
          <span className="courses-header__title title">{title}</span>
          <span className="courses-header__text">{desc}</span>
        </div>
       {btnTitle ? (
         <div className="courses-header__left">
         <Link to="/courses" className="courses-header__link">
           {btnTitle}
           <i className="fas fa-arrow-left courses-header__icon"></i>
         </Link>
       </div>
       ) : null}
      </div>
    )
}