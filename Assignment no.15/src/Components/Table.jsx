import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const Table = ({data}) => {
  return (
    <>
      <table className="table fs-4 ">
  <thead>
    <tr>
      <th scope="col" colSpan={2}>Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
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
