import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { database } from '../../Config/firebase'

const SubmitPayment = () => {
  let [fullName,setFullName] = useState('')
  let [roomNo,setRoomNo] = useState(null)
  let [amount,setAmount] = useState('')

  const handleSubmit = async (e) =>{
     e.preventDefault()


     try {
       const docRef = await addDoc(collection(database, "usersPayment"), {
         fullname: fullName,
         roomNo: roomNo,
         amount: amount
       });
       const allCustomersBooking = await addDoc(collection(database, "allCustomersBooking"), {
        fullname: fullName,
        roomNo: roomNo,
        amount: amount,
        request : "Payment Submit"
      });
       alert('Amount Payed Successfully')
       setPhoneNumber('')
       setFullName('')
       setAmount('')

     } catch (e) {
       console.error("Error adding document: ", e);
     }
  }
 
  return (

    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>Submit Payment</h1> 
    <div className="mt-10">
      
<form className="max-w-md mx-auto" onSubmit={handleSubmit} >
<div className="relative z-0 w-full mb-5 text-xl group">
      <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} name="full_name" id="fullname" className="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="fullname" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Full Name
      </label>
  </div>

  <div className="relative z-0 w-full text-xl mb-5 group">
      <input type="number"  value={roomNo}  onChange={(e)=>setRoomNo(e.target.value)} name="room_number" id="roomnumber" className="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="roomnumber" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Room Number
       </label>
  </div>
  
  <div className="relative z-0 w-full text-xl mb-5 group">
      <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}  name="amount" id="amount" className="block py-2.5 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="amount"  className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
       Amount you want to pay
      </label>
  </div>

  

  
 
  <button type="submit" className="text-white bg-blue-700 text-sm mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Submit Payment
    </button>
</form>

    </div>
  
  </div> 
  )
}

export default SubmitPayment