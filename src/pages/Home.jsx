import React, { useEffect } from 'react'
import '../assets/styles/home.scss'
import HomeSlider from '../components/home/HomeSlider'
import Offer from '../components/home/Offer'
import { getOffers } from '../manager/actions/homePage/offer/offerAction'
import { getSliders } from '../manager/actions/homePage/slider/sliderAction'
import Banner from '../components/home/Banner.jsx'
import Counter from '../components/home/Counter.jsx'
import Partners from '../components/home/Partners.jsx'
import HomeGallery from '../components/home/HomeGallery.jsx'
import HomeProduct from '../components/home/HomeProduct.jsx'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../manager/actions/preloaderAction.js'
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                dispatch(showLoading());

                await Promise.all([
                    dispatch(getOffers()),
                    dispatch(getSliders()),
                ]);
            } catch (error) {
                console.error("Error occured from fetchAllData", error);
            } finally {
                dispatch(hideLoading());
            }
        };
        fetchAllData();

    }, [dispatch]);
    // useDataLoader([getOffers, getSliders]);
    return (
        <>
            <HomeSlider />
            <Offer />
            <Banner />
            <Counter />
            <HomeProduct />
            <HomeGallery />
            <Partners />
        </>
    )
}

export default Home