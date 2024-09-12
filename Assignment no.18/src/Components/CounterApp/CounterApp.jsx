import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCounter, decrement, increment } from '../../store/slices/CounterSlice'

const CounterApp = () => {
    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

    const inc = () =>{
        dispatch(increment())
    }
    
    const dec = () =>{
        dispatch(decrement())
    }

    const clear = () =>{
        dispatch(clearCounter())
    }
  return (
    <>
     <div className='text-center mt-3'>
        <div>
            <h1 className='text-5xl'>Counter App</h1>
        </div>

        <div className='mt-10'>
            <h1 className='text-4xl'>Counter:</h1>
        </div>

        <div className='flex gap-10 text-6xl justify-center mt-10'>
        <button className='border border-black px-3 pb-3 rounded' onClick={dec}>-</button>
        <h1 className=''>{count}</h1>
        <button className='border border-black px-1  pb-3 rounded' onClick={inc}>+</button>
        </div>

        <div className='mt-16'>
        <button className='border border-black px-1 text-2xl   rounded' onClick={clear}>Clear</button>
        </div>
     </div> 
    </>
  )
}

export default CounterApp
