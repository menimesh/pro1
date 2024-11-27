import React, { useEffect } from 'react'
import Layout from './Layout'
import slider1 from "../img/slider.png"
import slider2 from "../img/slider1.jpg"
import slider3 from "../img/slider3.jpg"
import axios from 'axios'

import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Home = (children) => {
  const [cart,setCart]=useState([])
  const [add,setAdd]=useState([]);
  const [show,setShow]=useState(true)
  const fetch =async() =>{
    try{
      const response = await axios.get('https://fakestoreapi.com/products')

      setCart(response.data.slice(0,10))
      console.log(cart)
    }catch (err){
    console.log(err)
    }
  }

useEffect(()=>{
  if(show){
    fetch()
  }
},[show]);
  const [products,setProducts]=useState([]);
  return (
    <Layout>
     <div className='mx-60'>


     <Swiper navigation={true} modules={[Navigation]} className="mySwiper z-[-1]">
        <SwiperSlide><img src={slider1} alt="" className=''/></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>

      </Swiper>
      
     </div>
     <div className='md:p-6 p-8'>
        <h1 className="text-3xl font-bold text-center">Latest Products</h1>
        
        <p className=" text-center mx-auto text-gray-600 md:w-7/12 mt-2 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque cupiditate, nisi facere neque repellendus, ad ilorem
        psum totam ut id eveniet quo consequuntur tempore saepe, sit earum. Ad, molestiae voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint aliquam, fugiat sequi consequatur, ipsam libero veritatis architecto at porro, obcaecati quam repellendus! Sunt inventore neque quaerat ad qui unde!</p>
      <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-16">
    {
      cart.map((item,index)=>(
        <div key={index} className='bg-white shadow-lg'>
          <img src={item.image} alt="" />
          <div className='p-4'>
            <h1>{item.title}</h1>
            <p className="text-gray-600 text-sm">{item.description.slice(0, 80)}...</p>
              <p className="text-xl font-bold text-green-600">${item.price}</p>
              <button className='bg-green-500 w-full py-2 text-white font-semibold mt-4'>
                Buy Now
              </button>
        
          </div>
         
        </div>
      ))
    }
      </div>
      </div>

    </Layout>
  )
}

export default Home