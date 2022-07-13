import { useState } from "react"
import ToDoItem from "./ToDoItem"
import React from 'react';
import styled from 'styled-components'


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


  function ToDoList({todos,setTodos,todoStat,setTodoStat}) {

  const [name, setName] = useState('')

  const colorConstructor = ()=>{
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    const a = 0.700

    return `rgb(${r}, ${g}, ${b}, ${a})`

  }
 
  const addToDo = () => {


    setTodos([

      {
        id: new Date(),
        name,
        isDone: false,
        isEdit: false,
        color: colorConstructor ()
      },
      ...todos
    ])
    setName('')
    setTodoStat({
      created: (todoStat.created + 1),
      updated: todoStat.updated,
      deleted: todoStat.deleted

    })

  }


  const getTasks = () => {
    fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const copy = [...todos]

        data.forEach(el => {
          copy.unshift(
            {
              id: el.id,
              name: el.text,
              isDone: el.isCompleted,
              isEdit: false,
              color: colorConstructor ()
            },
          )
          copy.sort((a, b) => (a.isDone - b.isDone))
          setTodoStat({
            created: (todoStat.created + data.length),
            updated: todoStat.updated,
            deleted: (todoStat.deleted)
          })
          setTodos(copy)
        })
      })
  }

  return (
    <>
      <div className='addToDoItem'><input className='text' onChange={e => setName(e.target.value)} value={name} onKeyPress={e => e.key === 'Enter' && addToDo(name)} placeholder='Add new task'></   input>
        <ButtonAdd onClick={() => addToDo()}>Add task</ButtonAdd>
        <ButtonGet onClick={() => getTasks()}>Get tasks</ButtonGet>
      </div>
      <List>
        <ToDoItem todos={todos} setTodos={setTodos} todoStat={todoStat} setTodoStat={setTodoStat}/>
      </List>
    </>
  )
}
export default ToDoList