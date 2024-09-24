import React, { useEffect, useState } from 'react'
import BookingHistoryCard from '../../../Components/BookingHistoryCard/BookingHistoryCard'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../../Config/firebase'

const AllCustomersBookingHistory = () => {
  let [userArr,setUserArr] = useState([]) 

  useEffect(()=>{
    getBookingHistory()
  },[])
  const getBookingHistory = async () =>{
    let arr = []
    const querySnapshot = await getDocs(collection(database, "roomBookedUsers"));
    querySnapshot.forEach((doc) => {
      arr.push({...doc.data()})
    });
    setUserArr(arr)
  }
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>All Customers Room Booking History</h1> 
    <div className='flex gap-5 justify-center flex-wrap'>
    {
      userArr.map((e,i)=>{
        return <BookingHistoryCard username={e.fullname} phoneNumber={e.phoneNumber} roomBooked ={e.roomNo}/>
      })
    }
    </div>
    
  
  </div> 
  )
}

export default AllCustomersBookingHistory