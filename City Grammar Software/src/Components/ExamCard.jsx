import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const ExamCard = (props) => {
  return (
    <>
      <div class="card mb-4" style={{boxShadow: "0px 1px 2px black"}}>
  <div class="card-header fs-5 fw-bold">
    Class {props.class} - {props.subject}
  </div>
  <div class="card-body">
    <h5 class="card-title">Date : {props.date}</h5>
    <h5 class="card-text">Start Time: {props.starttime}</h5>
    <h5 class="card-text">End Time: {props.endtime}</h5>
  </div>
</div>
    </>
  )
}

export default ExamCard
