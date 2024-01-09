import React, { memo, useState } from 'react'
import useTodo from './contexts';

const TodoItem = ({ todo }) => {
console.log("todo item");
  const { updateTodo,deleteTodo } = useTodo();
  const { id } = todo;
  const [text, setText] = useState(todo.text)
  const [read, setRead] = useState(true)
  const [checked,setChecked] = useState(false)

  return (
    <div >
      <input type="checkbox"  onChange={(e) => {
        setChecked(!checked)
      }} />
      <input style={{ textDecoration: checked ? "line-through" : "none" }}  type="text" readOnly={read} value={text} onChange={(e) => setText(e.target.value)} />
      <button style={{display: !read ? "none" : "inline"}} onClick={() => {setRead(false)}}>edit</button>
      <button style={{display: read ? "none" : "inline"}} onClick={() => { updateTodo(id, text); setRead(true)  }}>submit</button>
          <button onClick={() => deleteTodo(id) }>delete</button>
    </div>
  )
}

export default TodoItem