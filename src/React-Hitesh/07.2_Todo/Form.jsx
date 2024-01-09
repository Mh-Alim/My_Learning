import React, { useState } from 'react'
import useTodo from './contexts';

const Form = () => {
    console.log("form");
    const {addTodo} = useTodo()
    const [text, setText] = useState("");

    const submitHandler = (e) => { 
        e.preventDefault();
        
        // pick anything from text
        addTodo(text)
        setText("")
     }
  return (
      <form onSubmit={submitHandler}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button>Add</button>
    </form>
  )
}

export default Form