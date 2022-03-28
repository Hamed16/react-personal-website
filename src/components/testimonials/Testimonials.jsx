import React, { useRef, useState } from "react";
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";


const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from colleagues</h5>
            <h2>Testimonials</h2>

            <Swiper navigation={true} modules={[Navigation]} className="container testimonials__container"
            // install Swiper modules
            spaceBetween={40}
            slidesPerView={1} >
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="Avatar1" />
                    </div>
                    <h5>Mehrab Zokaei</h5>
                    <small className='client__review'>
                    Hamed is a hard working and determined student that puts his all in everything he does. He is very serious and consistent when it comes to his duties and he achieves all that he puts his mind to. He’s a very smart individual who strives for the better and a person who is always striving to better his and others future. He loves to work hard and to achieve big goals that he sets in life. His biggest goal and purpose in this life is to change the world.
                    </small>
                </SwiperSlide>
                
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar1" />
                    </div>
                    <h5>Ehson Raoufi</h5>
                    <small className='client__review'>
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.

                    </small>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="Avatar1" />
                    </div>
                    <h5>Leo Tian</h5>
                    <small className='client__review'>
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                        Very good guy. Hard working. Very nice.
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials