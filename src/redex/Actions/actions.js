const actions = {
    addTodo: function(description) {
        return{
            type: 'ADD_TODO',
            description: description,
        }
    },

    completeTodo: function(id){
        return{
            type: 'COMPLETE_TODO',
            id: id,
        }
    },

    updateTodo: function(description, id){
        return{
            type: 'UPDATE_TODO',
            id: id,
            description: description,
        }
    },

    filterDone: function(){
        return{
            type: 'FILTER_DONE'
        }
    },

    filterNotDone: function(){
        return{
            type: 'FILTER_NOT_DONE'
        }
    },

    showAll: function(){
        return{
            type: 'SHOW_ALL'
        }
    },

    deleteTodo: function(id){
        return{
            type: 'DELETE_TODO',
            id: id,
        }
    }
}

export default actions;