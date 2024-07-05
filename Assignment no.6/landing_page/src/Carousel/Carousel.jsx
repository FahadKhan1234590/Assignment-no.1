import React from 'react'
import carousel1img from  "../assets/carousel1img.png"
import carousel2img from  "../assets/carousel2img.png"


const Carousel = () => {
  return (
        <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img src={carousel1img} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src={carousel2img} class="d-block w-100" alt="..."/>
        </div>
       
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
  )
}

export default Carousel
