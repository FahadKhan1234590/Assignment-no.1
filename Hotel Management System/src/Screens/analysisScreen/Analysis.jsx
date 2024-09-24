import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from '../../Config/firebase'

const Analysis = () => {
    let [userServiceRequest,setUserServiceRequest] = useState([]) 
    let [userPaymentRequest,setUserPaymentRequest] = useState([]) 
   let toNumberTotal = Number(userPaymentRequest.map((e,i)=>e.amount))  + 50 

    useEffect(()=>{
        getAllDataFromDatabase()
    },[])

    const getAllDataFromDatabase = async () =>{
        //Get Services Data
      let servicesArr = []
      const getServicesData = await getDocs(collection(database, "usersServiceRequest"));
      getServicesData.forEach((doc) => {
        servicesArr.push({...doc.data(),id:doc.id})
      });
      setUserServiceRequest(servicesArr)

        //Get Payments Data
      let paymentsArr = []
      const getPaymentsData = await getDocs(collection(database, "usersPayment"));
      getPaymentsData.forEach((doc) => {
        paymentsArr.push({...doc.data(),id:doc.id})
      });
      setUserPaymentRequest(paymentsArr)
    }
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>Hotel Analysis</h1> 
  
  <div className="relative overflow-x-auto">
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Booking
                </th>
                <th scope="col" className="px-6 py-3">
                   Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                   Amount Got
                </th>
              
             
            </tr>
        </thead>
        <tbody>
        
         
                  <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 text-2xl  py-4 font-medium whitespace-nowrap text-gray-800">
                    Service
                   </th>
                   <th scope="row" className="px-6 text-2xl  py-4 font-medium whitespace-nowrap  text-gray-800">
                   {userServiceRequest.length}
                   </th>
                   <th scope="row" className="px-6 text-2xl  py-4 font-medium whitespace-nowrap  text-gray-800">
                    50$
                   </th>           
                 
            </tr>
             
             
            <tr className="bg-white  dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 text-2xl font-medium whitespace-nowrap text-gray-800">
                    Room Booking Payments
                   </th>
                   <th scope="row" className="px-6 py-4 text-2xl  font-medium whitespace-nowrap  text-gray-800">
                   {userPaymentRequest.length}
                   </th>
                   <th scope="row" className="px-6 py-4 text-2xl  font-medium whitespace-nowrap  text-gray-800">
                    {userPaymentRequest.map((e,i)=>e.amount)}$
                   </th>           
                 
            </tr>

            
             
               
        </tbody>
    </table>

    <table className="mt-5 w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="text-xl px-6 py-3">
                    Total
                </th>
             
            </tr>
        </thead>

        <tbody> 
            <tr className="bg-white  dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 text-2xl font-medium whitespace-nowrap text-gray-800">
                    {toNumberTotal}$
                   </th>
                      
                 
            </tr>

            
             
               
        </tbody>
    </table>
    </div> 
  </div> 
  )
}

export default Analysis
