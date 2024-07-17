import {React, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaChevronCircleRight } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const RegisForm = () => {
  let [fName,setFName] = useState("")
  let [lName,setlName] = useState("")
  let [workEmail,setWorkEmail] = useState("")
  let [password,setPassword] = useState("")
  let [ognzName,setOgnzName] = useState("")
  let [ognzSize,setOgnzSize] = useState("")
  let [industry,setIndustry] = useState("")
  let [stdFormDataArr,setStdFormDataArr] = useState([])
  

  const putStdData = (e) => {
    e.preventDefault();

   const  formDataCopy = {
      studentId: stdFormDataArr.length + 1,
      firstName: fName,
      lastName: lName,
      email: workEmail,
      password: password,
      Ognzname: ognzName,
      OgnzSize: ognzSize,
      Industry: industry,
    };

    setStdFormDataArr(prevState => [...prevState, formDataCopy]);
    
    setFName('');
    setlName('');
    setWorkEmail('');
    setPassword('');
    setOgnzName('');
    setOgnzSize('');
    setIndustry('');
  };

 

  
  return (
    <div className='d-flex flex-column align-items-center'>
        
      <div className='mb-4'>
        <p className='fs-2'>Try <span className='fw-bold'>Sign</span> free for 14 days</p>
      </div>

      <div>
        <div className='mb-3 text-center'>
            <p className='fs-5'>Already have a Formstack account? <span className='text-primary'>Start your trial in app <FaChevronCircleRight />    </span></p>
        </div>
       
        <div className='mt-4 pt-3 border p-4 border-3 mb-5 '>
            <form onSubmit={putStdData}>
                <div className='fs-5'>
                   <div className='d-md-flex d-lg-flex mb-3  gap-3'>
                        <div>
                        <span>FIRST NAME</span> <br/>
                        <div>
                          <input type="text" required value={fName} onChange={(e)=>{setFName(e.target.value)}} placeholder='John' className='pe-5 ps-3 mt-2 p-1 border border-2 rounded-1 border-gray'  />
                          </div>
                        </div>


                        <div>
                        <span>LAST NAME</span> <br/>
                        <div><input type="text" required  value={lName} onChange={(e)=>{setlName(e.target.value)}} placeholder='Doe' className='pe-5 ps-3 mt-2 p-1 border border-2 rounded-1 border-gray' /></div>
                        </div>

                   </div>

                   <div className='mb-3'>
                        <span>WORK EMAIL</span> <br/>
                        <div><input type="email"  value={workEmail} onChange={(e)=>{setWorkEmail(e.target.value)}}  placeholder='John@doe.com' className='pe-5 ps-3 mt-2 p-1 border border-2 rounded-1 border-gray w-100' required /></div>
                  </div>

                  <div className='mb-3'>
                        <span>PASSWORD</span> <br/>
                        <div>
                          <input type="password"  value={password} placeholder='Password'  onChange={(e)=>{setPassword(e.target.value)}} className='pe-5 ps-3 mt-2 p-1 border border-2 border-end-0 rounded-1 border-gray' style={{width: '90%'}} />
                          <span><FaRegEye style={{width: "10%"}} className='border  fs-1 mb-2  p-1  border-2 border-start-0  rounded-1'/></span>
                        </div>
                  </div>

                  <div className='mb-3'>
                        <span>ORGANIZATION NAME</span> <br/>
                        <div>
                          <input type="text"  placeholder='ABC Organization' onChange={(e)=>{setOgnzName(e.target.value)}} className='pe-5 ps-3 mt-2 p-1 border border-2  rounded-1 border-gray w-100' />
                        </div>
                  </div>

                  <div className='mb-3'>
                        <span style={{fontSize : "85%"}}>ORGANIZATION SIZE</span> <br/>
                      
                        <div>
                            <select required  onChange={(e)=>{setOgnzSize(e.target.value)}} className='ps-3 p-2  border border-2  mt-2  rounded-1 border-gray w-100'>
                              <option>--Select--</option>
                              <option value='100'>100</option>
                              <option value='200'>200</option>
                              <option value='300'>300</option>


                            </select>
                        </div>
                  </div>

                  <div className='mb-3'>
                        <span style={{fontSize : "85%"}}>INDUSTRY</span> <br/>
                      
                        <div>
                            <select  onChange={(e)=>{setIndustry(e.target.value)}} className='ps-3 p-2  border border-2  mt-2  rounded-1 border-gray w-100'>
                              <option>--Select--</option>
                              <option value="Web & Design">Web & Design</option>
                              <option value="Artifical Intelligence">Artifical Intelligence</option>
                              <option value="Graphic Design">Graphic Design</option>

                            </select>
                        </div>
                  </div>

                <div className='mb-3'>
                  <div className='mb-3'  style={{fontSize : "75%"}}>
                    <span>Formstack has updated our Terms of Service effective January 4, 2023.<br/>
                          We encourage you to read the document in its entirety.
                    </span>
                  </div>

                  <div>
                    <span className='me-1'>
                      <input type="checkbox" required/>
                    </span>
                    <span style={{fontSize : "90%"}}>I understand and agree to the <a className='text-primary'>Formstack Privacy Policy</a>,
                     <a className='text-primary'>Software <br/> <span className='ms-3'>Services Agreement</span></a>,
                     and <a className="text-primary">Acceptable Use Policy</a>. 
                     </span>
                  </div>
                </div>
                  

                  <div>
                    <button style={{backgroundColor : "#67C1F4"}}  className='text-white fw-bold btn w-100 rounded-1 fs-5 mt-3'>Start free trial</button>
                  </div>
                </div>
            </form>
        </div>
        </div>

    <div>
        <h2>Submitted Data:</h2>
          <ul>
            {stdFormDataArr.map((data, index) => (
             <div className='fs-5'>
               <li key={index}>
                Student ID: {data.studentId} <br/>
                 First Name: {data.firstName}<br/>
                 Last Name: {data.lastName}<br/>
                Email: {data.email} <br/>
                  Password: {data.password} <br/>
                   Organization Name: {data.Ognzname} <br/>
                    Organization Size: {data.OgnzSize}<br/>
                   Industry: {data.Industry}
              </li>
              <br/>
             </div>
            
            ))}
          </ul>
    </div>
    </div>
  )
}

export default RegisForm
