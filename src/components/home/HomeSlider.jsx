import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSliders } from '../../manager/actions/homePage/slider/sliderAction';
import { Carousel } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
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
        // <div className="homeSlider">
        //     <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">

        //         <div className="carousel-inner">
        //             {sliders.map((item, index) => (

        //                 <div className="carousel-item">
        //                     <img src={item.backgroundImage} alt="" />
        //                     <div className="container">
        //                         <div className="carousel-caption text-start">
        //                             <h1>Example headline.</h1>
        //                             <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
        //                             <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}

        //         </div>
        //         <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true" />
        //             <span className="visually-hidden">Previous</span>
        //         </button>
        //         <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true" />
        //             <span className="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </div>

    );
}

export default HomeSlider