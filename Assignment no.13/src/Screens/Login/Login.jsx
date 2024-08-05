import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Login = () => {
  
  let navigate = useNavigate()
  let [loginInfo,setLoginInfo] = useState({
    loginemail : "",
    loginpass : ""
  })


  const handleSubmit = (e) =>{
      e.preventDefault()
      if(loginInfo.loginemail === localStorage.getItem('email') && loginInfo.loginpass == localStorage.getItem('pass')){
        Swal.fire({
          title: "Succesfully Logged in",
          icon: "success",
          timer : 1000
        })
  
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000);
      }else{
        Swal.fire({
          title: "Incorrect Email or Password",
          icon: "error",
          timer : 600
        })
      }
  }
  return (
    <>
   <div className="mt-4 flex items-center justify-center h-full">
    <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="email">Email</label>
            <input onChange={(e)=>setLoginInfo({...loginInfo,loginemail : e.target.value})} type="email" id="email" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="you@example.com" required/>
        </div>
        
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="password">Password</label>
            <input onChange={(e)=>setLoginInfo({...loginInfo,loginpass : e.target.value})}  type="password" id="password" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required/>
        </div>
        
        <button type="submit" className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Login</button>
    
    
    <div>
    <span>Don't have an account? <Link to="/" style={{color: "blue"}}>Signup</Link></span>
    </div>
    </form>

</div>
    </>
  )
}

export default Login
