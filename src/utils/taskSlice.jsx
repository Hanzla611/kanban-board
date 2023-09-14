import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers:{
        addTask:(state, action) => {
            return [...state, action.payload]
        },
        removeTask:(state, action) => {
            return null
        }
    }
})

export const {addTask, removeTask} = taskSlice.actions

export default taskSlice.reducer