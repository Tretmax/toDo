import { useState } from "react"
import ToDoItem from "./ToDoItem"



function ToDoList({todos,setTodos,todoStat,setTodoStat}) {

  const [name, setName] = useState('')

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


  const getTasks = () => {
    fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const copy = [...todos]

        data.forEach(el => {
          copy.push(
            {
              id: el.id,
              name: el.text,
              isDone: el.isCompleted,
              isEdit: false
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
        <button onClick={() => addToDo()}>Add task</button>
        <button onClick={() => getTasks()}>Get tasks</button>
      </div>
      <div className='toDoList'>
        <ToDoItem todos={todos} setTodos={setTodos} todoStat={todoStat} setTodoStat={setTodoStat}/>
      </div>
    </>
  )
}
export default ToDoList