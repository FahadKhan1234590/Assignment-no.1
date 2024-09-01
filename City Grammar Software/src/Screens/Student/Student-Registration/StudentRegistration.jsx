// AdmissionForm.jsx
import React, { useState } from 'react';
import './studentregistration.css'; // Assuming you have this stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { database,auth } from '../../../Config/firebase';
import showSweetAlert from '../../../Components/ShowSweetAlert';

const StudentRegistration =() => {
   let [studentData,setStudentData] = useState({
    fullname: "",
    email : "",
    guardianphonenumber: "",
    age : "",
    gender : ""
   })

   console.log(studentData)

   const handleStudentForm = async (e) =>{
     e.preventDefault()

      try{
      showSweetAlert('loading...','form is being submitted',true,true)

      const addData = await addDoc(collection(database,'Students'),studentData)
      
      showSweetAlert('Form Submitted','',false,false)
      
      setStudentData({
        fullname: "",
        email : "",
        guardianphonenumber: "",
        age : "",
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
              <h1 id="title" className=''>Student Registration</h1>
    
            </div>

            <form id="admission-form" name="admissionForm" onSubmit={handleStudentForm}>
              <fieldset>
                <label htmlFor="fullname">
                  <span className='fs-4'>Full Name</span>
                  <input
                  className='p-1'
                  value={studentData.fullname}
                  onChange={(e)=>setStudentData({...studentData,fullname:e.target.value})}
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
                  value={studentData.email}

                  onChange={(e)=>setStudentData({...studentData,email:e.target.value})}

                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </label>
              </fieldset>

              <fieldset>
                <label htmlFor="guardianphonenumber">
                  <span className='fs-4'>Guardian's Phone Number</span>

                  <input
                  value={studentData.guardianphonenumber}

                  onChange={(e)=>setStudentData({...studentData,guardianphonenumber:e.target.value})}

                    className="w-100"
                    type="number"
                    id="guardianphonenumber"
                    name="guardianphonenumber"
                    placeholder="Enter guardian's phone number"
                    required
                  />
                </label>
              </fieldset>

              <fieldset>
                <label htmlFor="stdage">
                  <span className='fs-4'>Student's Age</span>

                  <input
                  value={studentData.age}

                  onChange={(e)=>setStudentData({...studentData,age:e.target.value})}

                    className="w-50"
                    type="number"
                    id="stdage"
                    name="stdage"
                    placeholder="Enter Student's age"
                    required
                  />
                </label>
              </fieldset>

      

        
              <fieldset>
                <label htmlFor="gender">
                <span className='fs-4'>Gender</span>
                  
                  <select
                  value={studentData.gender}

                  onChange={(e)=>setStudentData({...studentData,gender:e.target.value})}
                  
                  
                  id="gender" name="gender" className="m-t-xs">
                    <option className="d-none">Select Child's Gender</option>
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

export default StudentRegistration;
