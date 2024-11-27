import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link,useNavigate} from 'react-router-dom';
import imgForm from "../img/adminback.png";
import firebaseAppConfig from '../../util/firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(firebaseAppConfig);

const Signup = () => {
  const navigate=useNavigate()
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: ''
    });
    const [show, setShow] = useState(true);
    const [error, setError] = useState('');
    const [loader,setLoader]= useState(false)

    const signup = async (e) => {
        e.preventDefault();
        
        try {
            setLoader(true)
            const user = await createUserWithEmailAndPassword(auth, form.email, form.password);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have Signed Up successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setForm({
              fullname: '',
              email: '',
              password: ''
          });

            console.log(user);
            navigate('/')
        } catch (err) {
            console.log(err);
            setError(err.message); // Display the actual Firebase error message
        }
        finally{
          setLoader(false)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        setError(null)
    };

    return (
        <div className="grid md:grid-cols-2 h-screen overflow-hidden animate__animated animate__fadeIn">
            <img src={imgForm} alt="" className="w-full h-full" />
            <div className="flex flex-col justify-center p-16">
                <h1 className="text-4xl font-bold">New User</h1>
                <p className="text-lg text-gray-600">Create your account to start shopping.</p>
                <form className="mt-8 space-y-8" onSubmit={signup}>
                    <div className="flex flex-col">
                        <label htmlFor="fullname" className="font-semibold text-lg mb-1">Full Name</label>
                        <input
                            required
                            type="text"
                            name="fullname"
                            className="p-3 border border-gray-600 rounded"
                            placeholder="Enter full name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold text-lg mb-1">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            className="p-3 border border-gray-600 rounded"
                            placeholder="abc@gmail.com"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col relative">
                        <label htmlFor="password" className="font-semibold text-lg mb-1">Password</label>
                        <input
                            required
                            type={show ? 'password' : 'text'}
                            name="password"
                            className="p-3 border border-gray-600 rounded"
                            placeholder="********"
                            onChange={handleChange}
                        />
                        <button
                            aria-label={show ? 'Show password' : 'Hide password'}
                            className="absolute top-12 right-5 rounded h-5 w-6 hover:bg-gray-300 hover:text-blue-600"
                            onClick={(e) => {
                                e.preventDefault();
                                setShow(!show);
                            }}
                        >
                            <i className={show ? "ri-eye-line" : "ri-eye-off-line"}></i>
                        </button>
                    </div>
                    {
                      loader ? <h1 className='text-lg font-semibold text-gray-600'>Loading.....</h1>
                      :
                      <button className="bg-blue-600 text-white py-3 font-semibold px-8 rounded hover:bg-rose-600">Signup</button>

                    }
                </form>
                <div>
                    Already have an account? <Link to='/login' className="text-blue-600">Login</Link>
                </div>
                {error && (
                    <div className="mt-4 bg-rose-600 p-2 rounded shadow font-semibold text-white animate__animated animate__pulse">
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Signup;
