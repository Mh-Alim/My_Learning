import React, { useCallback, useState } from 'react'
import Child from './Child';



const Parent = () => {
    const [dark,setDark] = useState(false)
    console.log("parent is rendering");

    const theme = {
        backgroundColor: dark ? "brown" : "yellow"
    }

    const somefunction = useCallback(() => {

    },[])
  return (
      <div style={theme} onClick={() => setDark(!dark)}>
          Parent 
          <Child fun={somefunction}  />
    </div>
  )
}

export default Parent