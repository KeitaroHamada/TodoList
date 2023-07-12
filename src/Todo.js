import React from 'react'

const Todo = ({ todo, toggleTodo}) => {
  const hamdleTodoClick = () => {
    toggleTodo(todo.id);
  }
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={hamdleTodoClick}/>
        </label>
        {todo.name}
    </div>
  )
}

export default Todo