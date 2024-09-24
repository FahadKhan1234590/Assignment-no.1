import React from 'react'

const UserServicesRequestCard = (props) => {

  return (
    <div  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
 <p class="font-normal text-2xl text-gray-700 dark:text-gray-400 mb-2">Name : <span className="font-bold">{props.name}</span></p>
 <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Service Request : {props.serviceRequest}</h5>
 <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Time Requested : {props.timeRequested}</h5>
 <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Phone Number : {props.phoneNumber}</h5>
 
 </div>
  )
}

export default UserServicesRequestCard
