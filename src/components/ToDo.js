//import React, { useState } from 'react'

const ToDo = ({ text, setToDos, toDos, toDo }) => {
    const deleteHandler = () => {
        setToDos(toDos.filter((el) => el.id !== toDo.id))       
    }
    const completeHandler = () => {
        setToDos(toDos.map(el => {
            if(el.id === toDo.id){
                return {
                    ...el, completed: !el.completed
                }  
            }
            return el;
        }))
    }
    return (
        <div className="todo">
           <li className={`todo-item ${toDo.completed ? "completed" : ""} `}>{text}</li>
           <button onClick={completeHandler} className="complete-btn">
               <i className="fas fa-check"></i>
            </button> 
           <button onClick={deleteHandler} className="trash-btn">
               <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default ToDo
