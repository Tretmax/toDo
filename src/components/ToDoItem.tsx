import { Dispatch, SetStateAction, useState } from "react"
import React from 'react';
import styled from 'styled-components'
import { deleteTodo } from "../Store/actions";
import { useDispatch } from "react-redux";
import { chekTodo } from "../Store/actions";
import { ToDoStat } from "../Store/statReducer";


const ButtonDel = styled.button`
  background: red;
  border-radius: 5px;
  border: 2px solid red;
  color: white;
  margin: 0 0.2em;
  padding: 0.1em 1em;`

const ButtonCancel = ButtonDel

const ButtonEdit = styled.button`
  background: transponent;
  border-radius: 5px;
  border: 2px solid Blue;
  color: Blue;
  margin: 0 0.2em;
  padding: 0.1em 1em;`

const ButtonSave = styled.button`
  background: Blue;
  border-radius: 5px;
  border: 2px solid Blue;
  color: white;
  margin: 0 0.2em;
  padding: 0.1em 1em;`

const ItemArea = styled.div`
  margin-left: 2%;
  margin-top: 2%;
  display: flex;
border-bottom: 1px solid white;
  justify-content: space-between;
  width: 95%;
  background: ${(props: { color: string; }) => props.color}

  `



interface Todo {
    id: number;
    name: string;
    isDone: boolean;
    isEdit: boolean;
    color: string
}
interface props {
    todos: [Todo];
    setTodos: Dispatch<[Todo]>;
    todoStat: ToDoStat;
    setTodoStat: Dispatch<SetStateAction<ToDoStat>>
}


function ToDoItem({ todos, setTodos, todoStat, setTodoStat }: props) {
const dispatch = useDispatch ()

    const checkTask = (id: number) => {
        dispatch (chekTodo (id))

    }

    // const checkTask = (id: number) => {
    //     const copy = [...todos]
    //     const current = copy.find(toDo => toDo.id === id)
    //     current.isDone = !current.isDone
    //     copy.sort((a, b) => {
    //         if (a.isDone === false && b.isDone === true) return -1;
    //         if (a.isDone === true && b.isDone === false) return 1;
    //         else return 0;
    //     })

    //     setTodos(copy)

    // }

    const editTask = (id: number) => {
        const copy = [...todos]
        const current = copy.find(toDo => toDo.id === id)
        current.isEdit = !current.isEdit
        setTodos(copy)

    }

    const delTask = (id: number) => {
       dispatch (deleteTodo (id))
    }


    // const delTask = (id: number) => {
    //     const copy = [...todos]
    //     const current = copy.findIndex(toDo => toDo.id === id)
    //     copy.splice(current, 1)
    //     setTodos(copy)
    //     setTodoStat({
    //         created: todoStat.created,
    //         updated: todoStat.updated,
    //         deleted: (todoStat.deleted + 1)
    //     })
    // }


    const [newName, setNewName] = useState('')
    const editNameTask = (id: number) => {
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

    const cancelEditTask = (id: number) => {
        const copy = [...todos]
        const current = copy.find(toDo => toDo.id === id)
        current.isEdit = false
        setNewName('')
        setTodos(copy)
    }

    return (

        <div>
            {todos.map((toDo: Todo) => {

                if (toDo.isEdit) {
                    return (< ItemArea color={toDo.color}>
                        <input className='text' onChange={e => setNewName(e.target.value)} value={newName} onKeyPress={e => e.key === 'Enter' && editNameTask(toDo.id)} />
                        <div className='buttons'>
                            <ButtonSave onClick={() => editNameTask(toDo.id)}>Save</ButtonSave>
                            <ButtonCancel onClick={() => cancelEditTask(toDo.id)}>Cancel</ButtonCancel>
                        </div >
                    </ItemArea >)
                } else {

                    return (
                        <ItemArea color={toDo.color}>
                            <label className={toDo.isDone ? 'Done' : 'atWork'}>
                                <input type="checkbox" onClick={() => checkTask(toDo.id)} checked={toDo.isDone ? true : false} />

                                {toDo.name}

                            </label>
                            <div className='buttons'>
                                <ButtonEdit onClick={() => editTask(toDo.id)}>Edit</ButtonEdit>
                                <ButtonDel onClick={() => delTask(toDo.id)}>Delete</ButtonDel>
                            </div>
                        </ItemArea>)

                }
            })

            }
        </div>

    )
}
export default ToDoItem

