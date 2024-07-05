import React from 'react'
import GreenDesign from '../assets/greendesign.png'
import p_c_card1 from '../assets/p_c_card1.png'
import p_c_card2 from '../assets/p_c_card2.png'
import p_c_card3 from '../assets/p_c_card3.png'
import p_c_card4 from '../assets/p_c_card4.png'
import p_c_icon1 from '../assets/p_c_icon1.svg'
import styles from './PopularCourses.module.css'

const Popular_Courses_Card = (props) =>{
    return(
      <>
      <div>
       <div className={`${styles.p_c_card}`}>
          <div>
            <img src={props.imgSrc} className='w-100' alt="" />
          </div>


          <div className='d-flex gap-4 justify-content-start ms-4 mt-2'>
            <span style={{color : "#D2093C"}}><span className='fs-5'>&#8226; </span> Ux Design</span>
            <span style={{color:  "#00306E"}}><span className='fs-5'>&#8226; </span>  {props.lessons} Lessons</span>
          </div>

          <div className='mt-2  fw-bold' style={{color:  "#00306E"}}>
            <div className='d-flex ms-4 flex-row justify-content-start'>
            <h5>{props.textbeforebr}<br/>{props.textafterbr}<br/>{props.textafterafterbr}</h5>
            </div>
          </div>

         <div className='pt-1'>
          <hr />
         </div>

         <div className='d-flex gap-5 pb-3'>
            <span><img style={{width:"17%"}} src={p_c_icon1} className='ms-3 me-1'></img>{props.stdNum} students</span>
            <span style={{color : "#D2093C"}} className='ms-2'><h5 className='fw-bold'>{props.price}</h5></span>
         </div>
         
       </div>
         
      </div>
      </>
    )
}


const S_T_Card = (props) =>{
      return(
        <div>
            <h5 className="fw-bold ">
              Successfully <br/> Trained
            </h5>
          
            <h1 className="display-4 fw-bold ">
              {props.number}
            </h1>

            <p>
              ENROLLED LEARNERS
            </p>
        </div>
      )
}
const PopularCourses = () => {
  return (
    <>
     <div  className={`pt-5 ms-3 pb-5 text-center`}>
        <h1 style={{color: "#00306E"}} className=' mt-5 display-5 fw-bold'>Popular Courses</h1>
        <img src={GreenDesign} className="mb-4"/>

       <div className=' container'>
       <div className='row w-100 '>
          <div className='col-lg-3'>
          <Popular_Courses_Card imgSrc={p_c_card1} lessons="5" textbeforebr='Dave conservatoire is' textafterbr="the Entirely free online" stdNum="56" price="$72.00"/>
          </div>

          <div className='col-lg-3'>
          <Popular_Courses_Card imgSrc={p_c_card2} lessons="4" textbeforebr='Strategy law and' textafterbr="Organization foundation" stdNum="77" price="$68.00"/>
          </div>

          <div className='col-lg-3'>
          <Popular_Courses_Card imgSrc={p_c_card3} lessons="4" textbeforebr='Python for Data Science' textafterbr="& Machine Learning" stdNum="77" price="$68.00"/>
          </div>

          <div className='col-lg-3'>
          <Popular_Courses_Card imgSrc={p_c_card4} lessons="4" textbeforebr='The complete web' textafterbr="develop Ment" textafterafterbr ="bootcamp." stdNum="77" price="$68.00"/>
          </div>


          
        </div>
       </div>

       <div>
       <button style={{color: 'rgb(0, 48, 110)',backgroundColor: "white",border: "solid 1px gray"}} className={`mt-5 pt-2 pb-2 ps-4 pe-4 btn btn-primary  border-1`}>View All Courses  <i class="fa-solid fa-arrow-right"></i></button>
       </div>


     </div>

      <div className="container text-white pt-3" style={{backgroundColor : "#D2093C"}}>
        <div className='mt-5 pb-4'>
            <div className="d-flex text-center justify-content-evenly">
                <S_T_Card number="1478"/>
                <S_T_Card number="1731"/>
                <S_T_Card number="280"/>
                <S_T_Card number="1045"/>
                

            </div>
          
          </div>
        </div> 

        <div className='mt-5 pt-5'>
           
        </div>
      
    </>
  )
}

export default PopularCourses
