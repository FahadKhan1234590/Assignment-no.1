import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus } from '../../../store/slices/counterSlice';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { database } from '../../../Config/firebase';
import { useLocation } from 'react-router-dom';




const Customers = () => {
    let [userArr,setUserArr] = useState([]) 

    useEffect(()=>{
      getAllCustomersBookingHistory()
    },[])

    const deleteUser = async (id) =>{
      const docRef = doc(database, `allCustomersBooking/${id}`);
  
      try {
        await deleteDoc(docRef);
        alert("Document deleted successfully");
        location.reload()
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
      
    }
    const getAllCustomersBookingHistory = async () =>{
      let arr = []
      const querySnapshot = await getDocs(collection(database, "allCustomersBooking"));
      querySnapshot.forEach((doc) => {
        arr.push({...doc.data(),id:doc.id})
      });
      setUserArr(arr)
    }
 return (
  <div className="p-4 sm:ml-64">
  <h1 className='text-4xl mb-10 text-center'>All Customers Booking</h1> 

<div className="relative overflow-x-auto">
  <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" className="px-6 py-3">
                 User Id
              </th>
              <th scope="col" className="px-6 py-3">
                 Request
              </th>
              <th scope="col" className="px-6 py-3">
                 Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                 Phone No
              </th>
              <th scope="col" className="px-6 py-3">
                 Room No
              </th>
           
          </tr>
      </thead>
      <tbody>
      
           {userArr.map((e,i)=>{
               return(
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                  {e.id}
                 </th>
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                  {
                  e.request == "Service"?
                  <>
                  <span>Service: </span>
                  <span>{e.service}</span>
                  </>:
                  <>
                  {e.request}
                  </>
                  }
                 </th>
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                  {e.fullname}
                 </th>
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                  {e.phoneNumber}
                 </th>
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                  {e.roomNo}
                 </th>

                 <th onClick={()=>localStorage.getItem('Role') == "Admin"? deleteUser(e.id) : alert('Only Admin Can Delete Users')} scope="row" className="px-6 text-red-400 py-4 font-medium whitespace-nowrap dark:text-white">
                  Delete
                 </th>
          </tr>
            )
           })}
             
      </tbody>
  </table>
  </div> 
</div> 
  )
}

export default Customers
