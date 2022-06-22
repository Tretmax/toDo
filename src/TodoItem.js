
const ToDoItem = function (toDo){
    console.log (toDo)
return ((<li>{toDo.toDo.name}  <button>Edit</button><button>Delete</button></li>)  
)
}

export default ToDoItem