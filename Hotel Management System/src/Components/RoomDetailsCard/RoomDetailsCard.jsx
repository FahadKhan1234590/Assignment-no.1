import React from 'react'

const RoomDetailsCard = (props) => {
  return (
    <div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   <img src={props.img} className='mb-3' alt="" />
<h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Room no : {props.roomno}</h5>
<p class="font-normal text-xl text-gray-700 dark:text-gray-400">Kitchens : {props.kitchens}</p>
<p class="font-normal text-xl text-gray-700 dark:text-gray-400">Bathrooms : {props.bathrooms}</p>
<p class="font-normal text-xl text-gray-700 dark:text-gray-400">Beds : {props.beds}</p>
<p class="font-normal text-xl text-gray-700 dark:text-gray-400">On floor no : {props.onfloorno}</p>
<p class="font-normal text-xl text-gray-700 dark:text-gray-400">Pricing : {props.pricing}</p>
<p class="font-normal text-xl text-gray-700 dark:text-gray-400">Availability : {props.availability}</p>


</div>

  )
}

export default RoomDetailsCard