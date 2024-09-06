import './App.css'
import { useState } from "react"
import { ToDoList } from './components/ToDoList'
import { ToDoContext } from './components/Context'
export default function App(){

  const [todos, setTodos] = useState([
    {id:101, text:"Go for a walk", completed: false},
    {id:102, text:"Have a coffee", completed: true},
    {id:103, text:"Do workout", completed: false},
])

const [currentFilter, setCurrentFilter] = useState("all")


const handleAdd = text => {
    setTodos([...todos, {text, completed:false, id:Date.now()}])
}

const handleUpdate = id => {
    setTodos(todos.map(todo => 
        todo.id != id ? todo : {...todo, completed: !todo.completed}
    ))
  }

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id != id))
  }
  
  return <div>
  
<ToDoContext.Provider value={{ todos, currentFilter, onSet: setCurrentFilter,  onAdd: handleAdd, onUpdate: handleUpdate, onDelete: handleDelete }}>

<ToDoList/>

</ToDoContext.Provider>

  </div>
}

