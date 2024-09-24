import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { IoIosMenu } from 'react-icons/io'
import Navbar from '../Navbar/Navbar'
import Dropdown from '../Dropdown/Dropdown'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const StaffSidebar = () => {
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
               
            <Link className='text-2xl' to="/dashboard">Hotel</Link>
               <span className='ms-10'>
               <ImCross className=' md:hidden text-white' onClick={toggleSidebarFunc} />
               </span>
            </div>
         </li>
         <Dropdown className="" dropdowntext="Customers Info" mainLinkto = "customersScreen/customers"
                link1="Customers" link1to ="customersScreen/customers"
                 link2 = "Booking" link2to ="customersScreen/allCustomersBookingHistory"
                  link3= "" link3to =""/><br/>

<Dropdown dropdowntext="Rooms Info" mainLinkto = "roomsScreen/rooms"
                link1="Rooms" link1to ="roomsScreen/rooms"/>
                    <br/>    

                  <Dropdown dropdowntext="Bookings" mainLinkto = "customersScreen/allCustomersBookingHistory"
                 link3= "Customer History" link3to ="customersScreen/allCustomersBookingHistory"
                  />   <br/>

                      <Dropdown dropdowntext="Payment" mainLinkto = "paymentsScreen/allUsersPaymentsHistory"
                link1="All Users Payments History" link1to ="paymentsScreen/allUsersPaymentsHistory"
                  />     
                     <br/>
                        <Dropdown dropdowntext="Services Request" mainLinkto = "servicesScreen/allUsersServicesRequest"
                link1="All Users Services Request" link1to ="servicesScreen/allUsersServicesRequest"
                  />                 

      </ul>
   </div>
</aside>

    </>
  )
}

export default StaffSidebar
