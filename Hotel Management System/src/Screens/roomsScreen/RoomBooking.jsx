import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { database } from '../../Config/firebase';

const RoomBooking =  () => {
   let [fullName,setFullName] = useState('')
   let [roomNo,setRoomNo] = useState(null)
   let [phoneNumber,setPhoneNumber] = useState('')

   const handleSubmit = async (e) =>{
      e.preventDefault()


      try {
        const docRef = await addDoc(collection(database, "roomBookedUsers"), {
          fullname: fullName,
          roomNo: roomNo,
          phoneNumber: phoneNumber
        });

        const allCustomersBooking = await addDoc(collection(database, "allCustomersBooking"), {
          fullname: fullName,
          roomNo: roomNo,
          phoneNumber: phoneNumber,
          request : "Room Booking"
        });
        alert('Room Booked Successfully')
        setPhoneNumber('')
        setFullName('')
        setRoomNo(0)

      } catch (e) {
        console.error("Error adding document: ", e);
      }
   }
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>Book A Room</h1> 
    <div className="mt-10">
      
<form class="max-w-md mx-auto" onSubmit={handleSubmit}>
<div class="relative z-0 w-full mb-5 text-xl group">
      <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} name="full_name" id="fullname" class="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="fullname" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Full Name
      </label>
  </div>

  <div class="relative z-0 w-full text-xl mb-5 group">
      <input type="number" min="1" max="5" value={roomNo}  onChange={(e)=>setRoomNo(e.target.value)} name="room_number" id="roomnumber" class="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="roomnumber"  class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Room Number
       </label>
  </div>
  
  <div class="relative z-0 w-full text-xl mb-5 group">
      <input type="text" value={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)} name="phone_number" id="phonenumber" class="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="phonenumber" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Phone Number
      </label>
  </div>

  

  
 
  <button type="submit" class="text-white bg-blue-700 text-xl mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
</form>

    </div>
  
  </div> 
  )
}

export default RoomBooking