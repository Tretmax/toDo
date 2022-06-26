
import { useState } from 'react';
import './App.css';
import Header from './header';
import ToDoItem from './TodoItem';

function App() {


  function refreshStat(todos) {
    let atWork = todos.length;
    let complete = 0

    todos.forEach(el => {
      if (el.isDone) {
        complete = complete + 1
      }
      
    });
    setTodoStat ({
      total: todos.length,
      atWork: (atWork - complete),
      complete: (complete)
    })

  }





  const [todos, setTodos] = useState([])

  const [todoStat, setTodoStat] = useState({
    total: 0,
    atWork: 0,
    complete: 0
  })


  const addToDo = () => {
    console.log (todos)
    setTodos([
      ...todos,
      {
        name,
        isDone: false
      }
    ])
    console.log (todos)
    
    refreshStat(todos)
  }
  console.log (todos)
  const [name, setName] = useState('')

// console.log (todoStat)


  return (
    <div>
      <Header stat={todoStat} />
      <main>

        {todos.map((toDo) => <ToDoItem toDo={toDo} />)}


        <input onChange={e => setName(e.target.value)} value={name} ></input> <button onClick={async() => {await addToDo();refreshStat(todos);}}>Add task</button>
      </main>
    </div>
  )
}

export default App;



