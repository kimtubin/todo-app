import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    },

    deleteTodo: (state, action) => {
      state.todoList.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

export const { saveTodo, deleteTodo } = todoSlice.actions
export const selectTodoList = (state) => state.todos.todoList
export default todoSlice.reducer
