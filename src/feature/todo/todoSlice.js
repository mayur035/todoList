import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {id:1,text:'Hello world'},
    ]
}


export const todoSlice = createSlice({
    name:'todo',//property or key name is byDefault like here name
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeToDo:(state,action)=>{
            state.todos = state.todos.filter((item)=>item.id !== action.payload)
        },
    }
})

export const {addToDo,removeToDo} = todoSlice.actions

export default todoSlice.reducer