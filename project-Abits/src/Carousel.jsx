// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Autoplay } from 'swiper/modules';

import './Carousel.css'; // Import custom styles

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2000 }} // Auto-slide every 2 seconds
      >
        <SwiperSlide>
          <img
            src="artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-.jpg"
            alt="Description of the first carousel image"
            width={"100%"}
            height={"500px"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="carosel2.jpg"
            alt="Description of the second carousel image"
            width={"100%"}
            height={"500px"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="carosel3.jpg"
            alt="Description of the third carousel image"
            width={"100%"}
            height={"500px"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
