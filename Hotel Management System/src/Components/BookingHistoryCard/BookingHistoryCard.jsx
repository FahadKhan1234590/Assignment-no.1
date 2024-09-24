import React from 'react'

const BookingHistoryCard = (props) => {
  return (

<div href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Full Name : {props.username}</h5>
<p className="font-normal text-xl text-gray-700 dark:text-gray-400">Room Booked : Room no.{props.roomBooked}</p>
<p className="font-normal text-xl text-gray-700 dark:text-gray-400">Phone Number : {props.phoneNumber}</p>

</div>


  )
}

export default BookingHistoryCard