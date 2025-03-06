import React from 'react'
import '../styles/shop.scss'
import ShopCard from '../components/shop/ShopCard'
const Shop = () => {
  return (
    <div className='shop-main'>
      <div className="shop-top">
      </div>
      <div className="shop-bottom">
        <div className="product-cards">
          <ShopCard/>
        </div>
        <div className="product-filters">

        </div>
      </div>
    </div>
  )
}

export default Shop