import React from "react"
import EditIcon from "@material-ui/icons/Edit"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import { deleteTodo } from "./features/todoSlice"
import { useDispatch } from "react-redux"

export default function TodoItem({ name, id }) {
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
      <p className="todo-content">{name}</p>
      <EditIcon className="icon" />
      <HighlightOffIcon className="icon" onClick={handleDelete} />
    </div>
  )
}
