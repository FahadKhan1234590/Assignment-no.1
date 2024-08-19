import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdDelete, MdEdit } from 'react-icons/md'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Table = ({data}) => {
  let navigate = useNavigate()
  
  const handleDelete = (id) =>{
     axios.delete('http://localhost:2000/users/' + id)
     .then((res)=> alert('User Deleted'))
     .catch((err)=>alert('Error Deleting User'))
  }
  return (
    <>
      <table className="table fs-4 ">
  <thead>
    <tr>
      <th scope="col" colSpan={2}>Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
 
    {
        data.map((e,i)=>{
            return(
                <tr key={i}>
                  <th scope="row">{e.id}</th>
                 <td colSpan="2">{e.name}</td>
                <td >{e.email}</td>
                <td>{e.phone}</td>
                <td>
                <MdDelete onClick={()=>handleDelete(e.id)} className='me-3 text-danger fs-3'/>
                <MdEdit onClick={()=> navigate(`/edituser/${e.id}`)} className='text-primary fs-3'/>
                </td>
                </tr>
            )
        })
    }
  </tbody>
</table>
    </>
  )
}

export default Table
