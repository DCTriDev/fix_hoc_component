import React from 'react';
import { Card } from 'antd';
import {NavLink} from "react-router-dom";

function ItemHomePageCourse({data}) {
    return (
        <Card
            className='rounded-lg overflow-hidden hover:scale-105 duration-300 transition-all cursor-default'
            hoverable
            style={{ width: '100%', height: 'auto' }}
            cover={<img className='w-full h-48 object-cover' alt="example" src={data.hinhAnh}/>}
        >
            <div className='w-full break-words flex flex-col justify-between items-center'>
                <div className='w-full'>
                    <h3 className='font-bold text-xl'>{data.tenKhoaHoc}</h3>
                    <p>{data.moTa}</p>
                </div>
                <div className='w-full'>
                    <NavLink className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full' to={`/course/${data.maKhoaHoc}`}>
                        Xem Chi Tiết
                    </NavLink>
                </div>
            </div>
        </Card>
    );
}

export default ItemHomePageCourse;