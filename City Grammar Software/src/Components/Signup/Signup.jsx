import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import citygrammar from '../../assets/citygrammar.png'
import citygrammarsmallframe from '../../assets/citygrammarsmallframe.png'
import googlelogo from '../../assets/googlelogo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import {auth} from '../../Config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'
import './Signup.css'
import { GoogleAuthProvider } from 'firebase/auth'

const Signup = () => {
  
  const location = useLocation() 
  const navigate = useNavigate()
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let [passwordType,setPasswordType] = useState('password')
  let [eyeImage,setEyeImage] = useState('')
  let [togglePassDivStyling,setTogglePassDivStyling] = useState(false)

      
  const checkLocation = () => {
    if(location.pathname === "/" && localStorage.getItem('userLoggedIn') == "true"){
      navigate('/dashboard')
    }
  }
  
   useEffect(()=>{
    checkLocation()
   },[])



  const handlepassdivstyling = () => {
    setTogglePassDivStyling(!togglePassDivStyling) 
  }

  const handlePasswordType = () =>{
    console.log('password')
    if(passwordType === 'password'){
      setPasswordType('text')
      setEyeImage('open')
    }else{
      setPasswordType('password')
      setEyeImage('closed')
    }
  }
  const handleSignup = (e) =>{
    e.preventDefault()
  createUserWithEmailAndPassword(auth, email, password)
   .then((res) => {
      alert('Account Created Sucessfully')
      navigate('/login')
   })
   .catch((error) => {
     if(error.toString().includes('email-already-in-use')){
        alert(error.toString().slice(37,57))
     }if(error.toString().includes('Password should be at least 6 characters')){
      alert(error.toString().slice(25,65))
   }
   
     
   });
 }

 const handleSignupGoogle = () => {
  let provider = new GoogleAuthProvider();

   signInWithPopup(auth, provider)
   .then((result) => {
      console.log("result", result);
      alert('Account Created with Google')
      setTimeout(() => {
        navigate('/login')
      }, 2500);
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <>
     <div className=''>
       <div className='row w-100'>
        <div className='col-md-6'>
         {/* <div className='text-center'>
         <span className='fs-4'>City Grammar</span>
         </div> */}
         <img src={citygrammarsmallframe} className='w-100  d-sm-block d-md-none d-xs-block d-xl-none ' style={{width: "600px"}} alt="" />
         <img src={citygrammar} className='d-md-block d-none d-xl-block' style={{width: "125%"}} alt="" />
        </div>
        <div className='col-md-6'>
           <div className='w-75 mt-3 mt-md-5' style={{marginLeft: "15%"}} >
           <form onSubmit={handleSignup}>
  <div className="mb-3">
    <div className='text-center'><h1>Sign Up</h1></div>

    <div className='fs-4 mb-2'>
    <label htmlFor="fullname" className="form-label">Full Name:</label>
    <input required  type="text" className="form-control border-black" id="fullname"/>
    </div>

    <div className='fs-4 mb-2'>
    <label htmlFor="email" className="form-label">Email:</label>
    <input required onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control border-black" id="email"/>
    </div>

    <div className='fs-4 mb-3'>
    <label htmlFor="password"  className="form-label">Password:</label>
    <div className={`${togglePassDivStyling === false? 'border border-black' : ''} rounded-2`} style={{border : togglePassDivStyling? "solid 1px #3269ba": "",boxShadow: togglePassDivStyling? "0.5px 0.5px 6px 1px #5289d9": ""}}>
    <input required onBlur={handlepassdivstyling} onFocus={handlepassdivstyling}  onChange={(e)=> setPassword(e.target.value)} type={passwordType}  className="border-0 rounded-3 d-inline-block   pass_inp" id="password"/>
    {
      eyeImage == "open"? 
      <IoEyeSharp className='ms-2 d-inline-block' onClick={handlePasswordType}/>:
       <IoEyeOffSharp className='ms-2 d-inline-block' onClick={handlePasswordType}/>
        }
    </div>
    </div>
  </div>

 
  <div className='mt-4'>
  <button type="submit" className="btn fs-5 ps-4 pe-4 w-100 btn-primary border-0 border rounded-5" style={{backgroundColor: "#008000"}}>Sign up</button> 
  <div className='text-center fs-5 m-2'>Or</div>
  <button type='button' onClick={handleSignupGoogle} className="btn fs-5 ps-4 pe-4 w-100 border-1  border-black rounded-5  border cursorpointeronhover"><img style={{width: "40px"}} src={googlelogo}></img>Sign up with Google</button> 
  </div>

  <div className='text-center mt-3 cursorpointeronhover'>
    <span className='fs-5'>Already have an account?<span className='text-primary' onClick={()=>navigate('/login')}> Login</span></span>
  </div>
</form>
           </div>
        </div>
       </div>
      
    </div> 
    </>
  )
}

export default Signup
