import React, { useEffect, useState } from 'react'
import Table from '../Components/Table'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
    let [userData,setUserData] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        axios.get('http://localhost:2000/users').then((res)=>{
            setUserData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
     <div className='text-center mb-2 bg-dark'>
        <span className='fs-1  text-white'>Users Table</span>
    </div>
    <div className='mb-4 ps-2'>
        <button className='btn btn-primary fs-4' onClick={()=>navigate('/createnewuser')}>Create new user</button>
    </div>
      <Table data={userData}/>
    </>
  )
}

export default Home
