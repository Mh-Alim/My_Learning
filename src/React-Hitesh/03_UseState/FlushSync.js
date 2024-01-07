import React, { useState,useEffect } from 'react'
import { flushSync } from 'react-dom';



// Dont get using the right example 
const FlushSync = () => {
  const [count, setCount] = useState(0);




  const handleClick = () => {
    console.log(count);
    setCount(count + 1);
    flushSync(() => {
      
      console.log(count);
    })
    console.log(count);
  }
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default FlushSync