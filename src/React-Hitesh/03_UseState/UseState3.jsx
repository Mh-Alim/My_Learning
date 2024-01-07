import React, { useState } from 'react'


// its not like if setter function of usestate should be of same data type it can be anything
// ex: if initial value i took as 0 then in setter function i can take string too
// const [value,setValue] = useState(0)
// setValue("sdhfsdfshf")   // valid
const UseState3 = () => {
    
    const [value, setValue] = useState(0)
    console.log(value, Math.random())
  return (
      <div>
          <button onClick={() => `${setValue(value+1)}`}>{ value }</button>
    </div>
  )
}

export default UseState3