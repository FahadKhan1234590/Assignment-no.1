import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const params = useParams()
    let [editData,setEditData] = useState({})
    let navigate = useNavigate()
 
    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        axios.get((`http://localhost:2000/users/${params.id}`))
        .then((res)=> setEditData(res.data))
        .catch((err)=> console.log(err))
    }

    const handleSubmit = (e) =>{
         e.preventDefault()
        axios.put(`http://localhost:2000/users/${params.id}`,editData)
        .then((res)=>{
            alert('User Data Edited') 
            navigate('/')
        } )
        .catch((err)=> console.log(err))
    }
  return (
    <>
     <div className='text-center mb-2 bg-dark'>
        <span className='fs-1  text-white'>Edit User</span>
    </div>

 <div className='d-flex justify-content-center mt-4'>
 <div className='rounded-3' style={{width : "90%",border : "solid 1px black"}}>
   <form className='fs-3' style={{margin : 50}} onSubmit={handleSubmit}>
   <div className="mb-3">
    <label  className="form-label">Full Name :</label>
    <input value={editData.name} onChange={(e)=> setEditData({...editData,name:e.target.value})} required type="text" className="form-control"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address :</label>
    <input value={editData.email} onChange={(e)=> setEditData({...editData,email:e.target.value})} required type="email" className="form-control"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Phone Number :</label>
    <input value={editData.phone} onChange={(e)=> setEditData({...editData,phone:e.target.value})} required type="text" className="form-control"/>
  </div>
 
  <button type="submit" className="btn btn-primary fs-5 mt-3">Submit</button>
</form>
   </div>
 </div>
    </>
  )
}

export default EditUser
