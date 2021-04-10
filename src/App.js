import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './styles.css'
import {increment, decrement, reset, incrementByAmount} from './App/counter'

export default function App() {
  // select current state
  const {count} = useSelector(state => state.counter)
  // dispatch actions
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>The count is:{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        increment by 33
      </button>
    </div>
  )
}
