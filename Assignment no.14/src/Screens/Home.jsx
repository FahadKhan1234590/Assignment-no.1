import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Home.module.css'
import Navbar from '../Components/Navbar/Navbar'
import border from '../assets/border.png'
import { MdFormatQuote } from "react-icons/md";
import Cards from '../Components/Cards/Cards'
import axios from 'axios'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  let [productsData,setProductsData] = useState([])


  useEffect(()=>{
    getData()
  },[])
  const getData = async()  =>{
    let fetchedData =await  axios.get('https://fakestoreapi.com/products')
    let data = fetchedData.data
    setProductsData(data)
  }
  return (
    <>
    <div>
      {/* Section 1 */}
        <div className={`${styles.bgimg} pb-5`}>
         <Navbar logoColor='' navLinkClass='text-white' />
            <div  className="">
              

                <div className='mt-5 row w-100'>
                  <div className='col-md-2'></div>
                  <div className={`${styles.textalign} col-md-10`}>
                  <span className='fs-4 text-white'>Summer Collection</span>
                  <h1 className="display-2 text-white ">Introducing</h1>
                  <h1 className="display-2 text-white ">New Arrivals</h1>

                  <div className="fs-5 mt-4 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Ut elit tellus, luctus nec ullamcorper mattis, <br/> pulvinar dapibus leo.
                  </div>

                  <div className="mt-4 pb-5">
                    <button style={{letterSpacing : "3px",backgroundColor : "white",border : "white",color : "gray"}} className='btn btn-primary fs-5 ps-3 pt-2 pb-2 pe-3 '>VIEW COLLECTION</button>
                  </div>
                  </div>
                </div>
            </div>
        </div>
      {/* Section 1 End */}


      {/* Section 2*/}
      <div>
        <div className="mt-5 container mb-5">
           <div>
           <MdFormatQuote  className='display-2'/>
           </div>

           <div className='mb-5'>
           <span className='display-4 '>
           Shopping is cheaper than therapy.
           </span>
           </div>

           <div className=''>
            <hr style={{display :"inline-block",width: "200px",border: "solid 1px black"}}/> <span className='fs-4'>OnlineWardrobe</span>
           </div>
        </div>
           
           <div className={`${styles.divider} fs-2`}>
           </div>
      </div>
      {/* Section 2 End */}

{/* Section 2*/}
      <div className='mb-5 pb-3'>
        <div className='container mt-5'>
            <div className='text-center mb-4'>
                <span className='fs-1'>Featured Products</span>
            </div>

            <div className='d-flex justify-content-center flex-wrap gap-2'>
              {
                productsData.map((e,i)=>{
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
      {/* Section 2 End */}

      <Footer/>
    </div>
    </>
  )
}

export default Home




