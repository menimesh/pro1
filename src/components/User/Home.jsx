import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import slider1 from "../img/slider.png";
import slider2 from "../img/slider1.jpg";
import slider3 from "../img/slider3.jpg";
import axios from 'axios';

// Import Swiper React components and styles
import { Swiper, SwiperSlide}  from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Home = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setCart(response.data.slice(0, 10));
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    if (show) {
      fetchProducts();
    }
  }, [show]);

  return (
    <>
      <Layout>
        {/* Slider */}
        <div className="mx-60">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper z-[-1]">
            <SwiperSlide>
              <img src={slider1} alt="Slider Image 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} alt="Slider Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} alt="Slider Image 3" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Latest Products */}
        <div className="md:p-6 p-8">
          <h1 className="text-3xl font-bold text-center">Latest Products</h1>
          <p className="text-center mx-auto text-gray-600 md:w-7/12 mt-2 mb-6">
            Discover the latest products available in our store. Enjoy high-quality items at great prices.
          </p>

          <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-16">
            {cart.map((item, index) => (
              <div key={index} className="bg-white shadow-lg">
                <img
                  src={item.image || 'placeholder-image-url.jpg'}
                  alt={item.title || 'Product Image'}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="text-gray-600 text-sm">{item.description.slice(0, 80)}...</p>
                  <p className="text-xl font-bold text-green-600">${item.price}</p>
                  <button className="bg-green-500 w-full py-2 text-white font-semibold mt-4">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
