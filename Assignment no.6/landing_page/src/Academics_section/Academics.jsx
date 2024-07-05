import React from 'react'
import Academicspng from "../assets/greendesign.png"
import styles from './Academics.module.css'
import academics1img from '../assets/academics1.png'
import academics2img from '../assets/academics2.png'
import academics3img from '../assets/academics3.png'
import academics4img from '../assets/academics4.png'
import sec2img1 from '../assets/sec2img1.png'
import sec2img2 from '../assets/sec2img2.png'





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
   <>
     <div className='mt-5 pt-5 ms-3 text-center'>
        <h1 style={{color: "#00306E"}} className='display-5 fw-bold'>Academics</h1>
        <img src={Academicspng} alt="" />

        {/* Section 1 start */}
        <div className='row mt-4  mb-5 w-100 align-items-center'>

           <div className={`col d-md-flex justify-content-xl-center`}>
            <Academicsimg bgi={academics1img} text="Let's Talk Science"/>
           </div>
           <div className={`col d-md-flex justify-content-xl-center`}>
           <Academicsimg bgi={academics2img} text="Innovative Courses"/>
           </div>
           <div className={`col d-md-flex justify-content-xl-center mt-md-2`}>
           <Academicsimg bgi={academics3img} text="Cloud Storage"/>
           </div>
           <div className={`col d-md-flex justify-content-xl-center mt-md-2`}>
           <Academicsimg bgi={academics4img} text="Online Education"/>
           </div>
        </div>
        {/* Section 1 end */}
     </div>


   {/* Section 2 start */}
   <div className='row  w-100 pt-4 pb-5 mb-5'>
      <div className='col-xl-6'>
         <img src={sec2img1} alt="sec2img1" className={`  ${styles.sec2img} ms-5`} />
      </div>

      <div className='col-xl-6'>
        <h1 className='mt-5 pt-3 ms-5 fw-bold display-5'><span style={{color: '#00306E'}}>Welcome to</span> <br></br> <span style={{color: "#D2093C"}}>Echooling LMS <br></br> Platform</span></h1>
        <p className=' ms-5 mt-4 fs-5' style={{color: "gray"}}>Education is both the act of teaching knowledge to others <br /> and <br/> the act of receiving knowledge from someone else.</p>
        <p className=' ms-5 mt-4 ' style={{color: "gray"}}>Have questions? <a className='fw-bold' style={{color:"#D2093C"}}>Get Free Guide</a></p>

        <hr className='w-75 ms-5 mt-5'/>

        <div className=' ms-5 '>
          <p className='mt-4' style={{color: "gray"}}>Education also refers to the knowledge received through schooling <br/>instruction <br/>and to the institution of teaching as a whole. The main purpose of<br/>education<br/>is the integral development of a person.</p>


         <div className='mt-4'>
          <button style={{color: 'rgb(0, 48, 110)',backgroundColor: "white",border: "solid 1px gray"}} className={`mt-4 pt-2 pb-2 ps-4 pe-4 btn btn-primary  border-1`}>Read More -{'>'}</button>
          
          <img src={sec2img2} className='ms-5 mt-4'/>
          <span className='d-inline-block ms-3'>
            <p style={{color : "gray"}}>Get Support  &nbsp; <span style={{color: 'rgb(0, 48, 110)'}} className='fw-bold'>support@react.com</span></p>
          
          </span>

         </div>

        </div>
      </div>

   </div>
   {/* Section 2 end */}
   </>
  )
}

export default Academics
