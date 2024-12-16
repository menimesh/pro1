import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import firebaseAppConfig from '../../util/firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseAppConfig);

const Preguard = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setSession(!!user); // Set session to true if user exists
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  if (session === null) {
    return (
      <div className="bg-gray-100 h-screen fixed top-0 left-0 w-full flex justify-center items-center">
        <div className="text-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <p className="mt-4 text-gray-600 font-medium">Verifying your session...</p>
        </div>
      </div>
    );
  }

  return session ? <Outlet /> : <Navigate to="/login" />;
};

export default Preguard;
