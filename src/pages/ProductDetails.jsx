import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../manager/actions/product/productAction';
import { Col, Row } from 'react-bootstrap';
import CustomCarousel from '../components/shop/CustomCarousel';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(state => state.products);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
    };

    return (
        <div className='productDetails'>
            <div className="details-top">
                <h2>Product List</h2>
            </div>

            <Row className='details-bottom container'>
                <Col lg={6} md={12} sm={12} className='carousel'>
                    {product && product.images && product.images.length > 0 ? (
                        <CustomCarousel images={product.images} />
                    ) : (
                        <img src={product.coverImage} alt={product.name} className="d-block w-100" />
                    )}
                </Col>
                <Col lg={6} md={12} sm={12} className='product-info'>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Fiyat: {product.price} ₺</p>

                    <div className="add-to-cart">
                        <div className="quantity">
                            <button onClick={() => handleQuantityChange(-1)}>-</button>
                            <input type="number" value={quantity} readOnly />
                            <button onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <button className="cart-btn">SEPETE EKLE</button>
                    </div>

                    <div className="product-details-info">
                        <p>SKU: {product.sku}</p>
                    </div>

                    <div className="share">
                        PAYLAŞ:
                        <i className="fab fa-facebook-f"></i> 
                        <i className="fab fa-twitter"></i> 
                        <i className="fab fa-linkedin-in"></i> 
                        <i className="fab fa-tumblr"></i> 
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductDetails;