import React from 'react'
import RoomDetailsCard from '../../Components/RoomDetailsCard/RoomDetailsCard'
import roomno1 from '../../assets/All Rooms Images/Roomno1.jpg'
import allRoomData from '../../AllData/RoomData'
const Rooms = () => {
  return (
    <div className="p-4 sm:ml-64">
    <h1 className='text-4xl mb-10 text-center'>All Rooms Details</h1> 
    <div className='flex flex-wrap justify-center gap-5 '>
    {allRoomData.map((e,i)=>{
      return <RoomDetailsCard
       roomno={e.roomno} img={e.img}
        bathrooms={e.bathrooms}
         kitchens={e.kitchens} beds={e.beds} 
         onfloorno={e.onfloorno} pricing={e.pricing}
         availability= {e.availability}
         />
    })}
    </div>
  </div> 
  )
}

export default Rooms