import React from 'react';
import HomeCarousel from "./HomeCarousel";
import Layout from "../../Layouts";
import CourseList from "./CourseList";

function HomePage() {
    return (
        <div className='mt-20'>
            <HomeCarousel/>
            <CourseList/>
        </div>
    );
}

export default Layout(HomePage);