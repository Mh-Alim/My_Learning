import React, { useEffect, useState } from 'react'
import Form from './Form'
import { TodoProvider } from './contexts'
import TodoItem from './TodoItem';

const DummyApp = () => {
    const [todos, setTodos] = useState([]);
  console.log("app")
  console.log(todos);
  const addTodo = (text) => {
    setTodos([...todos,{ id: Date.now(), text,isComplete: false}])
  }
  const updateTodo = (id,text) => {

    const arr = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo,text};
      }
      return todo;
    })
    setTodos(arr)
  }
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  useEffect(() => {
    const strData = localStorage.getItem('todos')
    if (strData) {
      const data = JSON.parse(strData)
      console.log("json data:", data);
      if(data && data.length > 0) setTodos(data)
    }
    
  },[])
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
    
  return (
      <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo}} >
      <Form />
      //Display TodoItem
      {todos && todos.map((e) => (<TodoItem key={e.id} todo={e}/>))}
     </TodoProvider>
  )
}

export default DummyApp