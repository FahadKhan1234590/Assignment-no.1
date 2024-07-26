import { Box } from '@mui/material'
import React from 'react'
import img from "./mug.jpg"
import apos from "./apostrophe.png"


const Sec3 = () => {
  return (
    <Box className='pt-5'  style={{paddingBottom : "100px"}}>
      <div className='d-flex justify-content-center mb-4'>
        <div style={{width : "200px"}} className='d-flex flex-column align-items-center'>
        <img className='rounded-circle w-100 mb-2'  src={img} alt=""  />
        <hr style={{border : "solid 1.2px #305db8",opacity:"1"}} className='w-25'/>
        </div>
      </div>

      <div className='text-center '>
          <span className='fs-1 fw-bold mb-1' style={{color : "#1f632b"}}>
            MUHAMMAD ALI MUGHAL
          </span>

            <br/>
          <span style={{color : "gray"}} className='d-inline-block mb-3'>
          Founder of Jawan Pakistan
          </span>

            <br/>
          <span className='d-inline-block mb-4'>
            <img src={apos} alt="" />
          </span>
          
          <br/>
          <span style={{fontSize : "17.5px",color : "gray"}}>
          We aim to be most efficient provider of business process outsourcing services<br/>
          by setting the industry standards for cost and quality of services. Our long<br/>
          term success will be driven by our relentless focus on recruiting and<br/>
          developing the most talented pool of human capital in our industry.
          </span>
        </div>
    </Box>
  )
}

export default Sec3
