import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { useState } from 'react'

function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    return(
        <>
        <div>Todos</div>
        <ul className="list-none">
        {todos.map((todo) => (
            <li key={todo.id}>{todo.text}<button onClick={() => dispatch(removeTodo(todo.id))}></button></li>
        ))}
        </ul>
        </>
    )
}
export default Todos;