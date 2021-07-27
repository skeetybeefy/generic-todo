function SingleTask(props) {
    return (
        <div className="task-container">
            <div className="task-inner-text">{props.text}</div>
            <button type="text" className="remove-btn" onClick={removeTask}>Remove</button> 
        </div>
    )

    function removeTask() {
        props.newState(props.tasks.filter((task) => {
            return task.id !== props.id ? true : false
        }))
    }
}

export default SingleTask