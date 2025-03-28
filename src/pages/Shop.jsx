import React, { useEffect } from 'react';
import '../assets/styles/shop.scss';
import ShopCard from '../components/shop/ShopCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../manager/actions/product/productAction';
import { Col, Container, Row } from 'react-bootstrap';
import { showLoading, hideLoading } from '../manager/actions/preloaderAction.js';
import { CiFilter } from "react-icons/ci";
import { ToastContainer } from 'react-toastify';

const Shop = () => {
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(showLoading());
        await dispatch(getProducts());
      } catch (error) {
        console.error('Error occurred while fetching products', error);
      } finally {
        dispatch(hideLoading());
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="shop-main">
      <div className="shop-top">
        <h2>Product List</h2>
      </div>
      <div className="shop-bottom">
        <Container className='filter'>
          <button className=" btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            Filter Products <CiFilter />
          </button>
          <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter Products</h5>
              <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <p>Burada offcanvas məzmunu ola bilər.</p>
            </div>
          </div>
        </Container>

        <Row className="product-cards">
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {products.length > 0 ? (
            products.map((item) => (
              <Col key={item._id} sm={12} md={6} lg={3}>
                <ShopCard
                  name={item.name}
                  coverImage={item.coverImage}
                  price={item.price}
                  _id={item._id}
                  isNewProduct={item.isNewProduct}
                  isSale={item.isSale}
                  isSoldOut={item.isSoldOut}
                />
              </Col>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </Row>

      </div>
    </div>
  );
};

export default Shop;