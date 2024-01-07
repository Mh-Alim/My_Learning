import React, { useState } from 'react'

const UseState = () => {

    const fun = () => {
        console.log("fund");
        return 0;
    }
    const [count,setCount] = useState(fun)
  return (
      <div>
          {count}
          <br />
            <button onClick={() => setCount(count+1)}>click</button>
    </div>
  )
}

export default UseState