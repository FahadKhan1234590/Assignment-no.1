import React from 'react'
import citygrammarlogo from '../../assets/citygrammarlogo.png'
import { IoIosMenu } from 'react-icons/io'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import ProfileMenu from '../ProfileMenu/ProfileMenu'
const Navbar = (props) => {
  return (
    <>
 <div className='w-100 citygrammarnavbar' style={{display: props.display}}> 
 <nav className="navbar">
  <div className="container-fluid text-white">
   
   <div className='citygrammarnavinside'>
    <span><img src={citygrammarlogo} style={{width: "50px"}} className='me-3' alt="" /></span>
    <span className='fs-3 me-3'>City Grammar Learning Management System</span>
    <div className='d-inline-block fs-3' style={{marginLeft:'30px'}}>
      <IoIosMenu onClick={props.func} className='d-md-none'/>
      <ProfileMenu/>
      
      </div>
      
   </div>
  </div>
</nav>
 </div>
    </>
  )
}

export default Navbar
