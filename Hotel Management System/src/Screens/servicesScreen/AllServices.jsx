import React from 'react'
import ServicesCard from '../../Components/ServicesCard/ServicesCard'
import roomCleaning from '../../assets/Services Images/Room Cleaning.jpg'
import Food from '../../assets/Services Images/Food.jpg'
import Medical from '../../assets/Services Images/Medical.png'

const AllServices = () => {
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>All Services</h1> 
    <div className='flex flex-wrap justify-center gap-5 '>
      <ServicesCard img={roomCleaning} service="Room Cleaning" pricing="$5"/>
      <ServicesCard img={Food} service="Food" pricing="$1-20"/>
      <ServicesCard img={Medical} service="Medical" pricing="$5-10"/>

   
    </div>
  </div> 
  )
}

export default AllServices
