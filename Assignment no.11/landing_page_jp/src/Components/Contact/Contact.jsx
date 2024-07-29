import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'

const Contact = () => {
  return (
    <>
      <div className='container container-fluid mb-5'>
        <div className='d-flex justify-content-center'>
           <div className='pt-4  ps-4 border rounded-1 pb-4' style={{border:"solid 1px black",width: "630px",boxShadow: "0px 10px 10px 0.5px #d1cfcf"}}>
            <div>
               <h4 className='fw-bold'>Contact</h4>
            </div>

            <div className='pt-2'>
              <form>
                <div className='mb-4'>
                  <div style={{color:"gray",marginTop: "-2px"}}>
                    Name  <span className='text-danger'>*</span>
                  </div>

                  <div>
                    <input type="text" className='border rounded-1 p-2 ps-3' style={{width:"95%",border:"solid 1px #969696"}}  />
                  </div>
                </div>

                <div className='mb-4'>
                  <div style={{color:"gray",marginTop: "-2px"}}>
                    Email  <span className='text-danger'>*</span>
                  </div>

                  <div>
                    <input type="email" placeholder='abc@gmail.com' className='border rounded-1 p-2 ps-3' style={{width:"95%",border:"solid 1px #969696"}}  />
                  </div>
                </div>

                <div className='mb-4'>
                  <div style={{color:"gray",marginTop: "-2px"}}>
                    Phone Number <span className='text-danger'>*</span>
                  </div>

                  <div>
                    <input type="text" placeholder='03001234567' className='border rounded-1 p-2 ps-3' style={{width:"95%",border:"solid 1px #969696"}}  />
                  </div>
                </div>

                <div className='mb-4'>
                  <div  style={{color:"gray",marginTop: "-2px"}}>
                    Message <span className='text-danger'>*</span>
                  </div>

                  <div className='mt-1'>
                  <textarea rows="5" style={{width:"95%",resize : "none",border:"solid 1px #d4d0cf"}}>
                  </textarea>
                  </div>
                </div>

                <input type="submit" value="Submit" className='fs-5 border-0 rounded-1 text-white p-1' style={{width: "95.2%",backgroundColor :"#006838"}} />
              </form>
            </div>

            
           </div>
        </div>
      </div>
    </>
  )
}

export default Contact
