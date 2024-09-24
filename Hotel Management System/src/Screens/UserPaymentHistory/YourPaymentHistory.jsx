import React, { useEffect, useState } from 'react'
import UserPaymentDetailsCard from '../../Components/UserPaymentDetailsCard/UserPaymentDetailsCard'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../Config/firebase'

const YourPaymentHistory = () => {
  let [userArr,setUserArr] = useState([]) 

  useEffect(()=>{
    getUserPaymentsHistory()
  },[])
  const getUserPaymentsHistory = async () =>{
    let arr = []
    localStorage.setItem('userName','Fahad Khan')
    let localStorageName =localStorage.getItem('userName')
    const querySnapshot = await getDocs(collection(database, "usersPayment"));
    querySnapshot.forEach((doc) => {
      arr.push({...doc.data()})
    });
    let singleUserPaymentHistory = arr.filter((e,i)=>{
        return e.fullname === localStorageName
    })
    setUserArr(singleUserPaymentHistory)
  }
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>Your Payments History</h1> 
    <div className='flex gap-5 justify-center flex-wrap'>
    {
      userArr.map((e,i)=>{
      return <UserPaymentDetailsCard fullname={e.fullname} amountPayed ={e.amount}/>
      })
    }
    </div>
    
  
  </div> 
  )
}

export default YourPaymentHistory