import React from "react";
import './testimonials.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination, Navigation} from "swiper";

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas conguequisque egestas diam.'
    },
    {
        avatar: AVTR2,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas conguequisque egestas diam.'
    },
    {
        avatar: AVTR3,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas conguequisque egestas diam.'
    },
    {
        avatar: AVTR4,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas conguequisque egestas diam.'
    },
]
const Testimonials = () => {
    return (
        <section id={'testimonials'}>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className={'container testimonials__container'}
                    pagination={true} modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
            >
                {data.map((d, i) => <SwiperSlide className={'testimonial'} key={i}>
                    <div className={'client__avatar'}>
                        <img src={d.avatar} alt={'client'}/>
                    </div>
                    <h5 className={'client__name'}>{d.name}</h5>
                    <small className={'client__review'}>
                        {d.review}
                    </small>
                </SwiperSlide>)}
            </Swiper>
        </section>
    )
}
export default Testimonials
