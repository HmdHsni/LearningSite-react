import React from "react";
import CourseBox from "../CourseBox/CourseBox";
import Sectionheader from "../SectionHeader/Sectionheader";
import './LastCourses.css'
export default function LastCourses(){
    return(
        <div className="courses">
        <div className="container">
      <Sectionheader title="جدیدترین دوره ها" desc="سکوی پرتاب شما به سوی موفقیت" btnTitle="تمامی دوره ها"/>
      <div className="courses-content">
        <div className="container">
          <div className="row">
            <CourseBox/>
            <CourseBox/>
            <CourseBox/>
            <CourseBox/>
            <CourseBox/>
            <CourseBox/>
            </div></div></div>
        </div>
        </div>
    )}