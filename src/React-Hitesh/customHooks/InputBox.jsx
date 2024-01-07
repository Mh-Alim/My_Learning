import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import useUpdateLogger from './hooks/useUpdateLogger'
import useCounter from './hooks/useCounter'

const InputBox = () => {
  const [text, setText] = useLocalStorage('id')
  useUpdateLogger(text)

  const [count,increment,decrement] = useCounter(10)
  return (
    <div>
      {/* setting local storage value  */}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <br />

       {/* useCounter hook  */}

      <div>
        <button onClick={increment} >+</button>
        { count }
        <button onClick={decrement} >-</button>
       </div>
      
    </div>
  )
}

export default InputBox