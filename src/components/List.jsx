import { useContext } from 'react'
import {ToDoItem} from './ToDoItem'
import { ToDoContext } from './Context'
export const List = () => {
    const{todos, onUpdate, currentFilter} = useContext(ToDoContext)

    let filtered = todos
    if(currentFilter == "active") {
        filtered = todos.filter(todo => !todo.completed)
    } else if(currentFilter == "completed") {
        filtered = todos.filter(todo => todo.completed)  
    }



    return <>
        <p>Showing: <strong>{currentFilter}</strong></p>
            {filtered.map(todo => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
    </>
}