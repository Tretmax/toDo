import { Todo } from "../components/ToDoList"



export const addTodo = (newTodo:Todo) => {
       return  {
       
        type: "addTask",
        id: newTodo.id ,
        name: newTodo.name,
        isDone: newTodo.isDone,
        isEdit: newTodo.isEdit,
        color: newTodo.color
    }
}

export const deleteTodo = (id:number) => {
    return {
        type: "delTask",
        payload: id
    }
}

export const editTodo = (id:number) => {
    return {
        type: "updateTask",
        payload: id
    }
}

export const chekTodo = (id:number) => {
    return {
        type: "chekTask",
        payload: id
    }
}

export const saveEditTodo = (text:string, id:number) => {
    return {
        type: "saveTodo",
        payload: {
            text,
            id
        }
    }
}

