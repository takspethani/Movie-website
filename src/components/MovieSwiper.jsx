import React from "react";
import "./movieSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules"; // Updated import

function MovieSwiper({ slides, handleSlideChange }) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="movieSwiper"
      modules={[Autoplay, EffectCoverflow]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.previewImg}
            alt={`Preview ${index}`}
            onClick={() => handleSlideChange(slide._id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
