import React, { useEffect, useState } from 'react';
import hotelimg1 from '../../assets/DashboardCarousel/hotelimg1.jpg'
import hotelimg2 from '../../assets/DashboardCarousel/hotelimg2.jpg'
import hotelimg3 from '../../assets/DashboardCarousel/hotelimg3.jpg'

const DashboardCarousel = () => {
    const images = [hotelimg1, hotelimg2, hotelimg3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); 
  
      return () => clearInterval(intervalId); 
    }, [images]);
  return(
    <div
    className="relative bg-cover bg-center  h-[550px]  w-full"
    style={{ backgroundImage: `url(${images[currentIndex]})` }}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1 className='text-5xl text-center backdrop-blur-md mb-10 text-white'>Welcome To Hotel</h1>

     
    </div>
  </div>
  )
    
  };

export default DashboardCarousel;
