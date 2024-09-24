import { getAuth, onAuthStateChanged, updatePassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdEdit } from 'react-icons/md';

const EditProfile = () => {
    const [email, setEmail] = useState(null);
    let localStorageEmail = localStorage.getItem('userEmail')
    let localStorageUserName = localStorage.getItem('userFullName')
    let [fullName,setFullName] = useState(localStorageUserName)
    const auth = getAuth();
    const user = auth.currentUser;
    let [password,setPassword] = useState('') 
    const getEmail = () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setEmail(user.email); 
            } else {
              setEmail(localStorageEmail);  
            }
          });
    }
    useEffect(() => {
      getEmail()
     
    }, []);

    const handlePasswordUpdate = () => {
        localStorage.setItem('userFullName',fullName)
        
       if(password !== ""){
        if (user) {
            updatePassword(user, password)
              .then(() => {
                alert('Changes Saved successfully');
              })
              .catch((error) => {
                alert(error);
              });
          } else {
            console.log('No user is signed in');
          }
       }else{
        alert('Changes Saved Sucessfully')
       }
       
      };
  
    let Role = localStorage.getItem('Role')

    let localStorageUsername = localStorage.getItem('userFullName')
    
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>Edit Profile</h1> 
    <div className="mt-10">
      
<form className="max-w-md mx-auto" >
<div className="relative z-0 w-full mb-5 text-xl group">
      <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} name="password" id="password" className="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="full_name"  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Full Name
      </label>
  </div>

  <div className="relative z-0 w-full mb-5 text-xl group">
    <span>Logged in as:</span>
      <span className='block text-2xl'>{Role}</span>
    
  </div>

  <div className="relative z-0 w-full mb-5 text-xl group">
    <span>Email:</span>
      <span className='block text-2xl'>{email}</span>
    
  </div>

  <div className="relative z-0 w-full mb-5 text-xl group">
      <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}  name="password" id="password" className="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="password"  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Change Password
      </label>
  </div>


  
 
  <button onClick={handlePasswordUpdate} type="button" className="text-white bg-blue-700 text-sm mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Save Changes
    </button>
</form>

    </div>
  
  </div> 
  )
}

export default EditProfile
