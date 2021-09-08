import React from "react"
import EditIcon from "@material-ui/icons/Edit"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import { deleteTodo } from "./features/todoSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

export default function TodoItem({ name, id }) {
  const [editable, setEditable] = useState(false)
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    )
  }
  return (
    <div className="todo-item">
      {editable ? <input type="text" placeholder={name} /> : <p className="todo-content">{name}</p>}
      <EditIcon className="icon" onClick={() => setEditable(!editable)} />
      <HighlightOffIcon className="icon" onClick={handleDelete} />
    </div>
  )
}
