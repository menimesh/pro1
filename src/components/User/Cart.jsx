import React, { useState } from 'react'
import Layout from './Layout'
const Cart = () => {

  return (
    <Layout>
        <div className='my-16 mx-auto w-7/12 bg-white shadow-lg border rounded p-8'>
        <div className='flex item-center gap-2'>
        <i className="ri-shopping-cart-2-fill text-4xl"></i>
        <h1 className='text-3xl font-semibold '>Cart</h1>
        </div>
        <hr className='my-6'/>
        </div>
    </Layout>
  )
}

export default Cart