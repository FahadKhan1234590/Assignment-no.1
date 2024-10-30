import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { sweetAlert } from '../sweetAlert.js'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  let navigate = useNavigate()

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post('http://localhost:2009/login', {
            email,
            password
        });
   
        
        // Check the response message and handle accordingly
        if (res.data === 'User exists') {
           sweetAlert('Successfully Logged In','success')
         } else if (res.data === 'User does not exists') {

          sweetAlert('Account Does not exists','question','Your email or password is incorrect')
           
        } else {
            alert('Unknown response from server');
        }
    } catch (err) {
        console.error('Login error:', err);
        alert('An error occurred during login.');
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className='mb-14'>
          <h2 className="mt-[-100px]  text-center text-[40px] font-extrabold text-gray-900">Log In </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>

          <div className="rounded-md shadow-sm  -space-y-px">
      

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

          <div className="flex items-center justify-center">
          
            <div className="text-lg">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>


          <div className="flex items-center justify-center">
          
          <div className="text-lg">
            <a href="#" className="font-medium">
              Don't have an account? <span className='text-blue-600' onClick={()=>navigate('/')}>Signup</span>
            </a>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}