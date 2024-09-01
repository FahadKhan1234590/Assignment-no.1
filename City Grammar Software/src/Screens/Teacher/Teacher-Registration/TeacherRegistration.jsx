// AdmissionForm.jsx
import React, { useState } from 'react';
import './teacherregistration.css'; // Assuming you have this stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { database,auth } from '../../../Config/firebase';
import showSweetAlert from '../../../Components/ShowSweetAlert';

const TeacherRegistration =() => {
   let [teacherData,setTeacherData] = useState({
    fullname: "",
    email : "",
    class : "",
    gender : ""
   })

   console.log(teacherData)

   const handleTeacherForm = async (e) =>{
     e.preventDefault()

      try{
      showSweetAlert('loading...','form is being submitted',true,true)

      const addData = await addDoc(collection(database,'Teachers'),teacherData)
      
      showSweetAlert('Form Submitted','',false,false)

     
      setTeacherData({
        fullname: "",
        email : "",
       class: "",
      gender : ""
      })
     }catch(error){
      console.log(error)
     }
   }
  return (
    <>
  
      <main id="main" className="container mt-4 mb-4">
        <div className="row stdregis">
          <div className="col-lg-2"></div>
          <div className="col-xs-12 col-lg-offset-3 col-lg-8">
            <div className="m-b-md text-center">
              <h1 id="title" className=''>Teacher Registration</h1>
    
            </div>

            <form id="admission-form" name="admissionForm" onSubmit={handleTeacherForm}>
              <fieldset>
                <label htmlFor="fullname">
                  <span className='fs-4'>Full Name</span>
                  <input
                  value={teacherData.fullname}
                  onChange={(e)=>setTeacherData({...teacherData,fullname:e.target.value})}
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your full name"
                    required
                  />
                </label>
              </fieldset>

              <fieldset>
                <label htmlFor="email">
                <span className='fs-4'>Email</span>
                  
                  <input
                  value={teacherData.email}

                  onChange={(e)=>setTeacherData({...teacherData,email:e.target.value})}

                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </label>
              </fieldset>

              <fieldset>
                <label htmlFor="class">
                  <span className='fs-4'>Class</span>

                  <input
                  onChange={(e)=>setTeacherData({...teacherData,class:e.target.value})}
                  value={teacherData.class}

                    className="w-100"
                    type="number"
                    id="class"
                    name="class"
                    placeholder="Enter class you teach"
                    required
                  />
                </label>
              </fieldset>      
        
              <fieldset>
                <label htmlFor="gender">
                <span className='fs-4'>Gender</span>
                  
                  <select
                  onChange={(e)=>setTeacherData({...teacherData,gender:e.target.value})}
                  value={teacherData.gender}
                  
                  
                  id="gender" name="gender" className="m-t-xs">
                    <option className="d-none">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </fieldset>

              <button 
               id="submitBtn"
               type="submit"
               name="submitBtn"
               className="btn btn-primary w-100 btnsubmit border-0 mt-5"
              
              >Submit</button>
            </form>
          </div>
        </div>
      </main>

    
    </>
  );
}

export default TeacherRegistration;
