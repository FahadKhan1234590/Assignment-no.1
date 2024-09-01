import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar.jsx';
import Navbar from '../Components/Navbar/Navbar';
import './dashboard.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import StudentList from './Student/Student-List/Student-List.jsx';

const Dashboard = () => {
  let location  = useLocation()
  let navigate = useNavigate()

  useEffect(() => {
    if (location.pathname.startsWith('/dashboard') && localStorage.getItem('userLoggedIn') !== 'true') {
      handleLogin();
    }
  }, [location]);

  const handleLogin = () =>{
    alert('please login first')
    navigate('/login') 
  }
  return (
    <>
     {
      location.pathname.startsWith('/dashboard') && localStorage.getItem('userLoggedIn') !== "true"?
        <></>
      :
      <>
       <div>
      <Sidebar/>
      {location.pathname === "/dashboard" || location.pathname === "/dashboard/"?<StudentList/>: <></>}
      </div>
      <Outlet/>
      </>
     }
    </>
  );
};

export default Dashboard;
