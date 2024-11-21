import React, { useState, useEffect} from 'react';
import Layout from './Layout';
import axios from 'axios';
import Dashboard from './Dashboard';

const Products = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Fetch products from the API
  const fetchCart = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setCart(response.data.slice(0, 10)); // Limit the data to first 10 products
  
    } catch (err) {
      console.log(err);
    }
  };

  // Add product to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    if (show) {
      fetchCart();
    }
  }, [show]);

  return (
    <>
    
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {/* Products display */}
        {cart.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-t-md h-[250px] w-full object-cover"
              />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description.slice(0, 80)}...</p>
              <p className="text-xl font-bold text-green-600">${item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Drawer/Section */}
      {cartItems.length > 0 && (
        <div className="fixed top-0 right-0 bg-gray-100 p-4 w-80 h-full shadow-lg overflow-y-auto">
          <h3 className="text-xl font-bold mb-4">Cart Items</h3>
          <button
            onClick={() => setCartItems([])}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
            Clear Cart
          </button>
          <ul className="mt-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center py-2 border-b">
                <span>{item.title}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                  >
                  Removee
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-semibold">Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          </div>
        </div>
      )}
    </Layout>
      </>
  );
};

export default Products;
 