import React from 'react'
import Layout from './Layout'
import { useState } from 'react'

const Orders = () => {
    const [order,setOrder]=useState([
        {
            orderId:'123',
            customerName:'Jack',
            email:'abc@gmail.com',
            mobile:'9800000000',
            product:'laptop',
            amount:55000,
            date:'10-02-2024 10:15:14 Am',
            status:'pending'



        },
        {
            orderId:'123',
            customerName:'Jack',
            email:'abc@gmail.com',
            mobile:'9800000000',
            product:'laptop',
            amount:55000,
            date:'10-02-2024 10:15:14 Am',
            status:'pending'



        },
        {
            orderId:'123',
            customerName:'Jack',
            email:'abc@gmail.com',
            mobile:'9800000000',
            product:'laptop',
            amount:55000,
            date:'10-02-2024 10:15:14 Am',
            status:'pending'



        },
        {
            orderId:'123',
            customerName:'Jack',
            email:'abc@gmail.com',
            mobile:'9800000000',
            product:'laptop',
            amount:55000,
            date:'10-02-2024 10:15:14 Am',
            status:'pending'



        }
    ])
  return (
   <Layout>
       <div className='text-xl font-semibold'>Customer Orders</div>
       <div className='mt-6'>
        <table className='w-full '>
            <thead>
                <tr className='bg-rose-600 text-white'>
                    <th className='py-4'>Orderid</th>
                    <th>Customer`s name</th>
                    <th>Email</th>
                    <th>Contact No</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    order.map((item,index)=>(
                        <tr className=' text-center' key={index} style={{
                            background: (index+1)%2 === 0 ? '#60a5fa' : 'white'
                        }} >
                            <td className='py-4'>{item.orderId}</td>
                            <td>{item.customerName}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.product}</td>
                            <td>Rs.{item.amount.toLocaleString()}</td>
                            <td>{item.date}</td>
                            <td className='capitalize'>
                              <select name="" id="" className='border-gray-200 p-1'>
                                <option value="pending" >Pending</option>
                                <option value="processing">Processing</option>
                                <option value="dispatched">Dispatched</option>
                                <option value="returned">Returned</option>                                
                              </select>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
       </div>

   </Layout> 
  )
}

export default Orders