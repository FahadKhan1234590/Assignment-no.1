import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import citygrammar from '../../assets/citygrammar.png'
import citygrammarsmallframe from '../../assets/citygrammarsmallframe.png'
import googlelogo from '../../assets/googlelogo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import {auth} from '../../Config/firebase'
import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'
import '../Signup/Signup.css'
import { GoogleAuthProvider } from 'firebase/auth'
import './Login.css'

const Login = () => {
  let location = useLocation()
  let navigate = useNavigate()
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let [passwordType,setPasswordType] = useState('password')
  let [eyeImage,setEyeImage] = useState('')
  let [togglePassDivStyling,setTogglePassDivStyling] = useState(false)

  const checkLocation = () => {
    if(location.pathname === "/login" && localStorage.getItem('userLoggedIn') == "true"){
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

  const handleLogin = (e) =>{
     e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
       alert('Login Sucessfully')
       localStorage.setItem('userLoggedIn','true')
       navigate('/dashboard')

    })
    .catch((error) => {
      alert('Invalid Email or Password')

      console.log(error)
    });
  }

  const handleLoginGoogle = () => {
    let provider = new GoogleAuthProvider();
  
     signInWithPopup(auth, provider)
     .then((result) => {
        alert('Account Logged In with Google')
       localStorage.setItem('userLoggedIn','true')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(`email sent to ${email} `);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
     <div className=''>
       <div className='row w-100'>
        <div className='col-md-6'>
         
         <img src={citygrammarsmallframe} className='w-100  d-sm-block d-md-none d-xs-block d-xl-none ' style={{width: "600px"}} alt="" />
         <img src={citygrammar} className='d-md-block d-none d-xl-block' style={{width: "125%"}} alt="" />
        </div>
        <div className='col-md-6'>
           <div className='w-75 mt-3 mt-md-5' style={{marginLeft: "15%"}} >
           <form onSubmit={handleLogin}>
  <div className="mb-3">
    <div className='text-center'><h1>Log in</h1></div>

    <div className='fs-4 mb-2'>
    <label htmlFor="email" className="form-label">Email:</label>
    <input onChange={(e)=>setEmail(e.target.value)} required type="email" className="form-control border-black" id="email"/>
    </div>

    <div className='fs-4 mb-3'>
    <div className={`${togglePassDivStyling === false? 'border border-black' : ''} rounded-2`} style={{border : togglePassDivStyling? "solid 1px #3269ba": "",boxShadow: togglePassDivStyling? "0.5px 0.5px 6px 1px #5289d9": ""}}>
    <input required onBlur={handlepassdivstyling} onFocus={handlepassdivstyling}  onChange={(e)=> setPassword(e.target.value)} type={passwordType}  className="border-0 rounded-3 d-inline-block   pass_inp" id="password"/>
    {
      eyeImage == "open"? 
      <IoEyeSharp className='ms-2 d-inline-block' onClick={handlePasswordType}/>:
       <IoEyeOffSharp className='ms-2 d-inline-block' onClick={handlePasswordType}/>
        }
    </div>
    </div>

    <div className='fs-4  text-center'>
      <span onClick={handleForgotPassword} className='fs-5' style={{color : "#055405"}}>Forgot Password?</span>
    </div>
  </div>

 
  <div>
  <button type="submit" className="btn fs-5 ps-4 pe-4 w-100 btn-primary border-0 border rounded-5" style={{backgroundColor: "#008000"}}>Log in</button> 
  <div className='text-center fs-5 m-2'>Or</div>
  <button type='button' onClick={handleLoginGoogle}  className="btn fs-5 ps-4 pe-4 w-100 border-1 border-black rounded-5  border cursorpointeronhover"><img style={{width: "40px"}} src={googlelogo}></img>Log in with Google</button> 
  </div>

  <div className='text-center mt-3'>
    <span className='fs-5'>Don't have an account?<span className='text-primary cursorpointeronhover' onClick={()=>navigate('/')}> Signup</span></span>
  </div>
</form>
           </div>
        </div>
       </div>
      
    </div> 
    </>
  )
}

export default Login
