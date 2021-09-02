import {connect} from 'react-redux';
import actions from '../redex/Actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        doneTasks: () => dispatch(actions.filterDone()),
        notDoneTasks: () => dispatch(actions.filterNotDone()),
        showTasks: () => dispatch(actions.showAll())
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        filteredTodos: state.filteredTodos
    }
}

const Filter = (props) => {
    return(
        <div className="container w-50 mx-auto my-4 d-flex flex-row justify-content-center">
            <button type="button" className='btn btn-primary mx-3' onClick={props.showTasks}>Show All</button>
            <button type="button" className="btn btn-success mx-3" onClick={props.doneTasks}>Done</button>
            <button type="button" className="btn btn-danger mx-3" onClick={props.notDoneTasks}>Not Done</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);