import React from 'react'
import logo from '../../assets/logo.png'
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <>
      <div className='mt-5 pt-4'>
        <div style={{borderTop: "solid 1px #c2bcbc"}}>
            <div className='mb-5 pb-3'>
                <div className='row w-100'>
                    <div className='col-md-4'>
                       <div className='ms-md-5 mt-5 pt-3'>
                       <img src={logo} style={{width: "68%"}} />
                       </div>
                    </div>

                    <div className='col-md-4'>
                       <div className='ms-5 mt-3'>
                         <div className='fw-bold' style={{color :"#085556"}}>COMPANY</div>
                         <div className='mt-2' style={{color :"#2D8754"}}>
                            <span>Home</span><br/>
                            <span>About us</span><br/>
                            <span>Trainings</span><br/>
                            <span>Contact us</span><br/>

                         </div>
                       </div>
                    </div>

                    <div className='col-md-4'>
                       <div className='ms-5 mt-4 ps-md-5'>
                         <div className='fw-bold' style={{color :"#085556"}}>CONTACT DETAILS</div>
                         <div className='mt-2' style={{color :"#2D8754"}}>
                            <span>Muhammad Ali Mughal</span><br/>
                            <span>+923005292675</span><br/>
                            <span>jawantechpk@gmail.com</span><br/>
                         </div>
                       </div>
                    </div>
                </div>
            </div>

            <div className='pb-3 pt-3'style={{backgroundColor : "rgba(240, 255, 244, 1)"}}>
                <div>
                    <div className='row w-100'>
                         <div className='col-md-11'>
                              <div className='ms-5' style={{color : "gray"}}>
                              © 2022 JawanPakistan  
                             </div>  
                         </div>


                         <div className='col-md-1'>
                            <Box sx={{marginLeft : {
                                xs : '14%',
                                sm : '0%',
                                md : '0%',
                                lg : '0%'
                                
                                }}}>
                            <div className='fs-5'>
                                <span className='me-2'>
                             <FaFacebookF />
                                </span>

                                <span className='me-2'>
                                <FaInstagram />
                                </span>
                                
                                <span className='me-2'>
                                <FaLinkedinIn />
                                </span>
                            </div>
                            </Box>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
