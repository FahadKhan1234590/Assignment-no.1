import React from 'react'
import Academicspng from "../assets/academics.png"
import styles from './Academics.module.css'
import academics1img from '../assets/academics1.png'
import academics2img from '../assets/academics2.png'
import academics3img from '../assets/academics3.png'
import academics4img from '../assets/academics4.png'


const Academicsimg = (props) =>{
     return(
        <div className={`${styles.bg}`}style={{backgroundImage: `url('${props.bgi}')`}}>
          <div className={styles.textspan}>
            <h5 className='ms-3 fw-bold'>{props.text}</h5>
            <h6 className='ms-3 pb-2'>Learn More {'->'}</h6>
          </div>
        </div>
     )
}

const Academics = () => {
  return (
     <div className='mt-5 pt-5 text-center'>
        <h1 style={{color: "#00306E"}} className='display-5 fw-bold'>Academics</h1>
        <img src={Academicspng} alt="" />

        <div className='d-flex justify-content-center gap-4 mt-4 mb-5'>
           <Academicsimg bgi={academics1img} text="Let's Talk Science"/>
           <Academicsimg bgi={academics2img} text="Innovative Courses"/>
           <Academicsimg bgi={academics3img} text="Cloud Storage"/>
           <Academicsimg bgi={academics4img} text="Online Education"/>


        </div>
     </div>
  )
}

export default Academics
