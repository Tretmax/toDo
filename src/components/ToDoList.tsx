import { Dispatch, SetStateAction, useState } from "react"
import ToDoItem from "./ToDoItem"
import React from 'react';
import styled from 'styled-components'
import { addTodo } from "../Store/actions";
import { modalAdd } from "../Store/actions";

import { useDispatch } from "react-redux";





const ButtonAdd = styled.button`
  background: transponent;
  border-radius: 5px;
  border: 2px solid green;
  color: green;
  margin: 0 0.2em;
  padding: 0.1em 1em;`

const ButtonGet = styled.button`
  background: green;
  border-radius: 5px;
  border: 2px solid green;
  color: white;
  margin: 0 0.2em;
  padding: 0.1em 1em;`

const List = styled.div`
  margin-top: 5%;
  border: 2px solid gray;
  border-radius: 20px;
  background-color: rgba(255, 251, 251, 0.288);`




export interface Todo {
  id: number;
  name: string;
  isDone: boolean;
  color: string
}
interface SavedData {
  id: number;
  text: string;
  isCompleted: boolean
}


function ToDoList() {
  
  const dispatch = useDispatch()

  const colorConstructor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const a = 0.700

    return `rgb(${r}, ${g}, ${b}, ${a})`

  }

  const add = () => {
    dispatch(modalAdd())
  }

  const getTasks = () => {
    fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        data.forEach((el: SavedData) => {
          const newTodo: Todo =
          {
            id: el.id,
            name: el.text,
            isDone: el.isCompleted,
            color: colorConstructor()
          }
          dispatch(addTodo(newTodo))
        })
      })
  }


  return (
    <>


      <div className='addToDoItem'>
        <ButtonAdd onClick={() => add()} >Add task</ButtonAdd>
        <ButtonGet onClick={() => getTasks()}>Get tasks</ButtonGet>
      </div>
      <List>
        <ToDoItem />
      </List>
    </>
  )
}
export default ToDoList