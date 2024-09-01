import React, { useState } from 'react'
import ExamCard from '../../../Components/ExamCard'

const ExamSchedule = () => {
  let [classname,selectClass] = useState('') 
  let [examschedule,setExamSchedule] = useState([
    {class : "1",subject : "Mathematics",date: "02-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "1",subject : "English",date: "03-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "1",subject : "Urdu",date: "04-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "1",subject : "Computer",date: "05-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },

    {class : "2",subject : "Mathematics",date: "02-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "2",subject : "English",date: "03-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "2",subject : "Urdu",date: "04-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "2",subject : "Computer",date: "05-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },

    {class : "3",subject : "Mathematics",date: "02-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "3",subject : "English",date: "03-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "3",subject : "Urdu",date: "04-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "3",subject : "Computer",date: "05-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },

    {class : "4",subject : "Mathematics",date: "02-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "4",subject : "English",date: "03-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "4",subject : "Urdu",date: "04-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "4",subject : "Computer",date: "05-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },

    {class : "5",subject : "Mathematics",date: "02-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "5",subject : "English",date: "03-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "5",subject : "Urdu",date: "04-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },
    {class : "5",subject : "Computer",date: "05-04-2023",starttime: "8:00 AM",endtime:  "11:30 AM" },

    

  ])
  const [filteredData,setFilteredData] = useState([])
  console.log(classname)

  const filterData = (className) => {
    const filteredData = examschedule.filter((e) => {
      return e.class === className;
    });
    setFilteredData(filteredData);
  };

  const doAll = (e) => {
    const newClassName = e.target.value;
    selectClass(newClassName);
    filterData(newClassName); 
  }
  
  
  return (
    <>
          <main id="main" className="container mt-4 mb-4">
        <div className="row stdregis">
          <div className="col-lg-2"></div>
          <div className="col-xs-12 col-lg-offset-3 col-lg-8">
            <div className="m-b-md text-center">
              <h1 id="title" className=''>Exam Schedule</h1>

              <div className='pb-4 d-flex justify-content-end  me-4'>
              <select name='class' onChange={(e)=>doAll(e)}  className='ps-2 pe-2 fs-5'>
                <option value="">All Classes</option>
                <option value="1">Class 1</option>
                <option value="2" >Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                

              </select>
         </div>
    
            </div>

             {
              filteredData != ""?
              filteredData.map((e,i)=>{
                return <ExamCard class={e.class} subject={e.subject} date={e.date} starttime={e.starttime} endtime={e.endtime}/>
              }):
              examschedule.map((e,i)=>{
                return <ExamCard class={e.class} subject={e.subject}date={e.date} starttime={e.starttime} endtime={e.endtime}/>
              })
             }
          </div>
       
        </div>
      </main>
    </>
  )
}

export default ExamSchedule
