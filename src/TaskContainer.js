import SingleTask from "./SingleTask"

function TaskContainer(props) {

    return props.tasks.map((taskText) => {
        return <SingleTask key={taskText} text={taskText} newState={props.newState} tasks={props.tasks}></SingleTask>
    })
}

export default TaskContainer