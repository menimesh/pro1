import 'remixicon/fonts/remixicon.css'
import "animate.css"
import React from 'react'
import Orders from './components/Admin/Orders'
import Products from './components/Admin/Product'
import Payments from './components/Admin/Payments'
import Setting from './components/Admin/Setting'
import Logout from './components/Admin/Logout'
import Dashboard from './components/Admin/Dashboard'
import Customers from './components/Admin/Customers'
import Admin from './components/Admin/index'
import Home from './components/User/Home'
import Product from './components/User/Products'
import Category from './components/User/Category'
import Login from './components/User/Login'
import Signup from './components/User/Signup'
import Contact from './components/User/Contact'
import Preguard from './components/guard/Preguard'
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route element={<Preguard/>}>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Route>
    <Route path='/contact' element={<Contact/>}/>

    <Route path='/admin' >
    <Route path='products' element={<Products />}/>
    <Route path='orders' element={<Orders/>}/>
    <Route path='payments' element={<Payments/>}/>
    <Route path='settings' element={<Setting/>}/>
    <Route path='logout' element={<Logout/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='customers' element={<Customers/>}/>
    <Route path="auth" element={<Admin/>} />
    </Route>
    
    
   </Routes>
   </BrowserRouter>
  )
}

export default App