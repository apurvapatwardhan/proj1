import React from 'react'
import Tool from './Tool'
import "./Counter.css"

function Counter(props) {
  return (
    <div className='counter'>
      <div>Increment & Decrement</div>
      <Tool {...props}/>
      <div>
        <button type='button' onClick={() => props.setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
