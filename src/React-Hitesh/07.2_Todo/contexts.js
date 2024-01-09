import { useContext, createContext } from "react";

const todoContext = createContext({
    todos: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
})


export const TodoProvider = todoContext.Provider;

export default function useTodo() {
    return useContext(todoContext)
}
