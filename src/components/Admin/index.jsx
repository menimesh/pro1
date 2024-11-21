import React from 'react'
import adminImg from "../img/adminback.png"
const Admin = () => {
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
        <img src={adminImg} className='w-76 h-60'/>
        <div>
        <h1 className='text-4xl text-semibold'>Welcome Admin</h1>
        <form action="">
            <input 
            type="text"
            className='border p-4 bg-white rounded-md w-[350px]'
            placeholder='Enter admin id'
            required
            />
            <button className='p-4 bg-violet-600 w-fit text-white font-semibold rounded'>Access Now</button>
        </form>
        </div>
    </div>
  )
}

export default Admin