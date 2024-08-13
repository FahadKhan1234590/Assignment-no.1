import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer/Footer';

const AllProducts = () => {
    let [dropdownName,setDropdownName] = useState('All Products')
    const [isOpen, setIsOpen] = useState(false);
    let [data,setData] = useState([])
    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = (name) =>{
      setIsOpen(false);    
      setDropdownName(name)
  } 

    useEffect(()=>{
      getData()
    },[])
    
    const getData = async () => {
        let fetchedData = await axios.get('https://fakestoreapi.com/products')
        setData(fetchedData.data)
    }

    let filterData = data.filter((e,i)=>{
        return dropdownName === 'All Products'? e: dropdownName.toLowerCase() === e.category
    })

  return (
    <>
      <div>
        <Navbar  logoColor='bg-black' navLinkClass='text-black'/>

        <div className='container mb-5 pb-5 mt-5 pt-5'>
         <div className='d-md-flex text-center d-sm-flex justify-content-between'>
            <span className='display-3'>All Products</span>
            
            <div className=" mt-4">
                <div className="dropdown">
                  <button className="btn text-black bg-white fs-5 btn-secondary " onClick={toggleDropdown}> 
                      <span>{dropdownName}</span><span className='ms-5'><IoIosArrowDown /></span>
                  </button>
                  <ul className={`dropdown-menu ${isOpen? ' show' : ''}`}>
                    <li><a className="dropdown-item" href="#" onClick={()=>closeDropdown('All Products')}>All Products</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=>closeDropdown("Men's Clothing")}>Men's Clothing</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=>closeDropdown("Women's Clothing")}>Women's Clothing</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=>closeDropdown("Jewelery")}>Jewelery</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=>closeDropdown("Electronics")}>Electronics</a></li>
                  
                  </ul>
                </div>
             </div>
         </div>

         <div className='mt-5 pt-2'>
         <div className='d-flex justify-content-center gap-2 flex-wrap'>
              {
                filterData.map((e,i)=>{
                  return(
                    <div className='d-inline-block'  key={i}>
                      <Cards id={e.id} price={e.price} productRatings={Math.round(e.rating.rate)} category={e.category}  title={e.title} img={e.image} desc={e.description}/>
                    </div>
                  )
                })
              }
            </div>
         </div>

        </div>

        <Footer/>
      </div>
    </>
  )
}

export default AllProducts
