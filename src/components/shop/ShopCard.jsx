import React from 'react'
import { Container } from 'react-bootstrap'

import '../../styles/shop.scss'
const ShopCard = () => {
    return (
        <Container className='products-card'>
            <div className="product-speci"></div>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png" alt="" />
            <h3>Ethopia Cofee</h3>
            <span>$15.00</span>
        </Container>
    )
}

export default ShopCard