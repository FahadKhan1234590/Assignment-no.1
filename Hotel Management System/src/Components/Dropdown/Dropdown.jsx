import React, { useState } from 'react'
import { BsPersonGear } from 'react-icons/bs'
import { CiMoneyCheck1 } from 'react-icons/ci'
import { FaArrowDown } from 'react-icons/fa'
import { FaUserGear } from 'react-icons/fa6'
import { IoIosArrowDown, IoIosArrowUp, IoMdBook } from 'react-icons/io'
import { MdOutlineMeetingRoom } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Dropdown = (props) => {
    let [openAccordian,setOpenAccordian] = useState(false)
  
   const toggleAccordian  = () =>{
    props.openAccordian !== "false"?
    setOpenAccordian(!openAccordian):
    setOpenAccordian(false)
   }
    return (
    <>
    

    <div id="accordion-collapse" className='ms-3 mb-10' data-accordion="collapse">
 
  <h2 id="accordion-collapse-heading-2">
    <button onClick={toggleAccordian} type="button" className="flex items-center  w-full font-medium rtl:text-right " data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
  {props.dropdowntext.includes('Room')?
  <MdOutlineMeetingRoom className='me-3 text-3xl text-white' />:
  props.dropdowntext.includes('Booking')?
  <IoMdBook className='me-3 text-3xl text-white' />:
  props.dropdowntext.includes('Payment')?
  <CiMoneyCheck1  className='me-3 text-3xl text-white'  />:
  props.dropdowntext.includes('Service')?
  <BsPersonGear  className='me-3 text-3xl text-white'   />:
  <></>
}
      <Link to={props.mainLinkto} className='text-white me-5 text-xl'>{props.dropdowntext}</Link>
     {
         openAccordian?
         <IoIosArrowUp  className="text-2xl  text-white"/>
         :
         props.openAccordian !== "false"?
         <IoIosArrowDown  className="text-2xl text-white"/>:
         <></>
     }
    </button>
  </h2>

  <div id="accordion-collapse-body-3" className={`${openAccordian ? "" : "hidden"}`} aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5  rounded-md border-t-0 border-gray-200 text-white dark:border-gray-700">
      <Link to={props.link1to} className="mb-3 text-white block text-xl">{props.link1}</Link>
      <Link to={props.link2to} className="mb-3 text-white block text-xl">{props.link2}</Link>
      <Link to={props.link3to} className="mb-3 text-white block text-xl">{props.link3}</Link>
      
      
     
    </div>
  </div>
</div>

    </>
  )
}

export default Dropdown