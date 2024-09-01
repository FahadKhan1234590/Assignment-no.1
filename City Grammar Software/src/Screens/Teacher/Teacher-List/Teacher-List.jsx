import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database } from '../../../Config/firebase';

const TeacherList = () => {
  let navigate = useNavigate()
  const [teacherData, setTeachersData] = useState([]);

  useEffect(()=>{
    getTeachersData()
  },[])

  const getTeachersData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Teachers"));

      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setTeachersData(arr);
      console.log(teacherData)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-center mt-4 mb-4 stdregis">
        <div className='pb-3'>
          <h1>Teachers List</h1>
         <div className='pb-4 d-flex justify-content-end  me-4'>
         <button className='btn btn-primary btn-success' onClick={()=>navigate('/dashboard/teachers/teacher-registration')}>Add Teacher</button>
         </div>
        </div>

        <div className='mt-5 ms-md-5 ps-md-5 fs-5'>
          {/* Add a wrapper around the table with overflow-x set to auto */}
          <div className="table-responsive" style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Class</th>

                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
              
                {
                  teacherData.map((e,i)=>{
                    return(
                      <tr  key={i}>
                     <td scope="row">{e.id}</td>
                     <td>{e.fullname}</td>
                    <td>{e.gender}</td>
                    <td>{e.class}</td>

                    <td>{e.email}</td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherList
