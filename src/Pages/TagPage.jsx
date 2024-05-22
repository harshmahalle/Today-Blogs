import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

    return (
        <div className='w-11/12 mt-[100px] mb-[100px] mx-auto'>
            <Header />
            <div className='flex flex-col items-start'>
                <button 
                    onClick={() => navigate(-1)}
                    className='mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                >
                    Back
                </button>
                <h2 className='text-2xl font-bold mb-4'>
                    Blogs Tagged <span className='text-blue-500'>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
}

export default TagPage;

