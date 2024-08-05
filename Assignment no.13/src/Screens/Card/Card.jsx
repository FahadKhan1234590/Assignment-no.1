import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();

  return (
    <>
     <div class="card text-center" style={{width: '18rem'}}>
     <div className='justify-content-center d-flex'>
    <img style={{width: "70%"}} src={props.imgSrc} class="card-img-top" alt="..."/>
     </div>
     <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc.slice(0,200)}</p>
    <span  onClick={() => navigate(`/dashboard/product/${props.id}`)} class="btn btn-primary">Add</span>
  </div>
  </div> 
    </>
  )
}

export default Card
