import React from 'react'
import { MdOutlineStarRate } from "react-icons/md";
import { MdStarRate } from "react-icons/md";

const Ratings = ({ratings}) => {
  return (
    <>
    <span>
    {
  [...Array(5)].map((_, index) => (
    index < ratings ? (
      <MdStarRate key={index} className='fs-4' style={{color: "#FFC107"}} />
    ) : (
      <MdOutlineStarRate key={index} className='fs-4' style={{color: "#FFC107"}} />
    )
  ))
}
    </span>
    </>
  )
}

export default Ratings
