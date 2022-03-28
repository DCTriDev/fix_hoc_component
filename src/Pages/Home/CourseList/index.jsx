import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCourseList} from "../../../Redux/Slice/courseSlice";
import httpService from "../../../Services/http.service";
import ItemHomePageCourse from "./ItemHomePageCourse";

function CourseList() {
    let {courseList} = useSelector(state => state.courseSlice);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     httpService.getCoursesList()
    //         .then(res => {
    //             dispatch(setCourseList(res.data));
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, []);

    let handleRenderCourseItem = () => {
        return courseList.map((item, index) => {
            if (index < 8) {
                return <ItemHomePageCourse key={index} data={item}/>
            }
        });
    };

    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl font-bold'>Danh Sách Khóa Học Mới Nhất</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {/*{courseList?handleRenderCourseItem():<></>}*/}
            </div>
        </div>
    );
}

export default CourseList;