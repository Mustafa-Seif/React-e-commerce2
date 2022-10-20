import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {incrementCount,decrementCount} from '../../Redux/CounterSlice' 
import {addProduct} from '../../Redux/CartSlice' 


function Counter() {
    const counterGlobalValue = useSelector((state)=>state.counterStore.counter);
    
    const dispatch = useDispatch();

    const increment = ()=>{
        dispatch(incrementCount())
    }
    const decrement = ()=>{
      if (counterGlobalValue > 0) {
        dispatch(decrementCount())
        
      }
        
    }
  return (
    <section className='container text-center mt-5'>
        <h3>Support us</h3>
        <div className='mb-5'>{counterGlobalValue}</div>
        <button className='btn btn-success ms-1' onClick={increment}>increment +</button>
        <button className='btn btn-danger ms-1'onClick={decrement}>decrement -</button>
    </section>
  )
}

export default Counter