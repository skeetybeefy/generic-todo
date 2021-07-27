import {useState} from "react"
import TaskContainer from './TaskContainer';
import TaskAdder from './TaskAdder'

function App() {

    let [state, changeState] = useState(["test", "nexttest"])

    return (
        <>
        <TaskAdder tasks={state} newState={changeState}></TaskAdder>
        <TaskContainer tasks={state} newState={changeState}></TaskContainer>
        </>
    )
}

export default App