import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../manager/actions/product/productAction'
const HomeProduct = () => {
    const dispatch = useDispatch();
    const { products = [] } = useSelector((state) => state.products);
    const homeProducts = products.filter(products => products.isHome);
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className='homeProduct'>
            <div className="top">
                <h3 className='mt-2'>Online Coffee Shop</h3>
                <img className='my-4' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png" alt="" />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Quas recusandae dolorem tempora iure id magni.</span>
            </div>
            <div className="bottom">
                {homeProducts.map((item, index) => (
                    <img key={item._id} width={200} src={item.coverImage} alt="" />
                ))}
            </div>
        </div>
    )
}

export default HomeProduct