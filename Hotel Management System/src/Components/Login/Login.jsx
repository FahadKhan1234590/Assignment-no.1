import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import googlelogo from '../../assets/googlelogo.png'
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from '../../Config/firebase'
import Swal from 'sweetalert2';
const Login = () => {
  let location =  useLocation()
  let [typePassword,setTypePassword] = useState(true)
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let navigate = useNavigate()
  let [roleInput,setRoleInput] = useState('')

  const showSweetAlert = () => {
    if (localStorage.getItem('Role') === "") {
      Swal.fire({
        title: 'Select Your Role',
        html: `
          <select id="dropdown" class="swal2-input">
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>
        `,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonText: 'Submit My Role',
        preConfirm: () => {
          const dropdownValue = document.getElementById('dropdown').value;
          if (!dropdownValue) {
            Swal.showValidationMessage('Input is Required');
            return false;
          }
          return dropdownValue; // return selected value
        }
      })
      .then((result) => {
        if (result.isConfirmed) {
          const selectedRole = result.value; // Get the selected role from preConfirm
          localStorage.setItem('Role', selectedRole);
          alert('Login Successfully');
          localStorage.setItem('userLoggedIn', 'true');
          setTimeout(() => {
            navigate('/dashboard');
          }, 1000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          showSweetAlert(); // Show alert again if canceled
        }
      });
    }
  };
   
  

  const handleDashboardRoute=  () =>{
    if((location.pathname == "/" || location.pathname == "/signup") && localStorage.getItem('userLoggedIn') == "true"){
      navigate('/dashboard')
    }
  }

  useEffect(()=>{
     handleDashboardRoute()
  },[])

  const changeType = () =>{
    setTypePassword(!typePassword)

  }

  const handleLogin = (e) =>{
     e.preventDefault()

     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    showSweetAlert()
    localStorage.setItem('userEmail',email)
    })
  .catch((error) => {
   alert('invalid email or password')
  });
  }

  const handleLoginGoogle = () =>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  .then((result) => {
    localStorage.setItem('userEmail',email)
    showSweetAlert()
   
  }).catch((error) => {
    console.log(error)
  });
  }
  
  const handleForgotPassword = () =>{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert(`email sent to ${email}`)
        }).catch((err)=>{
          console.log(err)
          alert('please enter your email first')
        })
  }
  return (
<div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div className="lg:h-[400px] md-none md:block hidden md:h-[300px] max-md:mt-8">
            <img src="https://readymadeui.com/login-image.webp" className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
          </div>
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Log in</h3>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input name="email" type="email" onChange={(e)=>setEmail(e.target.value)} required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter your Email" />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input name="password" onChange={(e)=>setPassword(e.target.value)} type={typePassword? "password" : "text"}  required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter password" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#000" onClick={changeType}   className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                

                <div className="text-sm">
                  <span onClick={handleForgotPassword} className="text-blue-600 hover:cursor-pointer font-semibold">
                    Forgot your password?
                  </span>
                </div>
              </div>

              <div className="!mt-8">
                <button type="submit"  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Log in
                </button>
                <div className='text-center my-2'>
                  <span>or</span>
                  </div>
                <button type="button" onClick={handleLoginGoogle} className="w-full shadow-xl py-1 px-4 text-sm tracking-wide text-black border-black border rounded-3xl   focus:outline-none">
                  <img src={googlelogo} className='w-10 inline' alt="" />
                  Log in with Google
                </button>

              </div>

            

              <p className="text-sm !mt-8 text-center text-gray-800">Don't have an account? <Link to='/signup' className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login
