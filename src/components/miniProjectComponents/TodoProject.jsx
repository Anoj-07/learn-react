import { useState } from "react";


function TodoProject() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        // const newTasks = {
        //     task: newTask
        // }

        if (newTask.trim() != "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTask(t => t.filter((_, idx) => idx !== index))

    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];

            setTask(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];

            setTask(updatedTask);
        }
    }
    
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a Task..."
                    value={newTask}
                    onChange={handleInputChange}
                />

                <button
                    className="add-button"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

            <ol>
                {task.map((tasks, index) =>
                    <li key={index}>
                        <span className="text">{tasks}</span>

                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >delete
                        </button>

                        <button
                            className="up-button"
                            onClick={() => moveTaskUp(index)}
                        >up button
                        </button>

                        <button
                            className="down-button"
                            onClick={() => moveTaskDown(index)}
                        >down button
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TodoProject