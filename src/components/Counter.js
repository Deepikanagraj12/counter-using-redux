import React from 'react'
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../redux/slices/CounterSlice'
const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
    <div className='counter'>
        <button 
        className='button'
        onClick={ ()=>dispatch(increment()) }>
        Increment
        </button>
        <p className='text'>{count}</p>
        <button 
        className='button'
        onClick={ ()=>dispatch(decrement())}>
        Decrement
        </button>
    </div>
  )
}

export default Counter