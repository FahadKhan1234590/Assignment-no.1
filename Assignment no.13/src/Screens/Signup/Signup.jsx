import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Signup = () => {
    
    let navigate = useNavigate()
    let [signupInfo,setsignupInfo] = useState(
        {
            fname : "",
            lname : "",
            email : "",
            pass  : ""
        }
    )

    const handleSubmit = (e) =>{
      e.preventDefault()

      localStorage.setItem('first name', signupInfo.fname)
      localStorage.setItem('last name', signupInfo.lname)
      localStorage.setItem('email', signupInfo.email)
      localStorage.setItem('pass', signupInfo.pass)


      Swal.fire({
        title: "Succesfully Signup",
        icon: "success",
        timer : 1000
      })

      setTimeout(() => {
        navigate('/login')
      }, 2000);
    }

    return (
    <>
   <div className="mt-4 flex items-center justify-center h-full">
    <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="first-name">First Name</label>
            <input  value={signupInfo.fname} onChange={(e) => setsignupInfo({...signupInfo, fname: e.target.value })}  type="text" id="first-name" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="last-name">Last Name</label>
            <input  value={signupInfo.lname} onChange={(e) => setsignupInfo({...signupInfo, lname: e.target.value })} type="text" id="last-name" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="email">Email</label>
            <input  value={signupInfo.email} onChange={(e) => setsignupInfo({...signupInfo, email: e.target.value })} type="email" id="email" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="you@example.com" required/>
        </div>
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="password">Password</label>
            <input  value={signupInfo.pass} onChange={(e) => setsignupInfo({...signupInfo, pass: e.target.value })} type="password" id="password" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required/>
        </div>
        
        <button type="submit" className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Sign Up</button>
    
    
    <div>
    <span>Already have an account? <Link to="/login" style={{color: "blue"}}>login</Link></span>
    </div>
    </form>

</div>
    </>
  )
}

export default Signup
