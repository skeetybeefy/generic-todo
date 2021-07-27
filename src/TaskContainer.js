import SingleTask from "./SingleTask"

function TaskContainer(props) {

    return props.tasks.map((task) => {
        return <SingleTask key={task.id} id={task.id} text={task.text} newState={props.newState} tasks={props.tasks}></SingleTask>
    })
}

export default TaskContainer