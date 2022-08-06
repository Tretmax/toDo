

export interface ToDoStat {
    created: number;
    updated: number;
    deleted: number
  }

  interface Action {
    type: string;
    payload: any;
  }
  const getSaveStat = () => {
    const saveStat = localStorage.getItem('store')
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

 const defaultState: ToDoStat= {
    created: 0,
    updated: 0,
    deleted:0
}

 const statReducer = (state = defaultState, action:Action) =>{
    switch (action.type) {
        case "addTask":
            return {...state, created: state.created + 1 }
        case "updateTask":
            return {...state, updated: state.updated + 1 }
        case "delTask":
            return {...state, deleted: state.deleted + 1}
        default:
            return state
    }
} 
export default statReducer