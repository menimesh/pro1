import React, { useState } from "react";
import adminImg from "../img/adminback.png";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const [id, setId] = useState("");
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const validation = (e) => {
        e.preventDefault(); 
        if (id === "admin1") {
              
                      navigate("/admin/dashboard"); 
            
        }
        else{
          setErr(true)
        }
    };

    const check = (e) => {
        setId(e.target.value);
        setErr(false)
        
    };

    return (
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <img src={adminImg} alt="Admin" className="w-76 h-60" />
            <div>
                <h1 className="text-4xl font-semibold">Welcome Admin</h1>
                <form onSubmit={validation}>
                    <input
                        type="text"
                        className="border p-4 bg-white rounded-md w-[350px] mb-4"
                        placeholder="Enter admin ID"
                        value={id}
                        onChange={check}
                        required
                    />
                    <button
                        type="submit"
                        className="p-4 bg-violet-600 text-white font-semibold rounded"
                    >
                        Access Now
                    </button>
                </form>
                {err && (
                    <span className="text-red-500  ">
                        Please enter the correct ID!
                    </span>
                )}
            </div>
        </div>
    );
};

export default Admin;
