
import { Todo } from "../components/ToDoList"



export const addTodo = (newTodo: Todo) => {
    return {

        type: "addTask",
        id: newTodo.id,
        name: newTodo.name,
        isDone: newTodo.isDone,
        color: newTodo.color
    }
}

export const deleteTodo = (id: number) => {
    return {
        type: "delTask",
        id: id
    }
}

export const editTodo = (id: number, name:string) => {
    return {
        type: "updateTask",
        id: id,
        name: name
    }
}

export const chekTodo = (id: number) => {
    return {
        type: "chekTask",
        id: id
    }
}

export const modalAdd = () => {
    return {
        type: "modalAdd"        
    }
}

export const modalUpdate = (id:number) => {
    return {
        type: "modalUpdate",
        id:id
    }
}

export const modalCancel = () => {
    return {
        type: "modalCancel"
    }
}