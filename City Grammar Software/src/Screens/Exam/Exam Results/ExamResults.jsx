import React, { useState } from 'react'

const ExamResults = () => {
    const [examresult,setExamResult] = useState([
        {class: "10",name:"Fahad Khan",rollno: "20",grade:"A+"},
        {class: "8",name:"Ahmed Iqbal",rollno: "12",grade:"B"},
        {class: "9",name:"Muhammad Ali",rollno: "5",grade:"A"},

    ])
  return (
    <>
        <div className="text-center mt-4 mb-4 stdregis">
        <div className='pb-3'>
          <h1>Exam Results</h1>
         
        </div>

        <div className='mt-5 ms-md-5 ps-md-5 fs-5'>
          <div className="table-responsive" style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Class</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">roll no</th>
                  <th scope="col">Grade</th>
                </tr>
              </thead>
              <tbody>
                {
                    examresult.map((e,i)=>{
                        return(
                            <tr>
                  <td scope="col">{e.class}</td>
                  <td scope="col">{e.name}</td>
                  <td scope="col">{e.rollno}</td>
                  <td scope="col">{e.grade}</td>
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

export default ExamResults
