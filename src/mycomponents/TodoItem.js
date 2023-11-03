import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      {/* <p>{ todo.Sno }</p> */}
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger mb-3' key={todo.Sno} // just pass ondelete func, not calling
      onClick={()=>{onDelete(todo)}}
      >Delete</button>
    </div>
  )
}



