import React from 'react';
import { Col } from 'react-bootstrap';
import '../../assets/styles/shop.scss';
import { addToBasket } from '../../manager/actions/user/basketAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {toast } from 'react-toastify';

const ShopCard = ({ name, coverImage, price, _id, isNewProduct, isSale, isSoldOut }) => {
  const dispatch = useDispatch();
  const handleAddToBasket = () => {
    console.log("Adding product to basket", { product: _id, quantity: 1 });
    dispatch(addToBasket({ product: _id, quantity: 1 }));
    notifyBasket();
  };
  const handleAddToWishlist = () => {
    console.log("Adding product to wishlist", { product: _id });
    notifyWishlist(); 
  };

  const labels = [
    { key: "isNewProduct", text: "New", color: "#be9c79" },
    { key: "isSale", text: "Sale", color: "red" },
    { key: "isSoldOut", text: "Sold", color: "#be9c79" }
  ];

  const activeLabels = labels.filter(label => 
    (label.key === "isNewProduct" && isNewProduct) || 
    (label.key === "isSale" && isSale) || 
    (label.key === "isSoldOut" && isSoldOut)
  );

  const notifyBasket = () => toast.success('  Product Added Your Basket', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notifyWishlist = () => toast.success('Item added to wishlist', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <Col className='card-container' sm={12} md={6} lg={4}>
      <div className="products-card mt-5">
        {activeLabels.length > 0 && (
          <div className="labels">
            {activeLabels.map((label, index) => (
              <div key={index} style={{ backgroundColor: label.color }} className='product-speci'>
                <span>{label.text}</span>
              </div>
            ))}
          </div>
        )}
        <div className='img-container'>
          <img src={coverImage} alt={name || "Product image"} />
          <div className="card-hover">
            <button className='btn' onClick={handleAddToBasket}>Add to Basket</button>
            <button className='btn' onClick={handleAddToWishlist}>Add to Wishlist</button>
          </div>
        </div>
        <Link to={`/shop/${_id}`}><h3 className='pt-2'>{name}</h3></Link>
        <span>${price}</span>
      </div>
    </Col>
  );
};

export default ShopCard;
