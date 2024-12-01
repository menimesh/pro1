import logo from '../img/logo.avif';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import firebaseAppConfig from '../../util/firebase-config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import userImage from '../img/user.jpg';

const auth = getAuth(firebaseAppConfig);

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setSession(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setSession(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const menu = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/category' },
    { label: 'Contact us', href: '/contact' },
  ];

  if (loading) {
    return (
      <div className="bg-gray-100 h-screen fixed top-0 left-0 w-full flex justify-center items-center">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </div>
    );
  }

  return (
    <div>
      {/* Navigation */}
      <nav className="shadow-lg mt-10 border rounded-lg w-11/12 mx-auto bg-white h-20">
        <div className="flex items-center justify-between px-6 h-full">
          <img src={logo} alt="Logo" className="w-14" />
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <i className="ri-menu-line text-2xl transition-transform duration-300 transform hover:rotate-90"></i>
          </button>
          <ul className="md:flex gap-6 items-center hidden">
            {menu.map((item, index) => (
              <li key={index} className="text-sm font-medium">
                <Link to={item.href} className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300">
                  {item.label}
                </Link>
              </li>
            ))}

            {session ? (
              <button className="relative">
                <i className="ri-user-fill text-xl" onClick={() => setLog(!log)}></i>
                {log && (
                  <div className="flex flex-col items-start absolute top-12 right-0 z-10 bg-white w-[200px] shadow-xl">
                    <Link to="/profile" className="w-full p-4 hover:bg-gray-200">
                      <i className="ri-user-line mr-3">My profile</i>
                    </Link>
                    <Link to="/cart" className="w-full p-4 hover:bg-gray-200">
                      <i className="ri-shopping-cart-line">Cart</i>
                    </Link>
                    <button className="w-full p-4 hover:bg-gray-200" onClick={handleLogout}>
                      <i className="ri-logout-circle-line"></i> Logout
                    </button>
                  </div>
                )}
              </button>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="block px-4 py-2 text-sm font-medium rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className="bg-blue-600 text-white text-sm font-medium block px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
                      Register
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-40">
          <aside className="bg-slate-900 shadow-lg fixed top-0 left-0 w-[250px] h-full z-50">
            <div className="text-white p-4">
              <button className="text-white text-2xl float-right" onClick={() => setOpen(false)}>&times;</button>
              <ul className="mt-8 space-y-4">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} className="text-white hover:text-blue-400 transition duration-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setOpen(false)}
          />
        </div>
      )}

      {children}

      {/* Footer */}
      <footer className="bg-orange-600 mt-5 py-16 md:py-10">
        <div className="w-10/12 mx-auto grid md:grid-cols-3 gap-8 text-white md:gap-0 gap-16">
          <div>
            <h1 className="text-lg font-bold mb-4">Product Details</h1>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iure vero exercitationem earum, perspiciatis fugiat odit a sequi quod eveniet maiores, saepe optio pariatur.
            </p>
            <img src={logo} alt="Logo" className="w-24 mt-4" />
          </div>

          <div>
            <h1 className="text-lg font-bold mb-4">Quick Links</h1>
            <ul className="space-y-2 text-sm">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-bold mb-4">Contact Us</h1>
            <p className="text-sm leading-relaxed">Address: 123 Mid Baneshwor, Kathmandu</p>
            <p className="text-sm leading-relaxed">Phone: +977-980-0000000</p>
            <p className="text-sm leading-relaxed">Email: info@example.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
