import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);
   //Effect
 
   
   useEffect(() => {
      filterHandler();
  }, [toDos, status])
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(toDos.filter(toDo => toDo.completed === true))
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(toDo => toDo.completed === false))
        break;
      default:
        setFilteredToDos(toDos);
    }
  }
 
  return (
    <div className="App">
      <header>
        <h1>Nico's to do List</h1>
      </header>
      <Form 
        toDos={toDos} 
        inputText={inputText} 
        setToDos={setToDos} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <ToDoList 
        setToDos={setToDos} 
        toDos={toDos} 
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
