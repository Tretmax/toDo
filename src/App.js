
import { useEffect, useState } from 'react';
import './App.css';
import Header from './header';

// {localStorage.clear()}
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

  useEffect(() => {
    saveData(todos, todoStat)

  })
  return (

    <div className='App'>
      <Header stat={todoStat} />
      <main>
        <div className='addToDoItem'><input className='text' onChange={e => setName(e.target.value)} value={name} onKeyPress={e => e.key === 'Enter' && addToDo(name)} placeholder='Add new task'></   input>
          <button onClick={() => addToDo()}>Add task</button>
        </div>
        <div className='toDoList'>
          {todos.map((toDo) => {

            if (toDo.isEdit) {
              return (< div className='toDoItem'>
                <input className='text' onChange={e => setNewName(e.target.value)} value={newName} onKeyPress={e => e.key === 'Enter' && editNameTask(toDo.id)} />
                <div className='buttons'>
                  <button onClick={() => editNameTask(toDo.id)}>Save</button>
                  <button onClick={() => cancelEditTask(toDo.id)}>Cancel</button>
                </div >
              </div >)
            } else {

              return (
                <div className='toDoItem'>
                  <label className={toDo.isDone ? 'Done' : 'atWork'}>
                    <input type="checkbox"  onClick={() => checkTask(toDo.id)} checked={toDo.isDone ? true : false}/>
                    {toDo.name}
                  </label>
                  <div className='buttons'>
                    <button onClick={() => editTask(toDo.id)}>Edit</button>
                    <button onClick={() => delTask(toDo.id)}>Delete</button>
                  </div>
                </div>)

            }
          })

          }
        </div>

      </main >
    </div >

  )

}


export default App;

