import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './cards.module.css'
import Ratings from '../Ratings';
import { useNavigate } from 'react-router-dom';

const Cards = ({title,id,price,desc,img,category,productRatings}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  let navigate = useNavigate()

  const makeHoversTrue = () =>{
    setIsHovered(true)
    setIsHovered2(true)
  }

  const makeHoversFalse = () =>{
    setIsHovered(false)
    setIsHovered2(false)
  }
  return (
    <>
      <div onClick={()=> navigate(`/product/${id}`)}  onMouseEnter={() => makeHoversTrue() } onMouseLeave={() => makeHoversFalse()} className="card" style={{width: '17rem',border : "none"}}>

  <div style={{
    backgroundImage : `url(${img})`,
    backgroundSize : 'cover',
    height : "300px",
    width : '100%'

}}>
  <button className={`${styles.quickview} text-white  d-${isHovered? 'block':'none'}  w-100`}>Quick View</button>
  </div>
  <div className={`${styles.cardbody} card-body`} style={{backgroundColor : isHovered2? '#DADADA':  "#f2f2f2"}} >
    <p>{category}</p>
    <h5 className="card-title">{title.slice(0,17)}...</h5>
    <p className="card-text">{desc.slice(0,48)}...</p>
    <span><Ratings ratings={productRatings}/></span>
    <div className='mt-1'>${price}</div>
  </div>
</div>
    </>
  )
}

export default Cards
