import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import avatar from '../img/customer.jpg';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import firebaseAppConfig from '../../util/firebase-config';

const auth = getAuth(firebaseAppConfig);

const Profile = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); // Define loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user); // Set the user session
        navigate('/profile'); // Navigate to profile page if logged in
      } else {
        setSession(null);
        navigate('/login'); // Redirect to login page if not logged in
      }
      setLoading(false); // Set loading to false after auth state is determined
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

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
    <Layout>
      <div className='mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-8/12 lg:w-6/12 border'>
        <div className='flex gap-3 items-center'>
          <i className='ri-user-fill text-4xl'></i>
          <h1 className='text-3xl font-semibold'>Profile</h1>
        </div>
        <hr className='my-6' />
        <div>
          <img src={avatar} alt="" className='rounded h-[150px] w-[150px] mx-auto'/>
          {/* <input type='file'/> */}
        </div>
        <form className='grid grid-cols-2 sm:grid-cols-2 gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='fullname'>
              Full name
            </label>
            <input
              type='text'
              name='fullname'
              id='fullname'
              className='p-3 rounded border border-gray-300'
              value='Nimesh'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='p-3 rounded border border-gray-300'
              value='example@gmail.com'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='mobile'>
              Mobile
            </label>
            <input
              type='number'
              name='mobile'
              id='mobile'
              className='p-3 rounded border border-gray-300'
              value='982000000'
            />
          </div>

          <div></div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='area'>
              Area
            </label>
            <input
              type='text'
              name='area'
              id='area'
              className='p-3 rounded border border-gray-300'
              value='Birthamode'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='city'>
              City
            </label>
            <input
              type='text'
              name='city'
              id=''
              className='p-3 rounded border border-gray-300'
              value='Jhapa'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='city'>
              Country
            </label>
            <input
              type='text'
              name='country'
              id='country'
              className='p-3 rounded border border-gray-300'
              value='Nepal'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='city'>
              Pincode
            </label>
            <input
              type='text'
              name='code'
              id='code'
              className='p-3 rounded border border-gray-300'
              value='12345'
            />
          </div>
          <button className='px-4 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-600'>
            <i className="ri-save-line mr-2"></i>
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
