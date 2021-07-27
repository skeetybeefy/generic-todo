function TaskAdder(props) {

    return (
        <div className="todo-add-container">
            <div>Add a new task </div>
            <input type="text" id="add-new-todo-input"></input>
            <button id="add" onClick={addTask}>Add</button>
        </div>
    )    

    function addTask(e) {

        const input = document.getElementById("add-new-todo-input")
        const text = input.value
        input.value = ""

        props.newState([
            {id: props.tasks.length === 0 ? 0 : props.tasks[0].id + 1,
            text: text}, ...props.tasks])
    }
}   

export default TaskAdder