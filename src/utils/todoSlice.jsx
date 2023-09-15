import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo-task",
    initialState: [],
    reducers:{
        addTodoTask:(state, action) => {
            return [...state, action.payload]
        },
    }
})

export const {addTodoTask} = todoSlice.actions

export default todoSlice.reducer