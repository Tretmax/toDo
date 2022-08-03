import { Dispatch, SetStateAction, useState } from "react"
import ToDoItem from "./ToDoItem"
import React from 'react';
import styled from 'styled-components'
import { addTodo } from "../Store/actions";
// import inputModal from "./Modal";
import todosReducer from "../Store/todosReducer";
import { useDispatch } from "react-redux";
import {ToDoStat} from "../Store/statReducer";



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
  isEdit: boolean;
  color: string
}
interface SavedData {
  id: number;
  text: string;
  isCompleted: boolean
}

interface props {
  todos: [Todo];
  setTodos: Dispatch<[Todo]>;
  todoStat: ToDoStat;
  setTodoStat: Dispatch<SetStateAction<ToDoStat>>
}




function ToDoList({ todos, setTodos, todoStat, setTodoStat }: props) {
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const colorConstructor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const a = 0.700

    return `rgb(${r}, ${g}, ${b}, ${a})`

  }

  const addToDo = () => {

    const newTodo =
    {
      id: Math.floor(Math.random()*1000),
      name,
      isDone: false,
      isEdit: false,
      color: colorConstructor()
    }
    dispatch(addTodo(newTodo))


  }

  // const addToDo = () => {


  //   setTodos(

  //     [{
  //       id: new Date(),
  //       name,
  //       isDone: false,
  //       isEdit: false,
  //       color: colorConstructor()
  //     },
  //       ...todos
  //     ])

  //   setName('')
  //   setTodoStat({
  //     created: (todoStat.created + 1),
  //     updated: todoStat.updated,
  //     deleted: todoStat.deleted

  //   })

  // }


  // const getTasks = () => {
  //   fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {

  //       const copy = [...todos]

  //       data.forEach((el: SavedData) => {
  //         copy.unshift(
  //           {
  //             id: el.id,
  //             name: el.text,
  //             isDone: el.isCompleted,
  //             isEdit: false,
  //             color: colorConstructor()
  //           },
  //         )
  //         copy.sort((a, b) => {

  //           if (a.isDone === false && b.isDone === true) return -1;
  //           if (a.isDone === true && b.isDone === false) return 1;
  //           else return 0;

  //         })
  //         setTodoStat({
  //           created: (todoStat.created + data.length),
  //           updated: todoStat.updated,
  //           deleted: (todoStat.deleted)
  //         })
  //         setTodos(copy)
  //       })
  //     })
  // }




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
            isEdit: false,
            color: colorConstructor()
          }
          dispatch(addTodo(newTodo))
        })
      })
  }


  return (
    <>


      <div className='addToDoItem'>
        <input className='text' onChange={e => setName(e.target.value)} value={name} onKeyPress={e => e.key === 'Enter' && addToDo()} placeholder='Add new task'></   input>
        <ButtonAdd onClick={() => addToDo()} >Add task</ButtonAdd>
        <ButtonGet onClick={() => getTasks()}>Get tasks</ButtonGet>
      </div>
      <List>
        <ToDoItem todos={todos} setTodos={setTodos} todoStat={todoStat} setTodoStat={setTodoStat} />
      </List>
    </>
  )
}
export default ToDoList