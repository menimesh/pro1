import logo from '../img/logo.avif'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Layout = ({ children }) => {
    const menu = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Category', href: '/category' },
        { label: 'Contact us', href: '/contact-us' }
    ]
    

    return (
        <div>
            <nav className="shadow-lg mt-10 border rounded-lg w-5/12 mx-auto bg-white h-20">
                <div className="flex items-center justify-between px-6 h-full">
                
                    <img src={logo} alt="Logo" className="w-14" />

                  
                    <ul className="flex gap-6 items-center">
                        {menu.map((item, index) => (
                            <li key={index} className="text-sm font-medium">
                                <Link
                                    to={item.href}
                                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                       
                        <li>
                            <button className="block px-4 py-2 text-sm font-medium rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                                Login
                            </button>
                        </li>
                        <li>
                            <button className="bg-blue-600 text-white text-sm font-medium block px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
                                Register
                            </button>
                        </li>
                        <li>
                     
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
            <footer className="bg-orange-600 mt-5 py-16">
                <div className="w-10/12 mx-auto grid grid-cols-3 gap-8 text-white">
                   
                    <div>
                        <h1 className="text-lg font-bold mb-4">Product Details</h1>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iure vero exercitationem earum,
                            perspiciatis fugiat odit a sequi quod eveniet maiores, saepe optio pariatur.
                        </p>
                        <img src={logo} alt="Logo" className="w-24 mt-4" />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold mb-4">Quick Links</h1>
                        <ul className="space-y-2 text-sm">
                            {
                                menu.map((item,index)=>(
                                    
                                     <li key={index}>
                                     <Link to={item.href} className="hover:underline">
                                            {item.label}
                                    </Link>
                                    </li>
                                    
                                ))
                                
                                }
                    
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h1 className="text-lg font-bold mb-4">Contact Us</h1>
                        <p className="text-sm leading-relaxed">
                            Address: 123 Mid Baneshwor, Kathmadnu, Nepal
                        </p>
                        <p className="text-sm leading-relaxed">
                            Phone: +977-980-0000000
                        </p>
                        <p className="text-sm leading-relaxed">
                            Email: info@example.com
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
