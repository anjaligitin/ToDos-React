import React from 'react'
import {TodoItem} from "./TodoItem"   

// THIS TO DISPLAY ALL TODO ITEMS 

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>ToDo List </h3>
      {/* map through the todos array and display each todo item */}

      {props.todos.length===0?<div className='text-center btn-success ' 
      style={{color: "black", 
      padding: "60px",
      fontFamily: "Arial",
      fontSize:"20px",
      fontWeight:"bolder",
      marginInline:"100px",
      marginTop:"70px"} } >No ToDos to Display here 😊</div>:
        props.todos.map((todo)=>{     // THIS IS JSX
          return <TodoItem todo={todo} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}


