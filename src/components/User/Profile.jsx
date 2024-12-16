import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import avatar from '../img/customer.jpg';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import firebaseAppConfig from '../../util/firebase-config';
import { getFirestore, collection, addDoc, where, getDocs, query } from 'firebase/firestore';
import Swal from 'sweetalert2';

const auth = getAuth(firebaseAppConfig);
const db = getFirestore(firebaseAppConfig);

const Profile = () => {
  const navigate = useNavigate();

  const [session, setSession] = useState(null);
  const [formValue, setFormValue] = useState({
    fullname: '',
    email: '',
    mobile: '',
  });

  const [addressValue, setAddressValue] = useState({
    area: '',
    city: '',
    country: '',
    code: '',
    userID: ''
  });

  useEffect(() => {
    const req = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setSession(user);
          setFormValue({
            fullname: user.displayName || '',
            email: user.email || '',
            mobile: '',
          });

          setAddressValue((prevState) => ({
            ...prevState,
            userID: user.uid
          }));

          // Fetch the user's address from Firestore
          const ref = collection(db, 'addresses');
          const q = query(ref, where('userID', '==', user.uid));
          const snapshot = await getDocs(q);
          

          // If the user has addresses, populate the address form
          snapshot.forEach((doc) => {
            const addressData = doc.data();
            setAddressValue({
              ...addressValue,
              ...doc.data()
            })
          });
        } else {
          setSession(false);
          navigate('/login');
        }
      });
    };

    req(); // Call the async function
  }, [navigate]);

  const handleProfileFormValue = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleAddressFormValue = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setAddressValue({
      ...addressValue,
      [name]: value,
    });
  };

  const saveAddress = async (e) => {
    try {
      e.preventDefault();

      await addDoc(collection(db, 'addresses'), addressValue);

      new Swal({
        icon: 'success',
        title: 'Address Saved!',
      });
    } catch (err) {
      new Swal({
        icon: 'error',
        title: 'Failed',
        text: err.message,
      });
    }
  };

  return (
    <Layout>
      <div className='mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-8/12 lg:w-6/12 border'>
        <div className='flex gap-3 items-center'>
          <i className='ri-user-fill text-4xl'></i>
          <h1 className='text-3xl font-semibold'>Profile</h1>
        </div>
        <hr className='my-6' />
        <div>
          <img src={avatar} alt="" className='rounded h-[150px] w-[150px] mx-auto' />
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
              value={formValue.fullname}
              onChange={handleProfileFormValue}
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
              value={formValue.email}
              onChange={handleProfileFormValue}
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
              value={formValue.mobile}
              onChange={handleProfileFormValue}
            />
          </div>
        </form>

        <hr className='my-6' />

        <div className='mx-auto rounded h-[50px] w-[170px] text-xl font-bold text-gray-600'>
          Delivery address
        </div>

        <form className='grid grid-cols-2 gap-6' onSubmit={saveAddress}>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='area'>
              Area
            </label>
            <input
              onChange={handleAddressFormValue}
              type='text'
              name='area'
              id='area'
              className='p-3 rounded border border-gray-300'
              value={addressValue.area}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='city'>
              City
            </label>
            <input
              onChange={handleAddressFormValue}
              type='text'
              name='city'
              id='city'
              className='p-3 rounded border border-gray-300'
              value={addressValue.city}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='country'>
              Country
            </label>
            <input
              onChange={handleAddressFormValue}
              type='text'
              name='country'
              id='country'
              className='p-3 rounded border border-gray-300'
              value={addressValue.country}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold' htmlFor='code'>
              Pincode
            </label>
            <input
              onChange={handleAddressFormValue}
              type='text'
              name='code'
              id='code'
              className='p-3 rounded border border-gray-300'
              value={addressValue.code}
            />
          </div>
          <button type="submit" className='px-4 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-600'>
            <i className="ri-save-line mr-2"></i> Save
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default Profile;
