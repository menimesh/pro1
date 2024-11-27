import React from 'react'
import { Link } from 'react-router-dom'
import imgForm from "../img/adminback.png"
import { useState } from 'react'
const Login = () => {
    const visible=(e)=>{

    }
    
    const [show,setShow]=useState(true)
  return (
    
    <div className='grid md:grid-cols-2 h-screen overflow-hidden animate__animated animate__fadeIn'>
        <img src={imgForm} alt="" className='w-full h-full'/>
     <div className='flex flex-col justify-center p-16'>
        <h1 className='text-4xl font-bold'>Login</h1>
        <p className='text-lg text-gray-600'>Enter your details</p>
       <form className='mt-8 space-y-8' action=" ">
        <div className='flex flex-col'>
        <label htmlFor="" className='font-semibold text-lg mb-1'>Email</label>
        <input 
        type="email"
        name="email"
        id="" 
        className='p-3 border border-gray-600 rounded'
        placeholder='abc@gmail.com'
        />
        </div>
        <div className='flex flex-col relative'>
        <label htmlFor="" className='font-semibold text-lg mb-1'>Password</label>
        <input 
        
        type= {show ? 'password' : 'text'}
        name="password"
        id="" 
        className='p-3 border border-gray-600 rounded'
        placeholder='********'
        />
        {
            show ?
        <button 
        className='absolute top-12 right-5 rounded h-5 w-6 hover:bg-gray-300 hover:text-blue-600'
         onClick={(e)=> {
        e.preventDefault();
            setShow(!show)

         }}>
        <i className="ri-eye-line "></i>
        </button>
        :
        <button
         className='absolute top-12 right-5 rounded h-5 w-6 hover:bg-gray-300 hover:text-blue-600'
         onClick={(e)=>{
            e.preventDefault();
            setShow(!show)}}>
        <i class="ri-eye-off-line"></i>
        </button>
        }
       
        </div>
        <button className='bg-blue-600 text-white py-3 font-semibold px-8 rounded hover:bg-rose-600'>Login</button>
       </form>
       <div className='bg-gray-'>
        Don't have any account?  <Link className='text-blue-600' to="/signup">Register Now</Link>
       </div>
     </div>
    </div>

  
  )
}

export default Login