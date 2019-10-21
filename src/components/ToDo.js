import React from "react"
import "./ToDo.css"

export default props => (
    <div className="todo">
        <div style={{
            textDecoration: props.todo.complete ? 'line-through' : ""
        }} onClick={props.comleteTodos}>{props.todo.text}</div>
        <span onClick={props.onDelete}>X</span>
    </div>
);
