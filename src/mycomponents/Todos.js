import React from 'react'
import {TodoItem} from "./TodoItem"   

// THIS TO DISPLAY ALL TODO ITEMS 

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>ToDo List </h3>
      {
        props.todos.map((todo)=>{     // THIS IS JSX
          return <TodoItem todo={todo} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}


