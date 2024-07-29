import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import session1 from '../../assets/session_1.png'
import session2 from '../../assets/session_2.png'

const Sec5 = () => {
  return (
    <>
       <div className='pt-3 mb-4'>
        <div className="text-center mt-5 pt-5 mb-5 pb-5">
         <div className='fw-bold pt-3   display-5' style={{color : "#1F632B"}}>
         Glimpses Of Sessions Conducted By Jawan Pakistan
         </div>

       
      <div className='mt-5 pt-5'>
      <div className='row w-100 '>
            <div className="col-md-6 mb-4">
               <span className='ms-md-5'>
               <img src={session1} alt="" style={{width: "96%"}} />
               </span>
            </div>

            <div className="col-md-6">
               <span className=''>
               <img src={session2} alt="" style={{width: "96%"}} />
               </span>
            </div>
         </div>
      </div>
       
     </div>
     </div>

    </>
  )
}

export default Sec5
