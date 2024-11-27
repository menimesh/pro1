import Layout from "./Layout";
import React from 'react'
import contactImg from '../img/adminback.png'
const Contact = () => {
  return (
   <Layout> 
    <div>
        <header className="w-6/12 mx-auto my-16 shadow-lg border">
            <img src={contactImg} alt="" className="w-full" />
            <div className="p-8">
            <form className='mt-2 space-y-8' action=" ">
        <div className='flex flex-col'>
        <label htmlFor="" className='font-semibold text-lg mb-1'>Full Name</label>
        <input 
        required
        type="text"
        name=""
        id="" 
        className='p-3 border border-gray-600 rounded'
        placeholder='Enter full Name'
        />
        </div>
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
        <div className='flex flex-col'>
        <label htmlFor="" className='font-semibold text-lg mb-1'>Message</label>
        <textarea name="message" rows={6} cols={40} className="border border-gray-300" placeholder="Enter your message here" />
        </div>
       
        <button className='bg-blue-600 text-white py-3 font-semibold px-8 rounded hover:bg-rose-600'>Send Message</button>
       </form>
            </div>
        </header>
    </div>
    </Layout>
  )
}

export default Contact