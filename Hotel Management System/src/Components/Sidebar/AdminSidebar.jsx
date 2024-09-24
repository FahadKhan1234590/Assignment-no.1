import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { IoIosMenu } from 'react-icons/io'
import Navbar from '../Navbar/Navbar'
import Dropdown from '../Dropdown/Dropdown'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    let [toggleSidebar,setToggleSidebar] = useState(true)


   const toggleSidebarFunc = () =>{
    setToggleSidebar(!toggleSidebar)
   }
    
  return (
    <>
      <Navbar toggleSidebarFunc={toggleSidebarFunc}/>
      


<aside id="default-sidebar" className={`fixed top-0  left-0 z-40 w-64 h-screen transition-transform ${toggleSidebar? '-translate-x-full': ""} sm:translate-x-0`} aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-[#383b40] dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <div href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white group">
               
               <Link className='text-2xl mb-10' to="/dashboard">Hotel</Link>
               <span className='ms-10'>
               <ImCross className=' md:hidden text-white' onClick={toggleSidebarFunc} />
               </span>
            </div>
         </li>
    
               <Link to="analysisScreen/hotelAnalysis" className='text-white text-2xl block pb-5'>Hotel Analysis</Link>
                <Link to="customersScreen/customers" className='text-white text-2xl block pb-5'>All Customers</Link>
                <Link to="customersScreen/allCustomersBookingHistory" className='text-white text-2xl block pb-5'>All Customers Room Booking</Link>
                <Link to="servicesScreen/allUsersServicesRequest" className='text-white text-2xl block pb-5'>All Customers Service Request</Link>
                <Link to="paymentsScreen/allUsersPaymentsHistory" className='text-white text-2xl block'>All Customers Payment History</Link>

                              

      </ul>
   </div>
</aside>

    </>
  )
}

export default AdminSidebar
