import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOffers } from '../../manager/actions/homePage/offer/offerAction';

const Offer = () => {
   const dispatch = useDispatch();

   const { offers = [], loading, error } = useSelector((state) => state.offers);
   useEffect(() => {
      dispatch(getOffers());
   }, [dispatch]);

   if (loading) return <div>LOADING...</div>
   if (error) return <div>ERROR...</div>
   return (
      <div className='offer container'>
         <h2>Our Delicious Offer</h2>
         <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png" alt="icon" />
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
         <Row className='d-flex justify-content-between'>
            {offers.map((item, index) => (
               <Col className="armud" xs={12} sm={6} md={3}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <img width={106} height={94} src={item.coverImage} alt="" />
               </Col>
            ))}

         </Row>
      </div>
   )
}

export default Offer