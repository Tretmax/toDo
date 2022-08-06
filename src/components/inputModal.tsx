import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../Store/actions";
import { useSelector } from "react-redux";
import { modalCancel } from "../Store/actions";




const ButtonCancel = styled.button`
  background: red;
  border-radius: 5px;
  border: 2px solid red;
  color: white;
  margin: 0 0.2em;
  padding: 0.1em 1em;`

const ButtonSave = styled.button`
  background: Blue;
  border-radius: 5px;
  border: 2px solid Blue;
  color: white;
  margin: 0 0.2em;
  padding: 0.1em 1em;`

const InputArea = styled.div`
border: 1px solid Black; 
background-color: rgb(255,255,255);
display: flex;
border-bottom: 1px solid white;
  justify-content: space-around;
  width: 60%;
  height: 40px;
  border-radius: 10px;


`



const InputModal = () => {

  const modalStatus = useSelector((state: any) => state.modalReducer)
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
      id: Math.floor(Math.random() * 1000),
      name,
      isDone: false,
      color: colorConstructor()
    }
    dispatch(addTodo(newTodo))
    dispatch(modalCancel())
    setName('')
  }
  const id = useSelector((state: any) => state.modalReducer.id)
  const edit = () => {

    dispatch(editTodo(id, name))
    dispatch(modalCancel())
    setName('')
  }

  return (
    < div className={modalStatus.active ? 'modal active' : 'modal'} onClick={() => dispatch(modalCancel())}>

      <InputArea onClick={e => e.stopPropagation()}>

        <input className='text' onChange={e => setName(e.target.value)} value={name} onKeyPress={e => e.key === 'Enter' && ('modalAdd' ? addToDo() : edit())} />
        <div className='buttons'>
          {/* if(modalStatus.type ==='modalAdd' ){ */}
          <ButtonSave onClick={() => modalStatus.type === 'modalAdd' ? addToDo() : edit()}>Save</ButtonSave>

          <ButtonCancel onClick={() => dispatch(modalCancel())}>Cancel</ButtonCancel>
        </div >
      </InputArea>

    </div >

  )
}


export default InputModal