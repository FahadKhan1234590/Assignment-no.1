import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateNewUser = () => {
    let navigate = useNavigate()
    let [userData,setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:2000/users',userData).then((res)=>{
            alert('User Successfully Added')
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
     <div className='text-center mb-2 bg-dark'>
        <span className='fs-1  text-white'>Create New User</span>
    </div>

 <div className='d-flex justify-content-center mt-4'>
 <div className='rounded-3' style={{width : "90%",border : "solid 1px black"}}>
   <form className='fs-3' style={{margin : 50}} onSubmit={handleSubmit}>
   <div className="mb-3">
    <label  className="form-label">Full Name :</label>
    <input onChange={(e)=>setUserData({...userData,name: e.target.value})} required type="text" className="form-control"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address :</label>
    <input onChange={(e)=>setUserData({...userData,email: e.target.value})} required type="email" className="form-control"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Phone Number :</label>
    <input onChange={(e)=>setUserData({...userData,phone: e.target.value})} required type="text" className="form-control"/>
  </div>
 
  <button type="submit" className="btn btn-primary fs-5 mt-3">Submit</button>
</form>
   </div>
 </div>
    </>
  )
}

export default CreateNewUser
