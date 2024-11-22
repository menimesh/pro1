import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {
  const [open, setOpen] = useState(true); 
  const [log, setLog] = useState(false);
  const location=useLocation()
  const menu = [
    {
      label: "Dashboard",
      icon: <i class="ri-dashboard-line"></i>,
      link: "/admin/dashboard"
    },
    {
      label: "Customers",
      icon : <i class="ri-user-smile-line"></i>,
      link : "/admin/customers"
    },
    {
      label: "Products",
      icon: <i className="ri-shopping-cart-line mr-2 "></i>,
      link: '/admin/products'
    },
    {
      label: "Orders",
      icon: <i className="ri-shape-line mr-2 "></i>,
      link: '/admin/orders'
    },
    {
      label: "Payments",
      icon: <i class="ri-bank-card-line"></i>,
      link: '/admin/payments'
    },
    {
      label: "Setting",
      icon:<i class="ri-settings-2-line"></i>,
      link: '/admin/settings'
    },
    {
      label: "Logout",
      icon: <i class="ri-logout-circle-r-line"></i>,
      link: "/admin/logout"
    }
  ]
  const logout = (e) => {
    e.preventDefault();
    navigate('/admin/auth'); // Correctly navigate to the login page
};

const navigate=useNavigate();
  return (
    <div>
    
      <aside
        className={`bg-sky-800 fixed top-0 left-0 h-full transition-all duration-300 overflow-hidden ${
          open ? 'w-[280px]' : 'w-0'
        }`}
      >
        <div className='flex flex-col'>
       {
        menu.map((item,index)=>(

          <Link to={item.link} className='p-4 text-gray-50 text-lg hover:bg-rose-600 hover:text-white'
          style={{
            background: (location.pathname === item.link) ? '#E11D48': 'transparent'
          }}>
          {item.icon}
          {item.label}
          
          </Link>
        ))
       }
        </div>
      </aside>

     
      <section
        className="bg-gray-300 h-screen transition-all duration-300"
        style={{
          marginLeft: open ? 280 : 0,
        }}
      >
        <nav className="bg-white p-6 shadow flex item-center">
          <div className="flex gap-3 items-center">
      
            <button
              className="bg-gray-50 hover:text-sky-600"
              onClick={() => setOpen(!open)}
            >
              <i className="ri-menu-2-line text-xl"></i>
            </button>
            <h1 className="text-md font-semibold">Click</h1>
          </div>
      
          <button className=' relative ml-auto bg-gray-50 hover:bg-gray-200 p-2 rounded-full'>
            <i className="ri-user-fill text-xl " onClick={()=>setLog(!log)}></i>
            {
                log &&
                <div className="absolute top-12 right-0 bg-white p-6 w-[200px] shadow-lg">
                <div >
                    <h1 className='font-semibold'>Admin</h1>
                    <p className='text-gray-500'>admin@admin.com</p>
                    <div className='h-px bg-gray-200 my-4'>
                        <button className='' onClick={logout}>
                    <i class="ri-logout-circle-r-line"></i>
                            Logout</button>
                    </div>
                </div>
            </div>
            }
       
          </button>
        </nav>
        <div className='p-5'>
          {children}
        </div>
      </section>
    </div>
  );
}

export default Layout;
