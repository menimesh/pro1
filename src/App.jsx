import 'remixicon/fonts/remixicon.css';
import "animate.css";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Preguard from './components/guard/Preguard';
import Home from './components/User/Home';
import Product from './components/User/Products';
import Category from './components/User/Category';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import Contact from './components/User/Contact';
import Profile from './components/User/Profile';
import Cart from './components/User/Cart';
import Admin from './components/Admin/index';
import Dashboard from './components/Admin/Dashboard';
import Products from './components/Admin/Product';
import Orders from './components/Admin/Orders';
import Payments from './components/Admin/Payments';
import Setting from './components/Admin/Setting';
import Logout from './components/Admin/Logout';
import Customers from './components/Admin/Customers';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/category' element={<Category />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route element={<Preguard />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
        </Route>

        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} /> {/* Default admin page */}
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='payments' element={<Payments />} />
          <Route path='settings' element={<Setting />} />
          <Route path='logout' element={<Logout />} />
          <Route path='customers' element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
