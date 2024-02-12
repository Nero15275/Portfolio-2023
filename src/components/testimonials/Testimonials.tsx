import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper'
import { testimonialData } from '../../constants'
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    const swiperOptions = {
        spaceBetween: 40,
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
    };
    return (
        <section>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container" style={{ paddingBottom: '4rem' }}
                {...swiperOptions}
            >
                {
                    testimonialData.map((testimonial: any) => {
                        return (

                            <SwiperSlide className="testimonial" key={testimonial.avater}>
                                <div className="client__avatar">
                                    <img src={testimonial.avater} alt="" />
                                </div>
                                <h5 className="client__name">{testimonial.name}</h5>
                                <small className="client__review">
                                    {testimonial.review}
                                </small>
                            </SwiperSlide>

                        )
                    })
                }


            </Swiper>

        </section>
    );
};

export default Testimonials;
