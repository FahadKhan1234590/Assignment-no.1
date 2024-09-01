import React, { useState } from 'react';
import './addsubjects.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { database,auth } from '../../../Config/firebase';
import showSweetAlert from '../../../Components/ShowSweetAlert'
const AddSubjects =() => {
   let [subjectData,setSubjectData] = useState({
    name: "",
    class : "",
    group : ""
   })


   const handleAddSubjects = async (e) =>{
     e.preventDefault()

      try{
      showSweetAlert('loading','subject is being submitted',true,true)
      const addData = await addDoc(collection(database,'Subjects'),subjectData)
      
      showSweetAlert('Subject Submitted','',false,false)
      
      setSubjectData({
        name: "",
        class : "",
       group : ""
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
              <h1 id="title" className=''>Add Subject</h1>
    
            </div>

            <form id="subjects-form" name="subjects-form" onSubmit={handleAddSubjects}>
              <fieldset>
                <label htmlFor="subjectname">
                  <span className='fs-4'>Subject Name</span>
                  <input
                  value={subjectData.name}
                  onChange={(e)=>setSubjectData({...subjectData,name:e.target.value})}
                    type="text"
                    id="subjectname"
                    name="subjectname"
                    placeholder="Enter Subject Name"
                    required
                  />
                </label>
              </fieldset>


              <fieldset>
                <label htmlFor="class">
                  <span className='fs-4'>Class</span>

                  <input
                  onChange={(e)=>setSubjectData({...subjectData,class:e.target.value})}
                 
                  value={subjectData.class}

                    className="w-100"
                    type="number"
                    id="class"
                    name="class"
                    placeholder="Enter your class"
                    required
                  />
                </label>
              </fieldset>      
        
              <fieldset>
                <label htmlFor="group">
                <span className='fs-4'>Group</span>
                  
                  <select
                  onChange={(e)=>setSubjectData({...subjectData,group:e.target.value})}
                 
                  value={subjectData.group}
                  
                  
                  id="group" name="group" className="m-t-xs">
                    <option className="d-none">Select Group</option>
                    <option value="computer science">Computer Science</option>
                    <option value="biology">Biology</option>
                  </select>
                </label>
              </fieldset>

              <button 
               id="submitBtn"
               type="submit"
               name="submitBtn"
               className="btn btn-primary w-100 btnsubmit border-0 mt-5"
              
              >Add Subject</button>
            </form>
          </div>
        </div>
      </main>

    
    </>
  );
}

export default AddSubjects;
