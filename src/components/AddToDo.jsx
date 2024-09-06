import { useContext, useState } from "react"
import { ToDoContext } from "./Context"

export const AddToDo = () => { //onsubmiti onclicki tarberutyuny ena vor onsubmity enter sxmelucela ashxatum
    const{onAdd} = useContext(ToDoContext)
    const [text, setText] = useState("")
    const handleSubmit = event => {
        event.preventDefault()
        if(text.trim()) {
            onAdd(text)
            setText("")
        }
    }

    
    return <>
        <form onSubmit={handleSubmit}>  
            <input type = "text"
            value = {text}
            onChange={event => setText(event.target.value)}
            />
            <button>submit</button>
        </form>
    </>
}