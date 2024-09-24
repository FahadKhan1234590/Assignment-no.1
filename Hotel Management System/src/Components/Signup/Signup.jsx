import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../../Config/firebase'

const Signup = () => {
  let [typePassword,setTypePassword] = useState(true)
  let [fullName,setFullName] = useState('')
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')

  let navigate = useNavigate()
  
  const changeType = () =>{
    setTypePassword(!typePassword)
  }

  const handleSignup =  (e) =>{
     e.preventDefault()
     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert('Account Created Sucessfully')
    localStorage.setItem('userFullName',fullName)
    localStorage.setItem('userEmail',email)

    navigate('/')
  })
  .catch((error) => {
    if(error.toString().includes('email-already-in-use')){
      alert(error.toString().slice(37,57))
   }if(error.toString().includes('Password should be at least 6 characters')){
    alert(error.toString().slice(25,65))
 }
  });

  }

  
  return (
<div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div className="lg:h-[400px] md-none md:block hidden md:h-[300px] max-md:mt-8">
            <img src="https://readymadeui.com/login-image.webp" className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
          </div>
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSignup}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign up</h3>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Full Name</label>
                <div className="relative flex items-center">
                  <input name="full_name" type="text" onChange={(e)=>setFullName(e.target.value)} required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter your Full Name" />
                </div>
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
                  <input name="password" type={typePassword? "password" : "text"} onChange={(e)=>setPassword(e.target.value)} required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter password" />
                  <svg onClick={changeType} xmlns="http://www.w3.org/2000/svg" fill="#000"  className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                
              </div>

              <div className="!mt-8">
                <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign up
                </button>
              </div>

              <p className="text-sm !mt-8 text-center text-gray-800">Already have an account? <Link to="/" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup
