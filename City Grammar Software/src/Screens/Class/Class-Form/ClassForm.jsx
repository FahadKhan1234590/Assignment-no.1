import React, { useState } from 'react';
import './classform.css'; // Assuming you have this stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { database,auth } from '../../../Config/firebase';
import showSweetAlert from '../../../Components/ShowSweetAlert';

const ClassForm =() => {
   let [classData,setClassData] = useState({
    fullname: "",
    email : "",
    guardianphonenumber: "",
    class : "",
    gender : ""
   })


   const handleClassForm = async (e) =>{
     e.preventDefault()

      try{
      showSweetAlert('loading...','form is being submitted',true,true)

      const addData = await addDoc(collection(database,'Class'),classData)
      
      showSweetAlert('Form Submitted','',false,false)

      setClassData({
        fullname: "",
        email : "",
       guardianphonenumber: "",
       class : "",
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
              <h1 id="title" className=''>Class Form</h1>
    
            </div>

            <form id="class-form" name="classForm" onSubmit={handleClassForm}>
              <fieldset>
                <label htmlFor="fullname">
                  <span className='fs-4'>Full Name</span>
                  <input
                  className='p-1'
                  onChange={(e)=>setClassData({...classData,fullname:e.target.value})}
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
                  onChange={(e)=>setClassData({...classData,email:e.target.value})}

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
                  onChange={(e)=>setClassData({...classData,guardianphonenumber:e.target.value})}

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
                <label htmlFor="class">
                  <span className='fs-4'>Class</span>

                  <input
                  onChange={(e)=>setClassData({...classData,class:e.target.value})}

                    className="w-50"
                    type="number"
                    id="class"
                    name="class"
                    placeholder="Enter Your Class"
                    required
                  />
                </label>
              </fieldset>

      

        
              <fieldset>
                <label htmlFor="gender">
                <span className='fs-4'>Gender</span>
                  
                  <select
                  onChange={(e)=>setClassData({...classData,gender:e.target.value})}
                  
                  
                  id="gender" name="gender" className="m-t-xs">
                    <option className="d-none">Select Your Gender</option>
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

export default ClassForm;
