import React, { useEffect } from 'react'
import StaffSidebar from '../Components/Sidebar/StaffSidebar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Link1 from './StaffScreens/customersScreen/Customers'
import DashboardContent from './DashboardContent'
import UserSidebar from '../Components/Sidebar/UserSidebar'
import AdminSidebar from '../Components/Sidebar/AdminSidebar'


const Dashboard = () => {
  let location = useLocation()
  let navigate = useNavigate()

  useEffect(() => {
    if (location.pathname.startsWith('/dashboard') && localStorage.getItem('userLoggedIn') !== 'true') {
      handleDashboard();
    }
  }, [location]);

  const handleDashboard = () =>{
    alert('please login first')
    navigate('/') 
  }
  return (
    <>
     {
      location.pathname.startsWith('/dashboard') && localStorage.getItem('userLoggedIn') !== 'true' ?
      <></>:
      <>
      {
        localStorage.getItem('Role') == "User"? 
        <UserSidebar/> :
        localStorage.getItem('Role') == "Admin"?
        <AdminSidebar/> :
        localStorage.getItem('Role') == "Staff"?
        <StaffSidebar/>:
        <UserSidebar/>
      }
      {location.pathname === "/dashboard" || location.pathname === "/dashboard/"?<DashboardContent/>: <></>}
      </>
     }
    
    <Outlet/> 

    </>
  )
}

export default Dashboard;
