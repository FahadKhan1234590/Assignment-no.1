import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { sweetAlert } from '../sweetAlert.js'

export default function Signup() {
  const [fullname,setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Signup submitted', { email, password})
    await axios.post('http://localhost:2009/signup',{
      fullName: fullname,
      email: email,
      password: password
    })

  let userDataAdded = null

  await axios.post('http://localhost:2009/signup').then((response)=>{
    console.log(response.data);
    
     
        sweetAlert('Account Created Successfully','success')
    
        setTimeout(()=>{
          navigate('/login')
        },1000)
    
    
    
  }).catch((err)=>{
    console.log('Error',err);
    
  })

 

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className='mb-14'>
          <h2 className="mt-[-100px]  text-center text-[40px] font-extrabold text-gray-900">Sign up </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>

          <div className="rounded-md shadow-sm  -space-y-px">
          <div>
              <label htmlFor="full_name" className="sr-only">
                Full Name
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                className="appearance-none text-2xl mb-2  rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                placeholder="Enter Your Full Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none mb-2 text-2xl rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="appearance-none text-2xl rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

        

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>

          <div className="flex items-center justify-center">
          
          <div className="text-lg">
            <a href="#" className="font-medium">
              Already have an account? <span className='text-blue-600' onClick={()=>navigate('/login')}>Login</span>
            </a>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}