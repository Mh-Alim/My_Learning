import React, { useState } from 'react'

const UseState2 = () => {

    const initialize = () => {
        return 0;
    }
    const update = () => {
        return count + 1;
    }

    const handleClick = () => {
        // update is treating like a setter function
        setCount(update);
    }
    const [count, setCount] = useState(initialize)
    


    // If i want to store function in state then

    const fun1 = () => {

    }
    const fun2 = () => {
        const obj = {
            name : "alim"
        }
    }
    const handleClick2 = () => {
        setStoreFun(() => fun2)
    }
    const [storeFun, setStoreFun] = useState(() => fun1)

    console.log(storeFun);
    return (
      
      <div>
        <button onClick={handleClick}>fun - { count }</button>
        <button onClick={handleClick2}>fun2</button>
    </div>
  )
}

export default UseState2