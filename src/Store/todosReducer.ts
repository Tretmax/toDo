
import { Todo } from "../components/ToDoList";



interface Action {
    type: string
    id: number;
    name: string;
    isDone: boolean;
    isEdit: boolean;
    color: string
}



const defaultTodos: any = []


const todosReducer = (state = defaultTodos, { type, id, name, isDone, color }: Action) => {


    switch (type) {
        case "addTask":
            state = [{
                id: id,
                name: name,
                isDone: isDone,
                color: color
            }, ...state
            ]
            state.sort((a: Todo, b: Todo) => {
                if (a.isDone === false && b.isDone === true) return -1;
                if (a.isDone === true && b.isDone === false) return 1;
                else return 0;
            })

            return state


        case "delTask":
            const newState = [...state]
            const currentDel = state.findIndex((toDo: Todo) => toDo.id === id)
            newState.splice(currentDel, 1)
            // console.log(state)
            return newState

        case "chekTask":
            const newState1 = [...state]
            const currentChek = newState1.find((toDo: Todo) => toDo.id === id)
            currentChek.isDone = !currentChek.isDone
            newState1.sort((a: Todo, b: Todo) => {
                if (a.isDone === false && b.isDone === true) return -1;
                if (a.isDone === true && b.isDone === false) return 1;
                else return 0;
            })

            return newState1

        case "updateTask":
            const newState2 = [...state]
            const currentTask = newState2.find((toDo: Todo) => toDo.id === id)
            currentTask.name = name

            return newState2

        default:
            return state
    }
}
export default todosReducer