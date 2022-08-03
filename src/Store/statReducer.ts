

export interface ToDoStat {
    created: number;
    updated: number;
    deleted: number
  }

  interface Action {
    type: string;
    payload: any;
  }

 const defaultState: ToDoStat= {
    created: 0,
    updated: 0,
    deleted:0
}

 const statReducer = (state = defaultState, action:Action) =>{
    switch (action.type) {
        case "addTask":
            return {...state, add: state.created + 1 }
        case "updateTask":
            return {...state, up: state.updated + 1 }
        case "deleteTask":
            return {...state, del: state.deleted + 1}
        default:
            return state
    }
} 
export default statReducer