import 'remixicon/fonts/remixicon.css'
import React from 'react'
import Orders from './components/Admin/Orders'
import Products from './components/Admin/Product'
import Payments from './components/Admin/Payments'
import Setting from './components/Admin/Setting'
import Logout from './components/Admin/Logout'
import Dashboard from './components/Admin/Dashboard'
import Customers from './components/Admin/Customers'
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/admin' >
    <Route path='products' element={<Products/>}/>
    <Route path='orders' element={<Orders/>}/>
    <Route path='payments' element={<Payments/>}/>
    <Route path='settings' element={<Setting/>}/>
    <Route path='logout' element={<Logout/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='customers' element={<Customers/>}/>
    </Route>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App