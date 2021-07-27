function TaskAdder(props) {    

    return (
        <div className="todo-add-container">
            <div>Add a new task</div>
            <input type="text" id="add-new-todo-input"></input>
            <button id="add" onClick={addTask}>Add</button>
        </div>
    )    

    function addTask(e) {

        const input = document.getElementById("add-new-todo-input")
        const text = input.value
        input.value = ""

        props.newState([text, ...props.tasks])
    }
}   

export default TaskAdder