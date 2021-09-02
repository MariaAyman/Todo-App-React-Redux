import Task from './Task';
import { connect } from "react-redux";
import actions from '../redex/Actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        completeTask: id => dispatch(actions.completeTodo(id)),
        updateTask: (title, id) => dispatch(actions.updateTodo(title, id)),
        deleteTask: id => {dispatch(actions.deleteTodo(id));
                            dispatch(actions.showAll())}
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        filteredTodos: state.filteredTodos
    }
}

const ListTask = (props) => {
    return(
        <ul className="list-group w-50">
            {props.filteredTodos.map(todo => {
                return <Task key={todo.id} todo={todo} deleteTask={props.deleteTask} updateTask={props.updateTask} completeTask={props.completeTask} />
            })}
        </ul>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);