
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import ToDoList from './components/ToDoList';
import React from 'react';
import { BooleanLiteral } from 'typescript';
import { ToDoStat } from './Store/statReducer';

// { localStorage.clear() }

const getSaveTodos = () => {
  const saveTodos = localStorage.getItem('saveTodos')
  if (saveTodos === null) {
    return []

  } else {
    return JSON.parse(saveTodos)
  }
}

const getSaveStat = () => {
  const saveStat = localStorage.getItem('saveStat')
  if (saveStat === null) {
    return {
      created: 0,
      updated: 0,
      deleted: 0
    }

  } else {
    return JSON.parse(saveStat)
  }
}


const saveData = (todos:[], stat: ToDoStat) => {
  localStorage.setItem('saveTodos', JSON.stringify(todos))
  localStorage.setItem('saveStat', JSON.stringify(stat))

}






function App() {




  const [todos, setTodos] = useState (getSaveTodos())

  const [todoStat, setTodoStat] = useState<ToDoStat>(getSaveStat())


  // console.log(11)


  useEffect(() => {
    saveData(todos, todoStat)

  })
  return (

    <div className='App'>
      <Header todoStat={todoStat} />
      <main>
        <ToDoList todos={todos} setTodos={setTodos} todoStat={todoStat} setTodoStat={setTodoStat} />
      </main >
    </div >

  )

}


export default App;
