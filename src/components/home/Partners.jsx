import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartners } from "../../manager/actions/homePage/partner/partnerAction";

import { A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Partners = () => {
    const dispatch = useDispatch();

    const { partners = [] } = useSelector((state) => state.partner);

    useEffect(() => {
        dispatch(getPartners());
    }, [dispatch]);

    return (
        <div className="partner">
            <Swiper
                modules={[A11y]}
                spaceBetween={21}
                slidesPerView={4}
                // loop={true}
                breakpoints={{
                    1024: {
                        slidesPerView: 4, // 4 slayt göster
                    },
                    768: {
                        slidesPerView: 3, // 3 slayt göster
                    },
                    480: {
                        slidesPerView: 2, // 2 slayt göster
                    },
                    320: {
                        slidesPerView: 1, // 1 slayt göster
                    },
                }}
                className="swpier my-3"
            >
                {partners.map((item, index) => (
                    <SwiperSlide className="swiper-slider my-5" key={index}>
                        <div className="image">
                            <img src={item.image} alt="partner" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Partners;
