// Sidebar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Optional: For custom styles
import { ImCross } from 'react-icons/im';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Dropdown/Dropdown';
import { PiAddressBook, PiAddressBookBold, PiAddressBookFill, PiChalkboardTeacher, PiStudent } from 'react-icons/pi';
import { SiBookstack } from 'react-icons/si';
import { IoBookSharp, IoNewspaperOutline, IoPeople } from 'react-icons/io5';
import { IoIosPaper } from 'react-icons/io';
import { FaMoneyBill, FaSchool } from 'react-icons/fa';
import citygrammarlogo from '../../assets/citygrammarlogo.png'
const Sidebar = () => {
    let [sidebar,setSidebar] = useState(false)

    const setSidebarFunc = () =>{
      if(window.innerWidth < 767 == true){
        setSidebar(!sidebar)
      }
    }
  return (
    <>
    <div >
    <div className={`sidebar text-white ${sidebar? "setsidebarsmallscreen":""}`} style={{width: sidebar? "100%":""}}>
      <div className='mb-4 text-center'>
      <span className='fs-2 d-block text-center mb-4 ms-5 sb-heading'><img src={citygrammarlogo} className='me-5' style={{width :"80px"}} alt="" /></span>
      <span style={{marginLeft:  "60px"}} className='d-md-none'>
        <button className='btn btn-success text-white   ps-4 pe-4' style={{marginLeft: "-60px",color:  "green"}} onClick={setSidebarFunc} >Close</button></span>
      </div>
      
      <Dropdown onLinkClick={setSidebarFunc} text="Students" subtext1="Student Registration" subtext2="Student List" linkto1="students/student-registration" linkto2="students/students-list" icon={<PiStudent className='fs-5'/>}/>
      <Dropdown onLinkClick={setSidebarFunc} text="Teachers" subtext1="Teacher Registration" subtext2="Teachers List" linkto1="teachers/teacher-registration" linkto2="teachers/teachers-list" icon={<PiChalkboardTeacher className='fs-5'/>}/>
      <Dropdown onLinkClick={setSidebarFunc} text="Subjects" subtext1="Add Subjects" subtext2="Subjects List" linkto1="subjects/add-subjects" linkto2="subjects/subjects-list" icon={<IoBookSharp   className='fs-5 mt-2'/>}/>
      <Dropdown onLinkClick={setSidebarFunc} text="Syllabus" subtext1="Add Syllabus" subtext2="Syllabus List" linkto1="syllabus/add-syllabus" linkto2="syllabus/syllabus-list" icon={<IoIosPaper  className='fs-5 mt-2'/>}/>
      <Dropdown onLinkClick={setSidebarFunc} text="Fees" subtext1="Fees Structure" subtext2="Fees Submission" linkto1="fees/fees-structure" linkto2="fees/fees-submission" icon={<FaMoneyBill  className='fs-5 mt-2'/>}/>
      <Dropdown onLinkClick={setSidebarFunc} text="Exam" subtext1="Exam Schedule" subtext2="Exam Result" linkto1="exam/exam-schedule" linkto2="exam/exam-results" icon={<IoNewspaperOutline  className='fs-5 mt-2'/>}/>
      <Dropdown onLinkClick={setSidebarFunc} text="School" subtext1="Student Registration" subtext2="Teacher Registration" linkto1="students/student-registration" linkto2="teachers/teacher-registration" icon={<FaSchool className='fs-5'/>}/>
      <Dropdown onLinkClick={setSidebarFunc} text="Class" subtext1="Class Form" subtext2="Class List" linkto1="class/class-form" linkto2="class/class-list" icon={<IoPeople className='fs-5'/>}/>
      <Dropdown onLinkClick={setSidebarFunc} text="Admission" subtext1="Admission Form"  linkto1="admission/admission-form"  icon={<PiAddressBookBold className='fs-5'/>}/>



    
    </div>
      <Navbar func={setSidebarFunc} display={sidebar? "none":"block"} className={``}/>
    </div>
    </>
  );
};

export default Sidebar;
