import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSliders } from '../../manager/actions/homePage/slider/sliderAction';
import { Carousel } from 'react-bootstrap';

const HomeSlider = () => {
    const dispatch = useDispatch(); // useDispatch burada kullanılmalı.

    const { sliders = [], loading, error } = useSelector((state) => state.sliders);

    useEffect(() => {
        dispatch(getSliders());
    }, [dispatch]);

    if (loading) return <div>LOADING ....</div>;
    if (error) return <div>ERROR : {error}</div>;
    return (
        <Carousel className='homeSlider'>
            {sliders.map((item, index) => (
                <Carousel.Item key={item._id} className='homeSliderItem' interval={6000}>
                    <img
                        className="d-block slider-Bck"
                        src={item.backgroundImage}
                        alt={item.title}
                    />
                    <Carousel.Caption className='homeSliderCaption'>
                        <img className='logo' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h1-slider-img-1.png" alt="" />
                        <h3>{item.title}</h3>
                        <img className='icon' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/slider-separator-img.png" alt="" />
                        <p>{item.description}</p>
                        <div className=' btn btn-outline-light '>Shop Here</div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default HomeSlider