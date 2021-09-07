import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    saveTodo: (state, action) => {
      state.push(action.payload)
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

export const { saveTodo, deleteTodo } = todoSlice.actions
export const selectTodoList = (state) => state.todos
export default todoSlice.reducer
