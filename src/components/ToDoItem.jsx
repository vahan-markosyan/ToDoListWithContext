import { useContext } from "react"
import { ToDoContext } from "./Context"

export const ToDoItem = ({todo}) => {
    const{onUpdate, onDelete} = useContext(ToDoContext)
    return <div className={"todo " + (todo.completed ? "done" : "")}>
        <p>{todo.text}</p>
        <button onClick={() => onDelete(todo.id)}>delete</button>
        <button onClick={() => onUpdate(todo.id)}>{todo.completed?"CANCEL":"COMPLETE"}</button>
    </div>
}