import { useState } from 'react';

const Task = (props) => {
    const [title, setTitle] = useState(props.todo.description);
    const [completed, setComplete] = useState(props.todo.isDone);
    //const [checked, setCheck] = useState(false);

    const handleComplete = () => {
        //props.actions.completeTodo(props.todo.id);
        props.completeTask(props.todo.id);
        //setCheck(!checked);
    }

    const handleUpdate = (title) => {
        if(title !== ''){
            setTitle(title);
            props.updateTask(title, props.todo.id);
        }
    }

    const handleDelete = () => {
        //props.actions.deleteTodo(props.todo.id);
        props.deleteTask(props.todo.id);
    }

    return(
        <li className="list-group-item">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text h-100">
                        <input type="checkbox" aria-label="Check Item" defaultChecked={completed} required={true} onClick={handleComplete} />
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Task item" value={title} onChange={e => handleUpdate(e.target.value)} />
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-primary" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default Task;