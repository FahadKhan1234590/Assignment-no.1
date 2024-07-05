import React from 'react'
import Logo from "../assets/Logo.png"

const Secondheader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white pb-3 sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand w-50 ms-1" href="#"><img src={Logo} alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand " href="#"></a>
      
      <ul className="mt-3 d-flex">
          <li className="dropdown nav-link me-5">
               <a className="nav-link dropdown-toggle  text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
               <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Home One</a></li>
                  <li><a className="dropdown-item" href="#">Home Two </a></li>
               </ul>
            </li>


          <li className="dropdown nav-link me-5">
               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
               <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Instructor </a></li>
               </ul>
            </li>

          <li className="dropdown nav-link me-5">
               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
               <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Course</a></li>
                  <li><a className="dropdown-item" href="#">Right Sidebar </a></li>
               </ul>
            </li>

            <li className="dropdown nav-link me-5">
               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
               <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Blog Single </a></li>
               </ul>
            </li>

            <li className="nav-link">Contact</li>
          </ul>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <div className="d-flex me-5" role="search">
        </div>

        <form className="d-flex me-2" role="search">
          <input className="form-control border-0 ps-4 pe-4" type="search" style={{fontSize: "85%",backgroundColor : "#F4F5F5"}} placeholder="Search Course" aria-label="Search"/>
         <a className=' pt-2 pb-2 pe-3 ps-2 fs-5' style={{backgroundColor: "#F4F5F5"}}><i className="fa-solid fa-magnifying-glass" style={{color : "blue"}}></i></a>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Secondheader
