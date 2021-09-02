import { ADD_TODO, COMPLETE_TODO, UPDATE_TODO, FILTER_DONE, FILTER_NOT_DONE, DELETE_TODO, SHOW_ALL } from '../Constatns/actions-types'
// import { COMPLETE_TODO } from '../Constatns/actions-types'
// import { UPDATE_TODO } from "../Constatns/actions-types"
// import { FILTER_DONE } from '../Constatns/actions-types'
// import { FILTER_NOT_DONE } from "../Constatns/actions-types"
// import { DELETE_TODO } from '../Constatns/actions-types'

function getId(state){
    return state.todos.reduce((maxID, todo) => {
        return Math.max(todo.id, maxID);
    }, -1) + 1;
}

const initialState = {
    todos: [],
    filteredTodos: []
}

const rootReducer = (state = initialState, action) => {
    console.log("state: ", state, "action: ", action);
    switch(action.type){
        case ADD_TODO:
            state.todos.push({
                description: action.description,
                isDone: false,
                id: getId(state)
            })
            return {
                todos: [...state.todos],
                filteredTodos: state.filteredTodos
            }
        case COMPLETE_TODO: 
            return{
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, updated: false, isDone: !todo.isDone} : todo),
                filteredTodos: state.filteredTodos
            } 
        case UPDATE_TODO:
            return{
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, updated: true, description: action.description} : todo),
                filteredTodos: state.filteredTodos
            } 
        case FILTER_DONE:
            return{
                todos: state.todos,
                filteredTodos: state.todos.filter(todo => todo.isDone === true)
            }  
        case FILTER_NOT_DONE:
            return{
                todos: state.todos,
                filteredTodos: state.todos.filter(todo => todo.isDone === false)
            }
        case SHOW_ALL:
            return{
                todos: state.todos,
                filteredTodos: state.todos
            }    
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.id),
                filteredTodos: state.filteredTodos
            }
        default: 
            return state;
    }
}

export default rootReducer;