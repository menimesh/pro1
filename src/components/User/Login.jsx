import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgForm from "../img/adminback.png";
import firebaseAppConfig from "../../util/firebase-config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);
const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      const user = await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      console.log("Logged in user:", user);
      navigate("/");
      // Clear previous errors
    } catch (err) {
      const errorMessage =
        err.message || "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden animate__animated animate__fadeIn">
      <img src={imgForm} alt="Background" className="w-full h-full" />
      <div className="flex flex-col justify-center p-16">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-lg text-gray-600">Enter your Login Details</p>
        <form className="mt-8 space-y-8" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={formValue.email}
              id="email"
              className="p-3 border border-gray-600 rounded"
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Password
            </label>
            <input
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValue.password}
              id="password"
              className="p-3 border border-gray-600 rounded"
              placeholder="********"
              required
            />
            <button
              type="button"
              className="absolute top-12 right-5 rounded h-5 w-6 hover:bg-gray-300 hover:text-blue-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <i
                className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}
              ></i>
            </button>
          </div>
          {loader ? (
            <h1 className="text-lg font-semibold text-gray-600"></h1>
          ) : (
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 font-semibold px-8 rounded hover:bg-rose-600"
              disabled={!formValue.email || !formValue.password}
            >
              Login
            </button>
          )}
        </form>
        <div>
          Don't have an account?{" "}
          <Link className="text-blue-600" to="/signup">
            Register Now
          </Link>
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

export default Login;
