import {useState} from "react"
import TaskContainer from './TaskContainer';
import TaskAdder from './TaskAdder'

function App() {

    let [state, changeState] = useState([
        {id: 2, text: "Buy some bread"},
        {id: 1, text: "Meet with Andrew"}
    ])

    return (
        <>
        <TaskAdder tasks={state} newState={changeState}></TaskAdder>
        <TaskContainer tasks={state} newState={changeState}></TaskContainer>
        </>
    )
}

export default App