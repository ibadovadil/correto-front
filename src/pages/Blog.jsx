import React, { useEffect } from 'react'
import '../assets/styles/blog.scss'
import BlogCard from '../components/others/BlogCard.jsx'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../manager/actions/blog/blogAction.js'
const Blog = () => {
  const dispatch = useDispatch();
  const { blogs = [] } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  const formatDate = (date) => {
    const createdDate = new Date(date);
    return createdDate.toLocaleDateString("en-EN", {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const truncateContent = (content) => {
    return content.length > 100 ? `${content.substring(0, 100)}...` : content;
  };
  return (
    <div className='blog'>
      <div className="blog-top">
        <h2>Blogs</h2>
      </div>

      <Row className="blog-bottom container">
        {blogs.length > 0 ? (
          blogs.map((item) => (
            <Col key={item._id} sm={12} md={12} lg={6}>
              <BlogCard title={item.title} image={item.image} _id={item._id} content={truncateContent(item.content)} createdTime={formatDate(item.updatedAt)} />
            </Col>
          ))
        ) : (
          <h1>No Blog Found</h1>
        )}
      </Row>
    </div>
  )
}

export default Blog