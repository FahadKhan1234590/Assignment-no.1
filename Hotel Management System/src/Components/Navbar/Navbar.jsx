import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { FaHotel } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Navbar = (props) => {
  let navigate = useNavigate()
  let [openProfile,setOpenProfile] = useState(false)
  let localStorageUserName = localStorage.getItem('userFullName') 
  const auth = getAuth();
  const user = auth.currentUser;

  if(localStorageUserName == ""){
    let userEmail = user.email.toString()
    localStorage.setItem('userFullName',userEmail.slice(0,5))
  }
  const handleOpenProfile = () =>{
    setOpenProfile(!openProfile)
  }
  const handleLogout = () =>{
    localStorage.setItem('userLoggedIn','false')
    localStorage.setItem('Role','')
    setTimeout(()=>{
      navigate('/')
    },1000)
  }
  return (
   <>
   

<div className='sm:ml-64'>
<nav className=" md:bg-[#383b40] dark:bg-gray-900">

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span href="https://flowbite.com/" className="flex items-center flex-wrap space-x-3 rtl:space-x-reverse">
    <button onClick={props.toggleSidebarFunc}  type="button" className="p-1 inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <IoIosMenu className='text-4xl' color='black'/>
   </button>
        <span className="self-center text-2xl font-semibold dark:text-white md:text-white">
          <FaHotel className='inline  me-5 text-3xl'/>

            Hotel Management System
          </span>
    </span>


    <div className="md:block md:w-auto " id="navbar-default">

      <ul className="me-5 flex ms-28 flex-column gap-12">
      <li>
    <span className='text-white'>Logged In As:  {localStorage.getItem('Role')}  </span>
      
      </li>
      <li>
        
<button id="dropdownDefaultButton" onClick={handleOpenProfile}  class="text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4  rounded-full w-10 h-10 focus:outline-none focus:ring-blue-300 font-medium   text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  {localStorageUserName.slice(0,1)}
</button>

<div id="dropdown" class={`z-10 absolute ${openProfile? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-32 ml-[-5%] dark:bg-gray-700`}>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
    
      <li>
        <Link to="editProfile"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit Profile</Link>
      </li>
   
    </ul>
</div>

      </li>
       <li onClick={handleLogout} className='hover:cursor-pointer md:text-white sm:text-black'>
    <span className='mt-1  block'>Logout</span>
       </li>

       
      </ul>
    </div>
  </div>
</nav>
</div>

   </>
  )
}

export default Navbar
