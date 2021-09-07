import React, { useState } from "react"
import "./App.css"
import AddIcon from "@material-ui/icons/Add"
import TodoItem from "./TodoItem"

import { useDispatch, useSelector } from "react-redux"
import { saveTodo } from "./features/todoSlice"
import { selectTodoList } from "./features/todoSlice"

function App() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const todoList = useSelector(selectTodoList)

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    )
    setInput("")
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div className="todo-container">
        {todoList.map((item) => (
          <TodoItem name={item.item} done={item.done} id={item.id} />
        ))}

        <div className="todo-item">
          <input type="text" placeholder="Add" className="todo-content" value={input} onChange={(e) => setInput(e.target.value)} />
          <div></div>
          <AddIcon className="icon" onClick={addTodo} />
        </div>
      </div>
    </div>
  )
}

export default App
