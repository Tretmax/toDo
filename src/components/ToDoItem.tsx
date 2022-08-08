import React from 'react';
import styled from 'styled-components'
import { deleteTodo } from "../Store/actions";
import { useDispatch } from "react-redux";
import { chekTodo } from "../Store/actions";
import { useSelector } from "react-redux";
import { modalUpdate } from "../Store/actions";



const ButtonDel = styled.button`
  background: red;
  border-radius: 5px;
  border: 2px solid red;
  color: white;
  margin: 0 0.2em;
  padding: 0.1em 1em;`



const ButtonEdit = styled.button`
  background: transponent;
  border-radius: 5px;
  border: 2px solid Blue;
  color: Blue;
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
    color: string
}

function ToDoItem() {
    const dispatch = useDispatch()
    const todos = useSelector((state: any) => state.todosReducer)


    const checkTask = (id: number) => {
        dispatch(chekTodo(id))
    }



    const editTask = (id: number) => {
        dispatch(modalUpdate(id))
    }

    const delTask = (id: number) => {

        dispatch(deleteTodo(id))
    }

    console.log(todos)
    return (

        <div>
            
            {todos.map((toDo: Todo) => {

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

            })

            }
        </div>

    )
}
export default ToDoItem

