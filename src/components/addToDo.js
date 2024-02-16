import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToDo } from '../feature/todo/todoSlice';

const AddToDo = () => {
    const [input, setInput] = useState('')
    const dispatch =useDispatch();
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addToDo(input))
        setInput('')
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="todo">Add to do:</label><br />
            <input type="text" id='todo' value={input} onChange={(e)=>{setInput(e.target.value)}} /><br />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddToDo