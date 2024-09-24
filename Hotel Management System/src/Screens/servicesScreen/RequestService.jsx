import React, { useState } from 'react'
import { database } from '../../Config/firebase'
import { addDoc, collection } from 'firebase/firestore'

const RequestService = () => {
    let [fullName,setFullName] = useState('')
    let [service,setService] =  useState('Medical')
    let [roomNo,setRoomNo] = useState(null)
    let [number,setNumber] = useState('')

  

    let date = new Date()
    let hours = date.getHours() % 12 || 12;
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let formattedTime =    `${date.getDate()} ${month[date.getMonth()]} ${hours}:${minutes} ${ampm}`
   
  
  


    const handleSubmit = async (e) =>{
        e.preventDefault()
   
        try {
          const docRef = await addDoc(collection(database, "usersServiceRequest"), {
            fullname: fullName,
            service: service,
            timeRequested : formattedTime,
            roomNo: roomNo,
            phoneNumber: number
          });
          const allCustomersBooking = await addDoc(collection(database, "allCustomersBooking"), {
            fullname: fullName,
            service: service,
            timeRequested : formattedTime,  
            roomNo: roomNo,
            request : "Service"
          });
          alert('Service  Requested Successfully')
          setRoomNo('')
          setFullName('')
          setNumber('')
   
        } catch (e) {
          console.error("Error adding document: ", e);
        }
     }
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>Request A Service</h1> 
    <div className="mt-10">
      
<form className="max-w-md mx-auto" onSubmit={handleSubmit} >
<div className="relative z-0 w-full mb-5 text-xl group">
      <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} name="full_name" id="fullname" className="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="fullname" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Full Name
      </label>
  </div>

  <div className="relative z-0 w-full mb-5 text-xl group">
    <span className='block mb-5 text-gray-600'>Service You Want</span>
     <select   value={service}  onChange={(e)=>setService(e.target.value)} className='w-[100%] border border-black rounded' id="service">
      <option value="Medical">Medical</option>
      <option value="Food">Food</option>
      <option value="Room Cleaning">Room Cleaning</option>


      </select>     
  </div>


  <div className="relative z-0 w-full text-xl mb-5 group">
      <input type="number" min="0" max="5"  value={roomNo}  onChange={(e)=>setRoomNo(e.target.value)} name="room_number" id="roomnumber" className="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="roomnumber" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Room Number
       </label>
  </div>
  
  <div className="relative z-0 w-full text-xl mb-5 group">
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}  name="amount" id="amount" className="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="amount"  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Phone Number
      </label>
  </div>

  

  
 
  <button type="submit" className="text-white bg-blue-700 text-sm mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Request Service
    </button>
</form>

    </div>
  
  </div> 
  )
}

export default RequestService
