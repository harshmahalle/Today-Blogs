import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error in fetching blog data");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto p-4">
                <button
                    onClick={() => navigation(-1)}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Back
                </button>
                {
                    loading ? (
                        <div className="flex justify-center items-center">
                            <p className="text-xl">Loading...</p>
                        </div>
                    ) : blog ? (
                        <div>
                            <BlogDetails post={blog} />
                            <h2 className="text-2xl font-bold my-4">Related Blogs</h2>
                            {
                                relatedblogs.map((post) => (
                                    <div key={post.id} className="mb-4">
                                        <BlogDetails post={post} />
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className="flex justify-center items-center">
                            <p className="text-xl">No Blog Found</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default BlogPage;
