import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaMinus,FaPlus } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Components/Footer/Footer';

const Product = () => {
  let params = useParams()
  let [data,setData] = useState()
  let [counter,setCounter] = useState(0)

  useEffect(()=>{
     fetchProductData()
  },[])

  const fetchProductData = async ()=>{
     let fetchedData = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
     setData([fetchedData.data])
  }

  console.log(data)
  return (
    <>
    <div>
        <Navbar  logoColor='bg-black' navLinkClass='text-black'/>

        <div className='container mt-5 mb-5 pb-5  bg-white'>
          <div className='pt-5'>
            {
            data?.map((e,i)=>{
              return(
                <div key={i} className='row'>
                  <div className='col-md-6'>
                    <div>
                    <img className='w-100' src={e.image} alt="" />
                    </div>
                  </div>

                  <div className='col-md-6'>
                     <div className='mt-4 ms-3'>
                      <div>
                      <span className='d-inline-block mb-2 fs-5'>{e.category}</span><br/>
                      <span className='fs-4'>{e.title}</span>
                      </div>

                      <div className='mb-5'>
                       <div className='mt-3 mb-2'><span className='fs-3'>${e.price}</span></div>
                       <div>
                        <span className='fs-4'>
                            {e.description}
                        </span>
                       </div>
                      </div>

                      <div>
                        <div className='d-md-flex text-center  justify-content-between'>
                       <div className='ms-md-3 d-flex justify-content-center'>
                       <div className='row  pb-2 mb-4 fs-4 border border-2' style={{width : "170px"}}>
                            <div className='col-4 text-center'>
                            <div onClick={()=>counter >= 1? setCounter(counter - 1): setCounter(0)} className=''><FaMinus /></div>
                            </div>
                            <div className="col-4 text-center">
                                {counter}
                            </div>

                            <div className='col-4 text-center'>
                            <div onClick={() =>  setCounter(counter + 1)}  className=''><FaPlus/></div>
                            </div>
                        </div>
                       </div>

                        <div>
                          <button style={{backgroundColor:  "#403f3b",border:  "solid 2px black"}} className='btn fs-5 btn-primary'>ADD TO CART</button>
                        </div>
                        </div>

                        
                      </div>
                     </div>
                   
                     
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>

        <Footer/>
    </div>
      
    </>
  )
}

export default Product
