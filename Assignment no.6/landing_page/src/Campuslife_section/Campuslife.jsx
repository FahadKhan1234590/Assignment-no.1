import React from 'react'
import GreenDesign from "../assets/greendesign.png"
import sec3img1 from '../assets/sec3img1.svg'
import sec3img2 from '../assets/sec3img2.svg'
import sec3img3 from '../assets/sec3img3.svg'
import sec3img4 from '../assets/sec3img4.png'

const Sec3details = (props) =>{
   return(
      <div className='row'>
      <div className='col-9 pt-3 ps-4'>
         <img src={props.imgSrc} alt="" />
         <span className='fw-bold ms-3 fs-5' style={{color : "#00306E"}}>{props.text}</span><br/>
         <span className='ms-5 ps-1'>Why I say old chap that is spiffing he legged <br/>
         <span className='ms-5 ps-1'>it in my flat easy peasy.</span>
         </span>
       </div>

       <div className='col  -3'>
         <button className='btn btn-primary ms-5 mt-4 pt-2 pb-2 bg-white fw-bold border-2' style={{borderColor: '#dbdbdb',color: "darkblue",borderRadius: "48%"}}><i class="fa-solid fa-arrow-right"></i></button>
       </div>

       <hr className='mt-4 w-75 ms-4' style={{display:props.hrDisplay}}/>
    </div>
   )
}

const Campuslife = () => {
  return (
    <>
     <div style={{backgroundColor : "#F5F5F5"}} className={`mt-5 pt-5 ms-3 pb-5 text-center`}>
      <div className='pb-5'>
        <h1 style={{color: "#00306E"}} className='display-5 fw-bold'>Campus Life</h1>
        <img src={GreenDesign} className="mb-4"/>

       <div className='d-flex gap-4'>
        
               <div className='w-50 ms-5 text-start'>
                        <div className='bg-white ps-5 pt-5 pb-5'>
                        <div className="pb-3">
                           <Sec3details text="Do More, Stress Less" imgSrc ={sec3img1}/>
                           <Sec3details text="The Business Intelligence" imgSrc ={sec3img2}/>
                           <Sec3details text="System Administration" imgSrc ={sec3img3} hrDisplay="none"/>
                        </div>
                        </div> 
                  </div>
           

           
               <div>
                     <img src={sec3img4} style={{height:"90%"}} alt="" />
                  </div>
           </div>
         <button style={{color: 'rgb(0, 48, 110)',backgroundColor: "white",border: "solid 1px gray"}} className={`mt-4 pt-2 pb-2 ps-4 pe-4 btn btn-primary  border-1`}>More about Campus Life <i class="fa-solid fa-arrow-right"></i></button>
         </div>
     </div>

    </>
  )
}

export default Campuslife
