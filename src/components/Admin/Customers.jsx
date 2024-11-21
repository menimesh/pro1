import React, {  useState,createContext } from 'react';
import Layout from './Layout';
import image from "../img/customer.jpg";

 

const Customers = () => {
    const [customer, setCustomer] = useState([
        { customerName: 'Jack', email: 'abc@gmail.com', mobile: '9800000000', date: '10-02-2024 10:15:14 Am' },
        { customerName: 'Jack', email: 'abc@gmail.com', mobile: '9800000000', date: '10-02-2024 10:15:14 Am' },
        { customerName: 'Jack', email: 'abc@gmail.com', mobile: '9800000000', date: '10-02-2024 10:15:14 Am' },
        { customerName: 'Jack', email: 'abc@gmail.com', mobile: '9800000000', date: '10-02-2024 10:15:14 Am' },
        { customerName: 'Jack', email: 'abc@gmail.com', mobile: '9800000000', date: '10-02-2024 10:15:14 Am' }
    ]);
    
    const length= customer.length;
    return (<>

    
        <Layout>
         

            <div className="text-xl font-semibold">Customer Orders</div>
            <div className="mt-6">
                <table className="w-full">
                    <thead>
                        <tr className="bg-rose-600 text-white">
                            <th scope="col" className="p-4 text-left">Customer's Name</th>
                            <th scope="col" className="text-left">Email</th>
                            <th scope="col" className="text-left">Contact No</th>
                            <th scope="col" className="text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((item, index) => (
                            <tr key={index} style={{ background: (index + 1) % 2 === 0 ? 'gray' : 'white' }}>
                                <td className="capitalize py-4 px-4">
                                    <div className="flex items-center gap-4">
                                        <img src={image} alt="Customer" className="w-12 h-12 rounded-full object-cover" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-gray-700">{item.customerName}</span>
                                            <small>{item.date}</small>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">{item.email}</td>
                                <td className="py-4">{item.mobile}</td>
                                <td className="py-4">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
        </>
    );
};

export default Customers;
