import { useState } from 'react';
import {connect} from 'react-redux';
import actions from '../redex/Actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        addTask: todo => {
            dispatch(actions.addTodo(todo));
            dispatch(actions.showAll());}
    }
}

const AddTask = (props) => {
    const [title, setTitle] = useState('');


    const handleAdd = (e) => {
        e.preventDefault();
        if(title !== ''){
            props.addTask(title);
            //reset input box
            setTitle('');
        }
    }

    return(
        <div className="input-group mb-3 w-50">
            <input type="text" className="form-control" placeholder="Title..." aria-label="Title" aria-describedby="basic-addon2" required={true} value={title} onChange={e => setTitle(e.target.value)} />
            <div className="input-group-append">
                <button type="button" className="btn btn-outline-primary" onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(AddTask);