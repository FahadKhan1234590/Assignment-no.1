import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../../Config/firebase'
import UserServicesRequestCard from '../../../Components/UserServicesRequest/UserServicesRequestCard'

const AllCustomersServicesRequest = () => {
  let [userArr,setUserArr] = useState([]) 

  useEffect(()=>{
    getUserPaymentsHistory()
  },[])
  const getUserPaymentsHistory = async () =>{
    let arr = []
    const querySnapshot = await getDocs(collection(database, "usersServiceRequest"));
    querySnapshot.forEach((doc) => {
      arr.push({...doc.data()})
    });
    setUserArr(arr)
  }
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>All Users Services Request</h1> 
    <div className='flex gap-5 justify-center flex-wrap'>
    {
      userArr.map((e,i)=>{
      return <UserServicesRequestCard phoneNumber={e.phoneNumber} timeRequested={e.timeRequested? e.timeRequested: 'Not Available'} name={e.fullname} serviceRequest={e.service}/>
      })
    }
    </div>
    
  
  </div> 
  )
}

export default AllCustomersServicesRequest