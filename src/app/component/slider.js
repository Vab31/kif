

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const HeroSlider = () => {
  const slides = [
    { src: '/images/slider1.png', text: 'Empowering Future Innovators' },
    { src: '/images/slider2.png', text: 'Bridging the Gap with Technology' },
    { src: '/images/slider3.png', text: 'Unlocking Potential with Knowledge' },
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative flex justify-center items-center h-full">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover bg-black opacity-50"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-amber-700  text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
