import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database} from '../../../Config/firebase';
import UploadFile from '../../../Components/UploadFile/UploadFile';
import { saveAs } from 'file-saver';
import axios from 'axios';


const SyllabusList = () => {
  let navigate = useNavigate()
  const [syllabusData, setSyllabusData] = useState([]);


  
  useEffect(()=>{
    getSyllabusData()
  },[])

  const getSyllabusData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "Syllabus"));
      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setSyllabusData(arr);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <div className="text-center mt-4 mb-4 stdregis">
        <div className='pb-3'>
          <h1>Syllabus List</h1>
         <div className='pb-4 d-flex justify-content-end  me-4'>
         <button className='btn btn-primary btn-success' onClick={()=>navigate('/dashboard/syllabus/add-syllabus')}>Add Syllabus</button>
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
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody>
              
                {
                  syllabusData.map((e,i)=>{
                    return(
                      <tr  key={i}>

                     <td scope="row">{e.id}</td>
                     <td>{e.name}</td>
                    <td>{e.class}</td>
                    <td><a target='_blank' href={e.syllabusUrl} className='btn btn-success'>See Syllabus</a></td>
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

export default SyllabusList
