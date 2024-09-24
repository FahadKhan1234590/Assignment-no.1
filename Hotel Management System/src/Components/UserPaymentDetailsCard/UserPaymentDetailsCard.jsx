import React from 'react'

const UserPaymentDetailsCard = (props) => {
  return (
    <div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Full Name : {props.fullname}</h5>
<p class="font-normal text-xl text-gray-700 dark:text-gray-400">Amount Payed : ${props.amountPayed}</p>
</div>
  )
}

export default UserPaymentDetailsCard