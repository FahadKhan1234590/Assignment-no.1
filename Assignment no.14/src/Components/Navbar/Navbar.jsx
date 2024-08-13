import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { IoMdCart}  from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import styles from './navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({logoColor,navLinkClass}) => {
   
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
    
  

  return (
    <>
      <div>
        <div className={`${styles.display}  ms-4 pt-3`} >
            <div className='row w-100'>
              <div className='col-md-4'>
                
              <div>
              <img className={`${logoColor} me-xs-5`} style={{width: "126px"}} src={logo} alt="" />
              <div  className={`d-md-none d-sm-none d-inline d-sm-block d-xs-block`}>
            <div style={{display: "inline"}} className=" mt-4">
      <div style={{display: "inline"}} className="dropdown">
        <button 
          className={`${styles.menuBar} btn btn-secondary `}
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
        > 
        <FiMenu />
        </button>
        <ul
          className={`dropdown-menu${isOpen? ' show' : ''}`}
          aria-labelledby="dropdownMenuButton"
        >
          <li><Link to= '/' className="dropdown-item" onClick={closeDropdown}>Home</Link></li>
          <li><Link to='/allproducts' className="dropdown-item"  onClick={closeDropdown}>ALL PRODUCTS</Link></li>
        </ul>
      </div>
           </div>
           </div>

              </div>

              </div>




              <div className='col-md-4 text-center d-none d-sm-block d-md-block '>
            
                <NavLink 
                style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', })}  
                to="/"  className={`fs-5 ${navLinkClass} me-5`}>
                HOME</NavLink>

                <NavLink 
                style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', })}  
                to="/allproducts"  className={`fs-5 ${navLinkClass} me-5`}>
                ALL PRODUCTS</NavLink>
     
                </div>

                <div className='col-md-4 d-sm-block d-none d-md-block'>
                <div className='d-flex justify-content-end'>
                <IoMdCart className={`${navLinkClass} fs-2`}/>
                </div>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
