import { Grid } from '@mui/material'
import React from 'react'
import image from '../../assets/2.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
const Sec2 = () => {
  return (
    <Grid container className="mb-5 pb-5" style={{boxShadow: "1px 5px 13px #a8a6a2"}} sx={{textAlign : {
      sm : "center",
      xs : "center",
    }}} >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="d-flex justify-content-center " style={{marginTop : "260px"}}>
        <img src={image} className='w-75' alt=""/>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className='me-5 ' style={{marginTop : "200px"}}>
            <div className='fs-1 fw-bold mb-3'  style={{color :"#006838"}}>
            Mission And Vision <br /> Behind Jawan Pakistan
            </div>
            

           <span  style={{color: "gray"}}>
           Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.
           <br />
           <br />
           Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.
           </span>
          </div>
       </Grid>
    </Grid>
  )
}

export default Sec2
