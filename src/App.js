
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import ToDoList from './components/ToDoList';

{ localStorage.clear() }
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


const saveData = (todos, stat) => {
  localStorage.setItem('saveTodos', JSON.stringify(todos))
  localStorage.setItem('saveStat', JSON.stringify(stat))



}

function App() {



  const [todos, setTodos] = useState(getSaveTodos())

  const [todoStat, setTodoStat] = useState(getSaveStat())





  useEffect(() => {
    saveData(todos, todoStat)

  })
  return (

    <div className='App'>
      <Header stat={todoStat} />
      <main>
        <ToDoList todos={todos} setTodos={setTodos} todoStat={todoStat} setTodoStat={setTodoStat}/>
      </main >
    </div >

  )

}


export default App;