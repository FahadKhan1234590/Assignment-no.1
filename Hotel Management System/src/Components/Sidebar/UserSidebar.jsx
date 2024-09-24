import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { IoIosMenu } from 'react-icons/io'
import Navbar from '../Navbar/Navbar'
import Dropdown from '../Dropdown/Dropdown'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
    let [toggleSidebar,setToggleSidebar] = useState(true)


   const toggleSidebarFunc = () =>{
    setToggleSidebar(!toggleSidebar)
   }
    
  return (
    <>
      <Navbar toggleSidebarFunc={toggleSidebarFunc}/>
      


<aside id="default-sidebar" className={`fixed  top-0  left-0 z-40 w-64 h-screen transition-transform ${toggleSidebar? '-translate-x-full': ""} sm:translate-x-0`} aria-label="Sidebar">
   <div className="h-full px-3 py-4  overflow-y-auto bg-[#383b40] dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <div href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white group">
               
               <Link className='text-2xl mx-6  mb-10' to="/dashboard">Hotel</Link>
               <span className='ms-10'>
               <ImCross className=' md:hidden text-white' onClick={toggleSidebarFunc} />
               </span>
            </div>
         </li>
        

<Dropdown dropdowntext="Rooms Info" mainLinkto = "roomsScreen/rooms"
                link1="Rooms" link1to ="roomsScreen/rooms"
                 link2 = "Room Booking" link2to ="roomsScreen/roomBooking"
                  link3= "" link3to =""/>    <br/>    

                  <Dropdown dropdowntext="Bookings" mainLinkto = "roomsScreen/roomBooking"
                link1="Room Booking" link1to ="roomsScreen/roomBooking"
                 link2 = "Submit Payment" link2to ="paymentsScreen/submitPayment"
                 link3= "" link3to =""
                  />   <br/>

                      <Dropdown dropdowntext="Payment" mainLinkto = "paymentsScreen/YourPaymentsHistory"
                link1="Your Payments History" link1to ="paymentsScreen/YourPaymentsHistory"
                 link2 = "Submit Payment" link2to ="paymentsScreen/submitPayment"
                 link3= "" link3to =""
                  />        <br/>

                           <Dropdown dropdowntext="Services" mainLinkto = "servicesScreen/AllServices"
                link1="All Services" link1to ="servicesScreen/AllServices"
                 link2 = "Request Service" link2to ="servicesScreen/RequestService"
                 link3= "" link3to =""
                  />     
                              

      </ul>
   </div>
</aside>

    </>
  )
}

export default UserSidebar
