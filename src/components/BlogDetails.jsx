import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div className='mt-5 ml-5 p-4 bg-white shadow-lg rounded-lg'>
      <NavLink to={`/blog/${post.id}`} className='text-2xl font-bold text-blue-500 hover:underline'>
        {post.title}
      </NavLink>
      <p className='mt-2 text-gray-600'>
        By <span className='font-semibold'>{post.author}</span> on {' '}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className='text-blue-500 hover:underline'>
          {post.category}
        </NavLink>
      </p>
      <p className='mt-2 text-gray-500'>Posted on {post.date}</p>
      <p className='mt-4 text-gray-700'>{post.content}</p>
      <div className='mt-4'>
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className='inline-block mr-2 text-sm text-blue-500 hover:underline'
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;

