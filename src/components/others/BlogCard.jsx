import React from 'react';
import '../../assets/styles/blog.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogCard = ({ _id, title, image, createdTime, content }) => {
    return (
        <div className="blog-card pb-4">
            <img src={image} alt={title} />
            <Container>
                <Link to={`/blog/${_id}`}><h3>{title}</h3>
                    <p>{content}</p>
                </Link>
                <span>{createdTime}</span>
            </Container>
        </div>
    );
};

export default BlogCard;