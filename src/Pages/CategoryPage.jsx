import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className='mt-[100px] mb-[100px] w-10/12 mx-auto'>
            <Header />
            <div className='flex flex-col items-start'>
                <button
                    onClick={() => navigate(-1)}
                    className='mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                >
                    Back
                </button>
                <h2 className='text-2xl font-bold mb-4'>
                    Blogs on <span className='capitalize'>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
}

export default CategoryPage;

