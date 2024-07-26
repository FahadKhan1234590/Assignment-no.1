import { Grid } from '@mui/material'
import React from 'react'
import image from '../Sec1/sec1.png'
const Sec1 = () => {
  return (
    <Grid container >
      <Grid item xs={12} sm={12} md={6}  lg={6}>
          <div className='ms-5 mt-5'>
            <div className='fs-1 fw-bold mb-3'  style={{color :"#006838"}}>
              Introduction To <br/> Jawan Pakistan
            </div>
            

           <span  style={{color: "gray"}}>
           The foundation of every state is the education and skills set of its youth. Jawan Pakistan is<br/>
           such an organization of Pakistan who is not only working on youth education but also <br/>
           enhancing skills set in youth either Free of cost or in a very low cost. This initiative,<br/>
           initially developed by a single person and with almost no seed capital, promotes<br/>
           entrepreneurship and innovation and Sustainable Development Goal, which promotes<br/>
           inclusive and sustainable economic growth.
           </span>
          </div>
       </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="d-flex justify-content-center mt-5">
        <img src={image} className='w-75'/>
        </div>
      </Grid>
      
    </Grid>
  )
}

export default Sec1
