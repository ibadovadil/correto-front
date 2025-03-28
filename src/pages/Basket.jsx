import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBasket, updateBasket } from '../manager/actions/user/basketAction';

const Basket = () => {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.basket);

    useEffect(() => {
        dispatch(getBasket());
    }, [dispatch]);

    const handleIncrease = (productId, quantity) => {
        dispatch(updateBasket(productId, quantity + 1));
    };

    const handleDecrease = (productId, quantity) => {
        if (quantity > 1) {
            dispatch(updateBasket(productId, quantity - 1));
        }
    };

    if (!basket) return <p>Loading...</p>;

    return (
        <div>
            <h2>Basket</h2>
            {basket.products.map(item => (
                <div key={item.product._id}>
                    {item.product.name} - {item.quantity}
                    <button onClick={() => handleDecrease(item.product._id, item.quantity)}>-</button>
                    <button onClick={() => handleIncrease(item.product._id, item.quantity)}>+</button>
                </div>
            ))}
        </div>
    );
};

export default Basket;