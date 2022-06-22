
import './App.css';
import Header from './header';
import ToDoItem from './TodoItem';

const todos = [
  {
    name: '123',
    isDone: false
  },
  {
    name: '321',
    isDone: true
  },
  {
    name: 'dsdf',
    isDone: false
  },
  {
    name: 'svdsvds',
    isDone: false
  },
]






function App() {
  return (
    <div>
      <Header />
      <main>
        <ul>
        {todos.map ((toDo)=><ToDoItem toDo = {toDo} />)        }
        </ul>

        <button>Add task</button>
      </main>
    </div>
  )
}

export default App;
