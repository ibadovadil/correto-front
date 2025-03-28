import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogById } from '../manager/actions/blog/blogAction';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { blog = {} } = useSelector((state) => state.blog);
    useEffect(() => {
        dispatch(getBlogById(id));
    }, [id, dispatch]);

    const formatDate = (date) => {
        const createdDate = new Date(date);
        return createdDate.toLocaleDateString("en-EN", {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <div className="blogDetails">
            <div className="top">
                <h2>{blog.title}</h2>
            </div>
            <div className="bottom container pt-4">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-info container pt-4">
                    <h2>{blog.title}</h2>
                    <span>{formatDate(blog.updatedAt)}</span>
                    <p>{blog.content}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails