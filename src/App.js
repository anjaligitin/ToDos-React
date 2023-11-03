// import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/Header";
import {Todos} from "./mycomponents/Todos";
import AddToDo from "./mycomponents/AddToDo";
import Footer from "./mycomponents/Footer";
import { useState , useEffect} from "react";    // useState Hook

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
     initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("Your ToDo is Deleted",todo);
    // THIS METHOD DO NOT WORK IN REACT
    // let index=todos.indexOf(todos)
    // todos.splice(index,1)
    setTodos(todos.filter((item)=>{
      return item!==todo;
    }))
    localStorage.getItem("todos",JSON.stringify(todos))
  }

  const addTodo=(title,desc)=>{
    console.log("Addig Todo",title,desc)
    let Sno;
    if(todos.length==0){
      Sno=0;
    }
    else{
      Sno=todos[todos.length-1].Sno+1
    }
    const myTodo={
      Sno:Sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
    
  }

// useState Hook 
  const [todos,setTodos]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
      <Header title="My ToDo List" searchbar={false}/>
      <AddToDo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
      
    </>

  );
}

export default App;
