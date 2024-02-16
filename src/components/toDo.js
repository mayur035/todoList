import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeToDo} from '../feature/todo/todoSlice'

const ToDo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    return (
        <>
            <div>ToDo :</div>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        {todo.text}
                    <button onClick={()=>{dispatch(removeToDo(todo.id))}}>Remove</button>
                    </li>
                )
            })}
        </>
    )
}

export default ToDo