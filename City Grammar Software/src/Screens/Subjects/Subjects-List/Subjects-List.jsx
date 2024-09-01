import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database} from '../../../Config/firebase';
import UploadFile from '../../../Components/UploadFile/UploadFile';


const SubjectsList = () => {
  let navigate = useNavigate()
  const [subjectData, setSubjectData] = useState([]);

  
  useEffect(()=>{
    getSubjectsData()
  },[])

  const getSubjectsData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Subjects"));

      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setSubjectData(arr);
      console.log(subjectData)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-center mt-4 mb-4 stdregis">
        <div className='pb-3'>
          <h1>Subjects List</h1>
         <div className='pb-4 d-flex justify-content-end  me-4'>
         <button className='btn btn-primary btn-success' onClick={()=>navigate('/dashboard/subjects/add-subjects')}>Add Subject</button>
         </div>
        </div>

        <div className='mt-5 ms-md-5 ps-md-5 fs-5'>
          <div className="table-responsive" style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Subject Name</th>
                  <th scope="col">Class</th>
                  <th scope="col">Group</th>
                </tr>
              </thead>
              <tbody>
              
                {
                  subjectData.map((e,i)=>{
                    return(
                      <tr  key={i}>

                     <td scope="row">{e.id}</td>
                     <td>{e.name}</td>
                    <td>{e.class}</td>
                    <td>{e.group}</td>

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

export default SubjectsList
