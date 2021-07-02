import api from '../utils/api.js'
const initialState = {
    todos: [],
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null,
}

const actions = {
    fetch(state, data) {
        state.todos = [...data]
        window.call = false;
    },
    add({todos}, title){
        if (title){
            const data = {title, completed: false}
            const id = parseInt(todos[todos.length - 1]?.id) + 1 || 1

            todos.push({...data, id});
            api.uploadData(data).then(data => {
                return;
            });
        }
    },
    toggle({todos}, id){
        const list = todos;
        const index = list.findIndex(item => parseInt(item.id) === id);
        if (index !== -1) {
            list[index].completed = !list[index].completed;

            api.toggle(id, list[index]).then(data => {
                return;
            });
        }
    },
    toggleAll({todos}, completed){
        todos.forEach(todo => {
            todo.completed = completed;
            api.toggle(todo.id, todo).then(data => {
                return;
            })
        })
    },
    destroy({todos}, id) {
        const list = todos;
        const index = list.findIndex(item => parseInt(item.id) === id);
        if (index !== -1) {
            list.splice(index, 1);
            api.destroy(id).then(data => {
                return;
            });
        }
    },
    switchFilter(state, nextFilter) {
        state.filter = nextFilter;
    },
    clearCompleted(state) {
        const list = state.todos.filter(state.filters.completed);
        state.todos = state.todos.filter(state.filters.active);

        list.forEach(todo => {
            api.destroy(todo.id).then(data => {
                return;
            });
        })
    },
    startEdit(state, id) {
        let index = state.todos.findIndex(todo => parseInt(todo.id) === id);
        if (index !== -1) {
            state.editIndex = !state.todos[index].completed? id : null;
        }
    },
    endEdit(state, title) {
        if (state.editIndex >= 0) {
            let index = state.todos.findIndex(item => parseInt(item.id, 10) === state.editIndex);

            if(index !== -1 && title ) {
                state.todos[index].title = title;
                api.editTodo(state.editIndex, state.todos[index]).then(data => {
                    return;
                });
            } else if (!title) {
                this.destroy(state, state.editIndex);
            }

            state.editIndex = null;
        }
    },
    cancelEdit(state) {
        state.editIndex = null;
    }
}

export default function reducer(state = initialState, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}
