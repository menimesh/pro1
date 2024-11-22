import React from 'react'
import Layout from './Layout'
import slider1 from "../img/slider.png"
import slider2 from "../img/slider1.jpg"
import slider3 from "../img/slider3.jpg"


import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Home = (children) => {

  return (
    <Layout>
     <div className='mx-60'>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={slider1} alt="" className=''/></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>

      </Swiper>
     </div>

    </Layout>
  )
}

export default Home