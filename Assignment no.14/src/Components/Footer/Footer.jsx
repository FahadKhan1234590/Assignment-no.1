import React from 'react'
import logo from  '../../assets/logo.png'
const Footer = () => {
  return (
    <>
      <div className='bg-black'>
        <div className='row w-100 pt-5'>
          <div className='col-md-4 mb-5 text-center'>
            <div><img src={logo} alt="" /></div>
            <div className='mt-4'>
                <span className='text-white'>
                Transform your style <br/>with OnlineWardrobe - <br/> where fashion meets <br/> elegance. Discover the <br/>latest trends and<br/> timeless classics to<br/> elevate your <br/> wardrobe every day.
                </span>
            </div>
          </div>

          <div className='col-md-4 mb-5 text-center'>
            <div>
                <span className='fs-2 d-inline-block mb-3 text-white'>
                Quick Links
                </span><br/>
                <span className='text-white fs-5'>Home<br/> All Products <br/> About Us</span>
            </div>
          </div>

          <div className='col-md-4 text-center'>
            <div>
                <span className='fs-2 d-inline-block mb-3 text-white'>
                Shop Collections
                </span><br/>
                <span className='text-white fs-5'>
                Men's Jeans<br/> Women's Tops
                <br/>Hoodies<br/>Jackets<br/>Shoes
                </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
