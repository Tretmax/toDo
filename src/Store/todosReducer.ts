import { addTodo } from "../Store/actions";
import { Todo } from "../components/ToDoList"


interface Action {
    type: string
    id: number;
    name: string;
    isDone: boolean;
    isEdit: boolean;
    color: string
}


const defaultTodos:any  = [] 


const todosReducer = (state = defaultTodos, { type, id, name, isDone, isEdit, color }: Action) => {
    

    switch (type) {
        case "addTask":
            state = [{
                id: id,
                name: name,
                isDone: isDone,
                isEdit: isEdit,
                color: color
            }, ...state
            ]
            state.sort((a:Todo, b:Todo) => {
                if (a.isDone === false && b.isDone === true) return -1;
                if (a.isDone === true && b.isDone === false) return 1;
                else return 0;
            })
            console.log(state)
            return state
            

        case "delTask":
            const currentDel = state.findIndex((toDo: Todo) => toDo.id === id)
            state.splice(currentDel, 1)

            return state

        case "chekTask":
            const currentChek = state.find((toDo: Todo) => toDo.id === id)
            currentChek.isDone = !currentChek.isDone
            state.sort((a:Todo, b:Todo) => {
                if (a.isDone === false && b.isDone === true) return -1;
                if (a.isDone === true && b.isDone === false) return 1;
                else return 0;
            })
               
        return state

           


        // case "deleteTask":
        //     return { ...state, del: state.deleted + 1 }
        default:
            return state
    }
}
export default todosReducer