import React from 'react'

import { Link } from 'react-router-dom'
import imgForm from "../img/adminback.png"
import { useState } from 'react'
import firebaseAppConfig from '../../util/firebase-config'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(firebaseAppConfig);
const Signup = () => {

    const [form,setForm] = useState({
      fullname: '',
      email: '',
      password: ''
    })
    const [show,setShow]=useState(true)
    const signup = async(e)=>{
      try{
        e.preventDefault();
        const user=await createUserWithEmailAndPassword(auth,form.email,form.password)
        console.log(user)
      }catch(err){
        console.log(err)
      }
      
    }
    const handlechange =(e)=>{
      const input=e.target;
      const value=input.value;
      const name= input.name;
      setForm({
        ...form,
        [name]:value
      })
    
    }
  return (
    
    <div className='grid md:grid-cols-2 h-screen overflow-hidden animate__animated animate__fadeIn'>
        <img src={imgForm} alt="" className='w-full h-full'/>
     <div className='flex flex-col justify-center p-16'>
   
        <h1 className='text-4xl font-bold'>New User</h1>
        <p className='text-lg text-gray-600'>Create your Account to start shopping.</p>
       <form className='mt-8 space-y-8' action="" onSubmit={signup}>
        <div className='flex flex-col'>
        <label htmlFor="" className='font-semibold text-lg mb-1'>Full Name</label>
        <input 
        required
        type="text"
        name="fullname"
        id="" 
        className='p-3 border border-gray-600 rounded'
        placeholder='Enter full Name'
        onChange={handlechange}
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
        onChange={handlechange}
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
        onChange={handlechange}
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
        <button className='bg-blue-600 text-white py-3 font-semibold px-8 rounded hover:bg-rose-600'>Signup</button>
       </form>
       <div>
        Already have an account ? <Link to='/login' className='text-blue-600'>Login</Link>
       </div>
     </div>
    </div>

  
  )
}

export default Signup