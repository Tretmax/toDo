
import { useState } from 'react';
import './App.css';
import Header from './header';


function App() {

  const [todos, setTodos] = useState([])

  const [todoStat, setTodoStat] = useState({
    created: 0,
    updated: 0,
    deleted: 0
  })


  const addToDo = () => {


    setTodos([

      {
        id: new Date(),
        name,
        isDone: false,
        isEdit: false
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

  const [name, setName] = useState('')


  const checkTask = (id) => {
    const copy = [...todos]
    const current = copy.find(toDo => toDo.id === id)
    current.isDone = !current.isDone
    copy.sort((a, b) => (a.isDone - b.isDone))
    setTodos(copy)

  }

  const editTask = (id) => {
    const copy = [...todos]
    const current = copy.find(toDo => toDo.id === id)
    current.isEdit = !current.isEdit
    setTodos(copy)

  }

  const delTask = (id) => {
    const copy = [...todos]
    const current = copy.findIndex(toDo => toDo.id === id)
    copy.splice(current, 1)
    setTodos(copy)
    setTodoStat({
      created: todoStat.created,
      updated: todoStat.updated,
      deleted: (todoStat.deleted + 1)

    })

  }

  const [newName, setNewName] = useState('')
  const editNameTask = (id) => {
    const copy = [...todos]
    const current = copy.find(toDo => toDo.id === id)
    current.name = newName
    current.isEdit = !current.isEdit
    setTodoStat({
      created: todoStat.created,
      updated: (todoStat.updated + 1),
      deleted: todoStat.deleted
    })
    setNewName('')
    setTodos(copy)
  }

  const cancelEditTask = (id) => {
    const copy = [...todos]
    const current = copy.find(toDo => toDo.id === id)
    current.isEdit = false
    setNewName('')
    setTodos(copy)
  }

  return (
    <div className='App'>
      <Header stat={todoStat} />
      <main>
        <input onChange={e => setName(e.target.value)} value={name} onKeyPress={e => e.key === 'Enter' && addToDo(name)} placeholder='Add new task'></   input>
        <button onClick={() => addToDo()}>Add task</button>

        {todos.map((toDo) => {

          if (toDo.isEdit) {
            return (< p >
              <input onChange={e => setNewName(e.target.value)} value={newName} onKeyPress={e => e.key === 'Enter' && editNameTask(toDo.id)} />
              <button onClick={() => editNameTask(toDo.id)}>Save</button>
              <button onClick={() => cancelEditTask(toDo.id)}>Cancel</button>
            </p >)
          } else {

            return (<p>
              <input type="checkbox" onChange={() => checkTask(toDo.id)} />
              {toDo.name}
              <button onClick={() => editTask(toDo.id)}>Edit</button>
              <button onClick={() => delTask(toDo.id)}>Delete</button>
            </p>)
          }
        })
        }





      </main>
    </div>

  )

}


export default App;

