import React from 'react'

const User = () => {
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>All Users</h1> 

 <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   User Id
                </th>
                <th scope="col" className="px-6 py-3">
                   User Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Email
                </th>
             
            </tr>
        </thead>
        <tbody>
        
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                    dsijdd243##f
                </th>
                <td className="px-6 text-black py-4">
                    Fahad
                </td>
                <td className="px-6 py-4 text-black">
                    diary1234590@gmail.com
                </td>
               
            </tr>
        </tbody>
    </table>
    </div> 
</div>

)
}

export default User