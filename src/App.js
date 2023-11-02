// import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/Header";
import {Todos} from "./mycomponents/Todos";
import Footer from "./mycomponents/Footer";
import { useState } from "react";    // useState Hook

function App() {
  const onDelete=(todo)=>{
    console.log("Your ToDo is Deleted",todo);
    let index=todos.indexOf(todos)
    todos.splice(index,1)
  }
  const [todos,setTodos]= useState([
    {
      Sno:"1",
      title:"College",
      desc:"Do your DSA Assignment"
    },
    {
      Sno:"2",
      title:"Home",
      desc:"Do Clean your Washbasin"
    },
    {
      Sno:"3",
      title:"HA",
      desc:"Do learn all wildlife Sanctuary"
    },
    {
      Sno:"4",
      title:"Maths",
      desc:"Do learn tablel 13 to 20"
    },
    {
      Sno:"5",
      title:"Company",
      desc:"Complete Project Report"
    }
  ]);

  let myvariable = 'learning'
  return (
    <>
      <Header title="My ToDo List" searchbar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
      
    </>

  );
}

export default App;
