import React, { useEffect } from 'react'

import '../styles/home.scss'
import HomeSlider from '../components/home/HomeSlider'
import Offer from '../components/home/Offer'
import { useDispatch } from 'react-redux'
import { getOffers } from '../manager/actions/homePage/offer/offerAction'
import { getSliders } from '../manager/actions/homePage/slider/sliderAction'
import { showLoading, hideLoading } from '../manager/actions/preloaderAction.js'
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
    return (
        <>
            <HomeSlider />
            <Offer />
        </>
    )
}

export default Home