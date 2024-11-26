import React, { useContext } from 'react';
import Layout from './Layout';

const Dashboard = () => {

  return (
    <Layout>
  
      <div>Dashboard</div>
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
          Total Customers: 
        </span>
      </div>
    </Layout>
  );
};

export default Dashboard;
