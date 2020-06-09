export default {
    state: {
        todos:[]
    },
    mutations:{
        createTodo(state, payload) {
            state.todos.push({'name': payload, check: false});
        },
        removeTodo(state, payload) {
            state.todos.map((todo, key) => {
                if (key === payload) {
                    state.todos.splice(payload, 1);
                }
            })
        },
        todoLocalStorage(state) {
            localStorage.setItem('myTodo',JSON.stringify(state.todos));
        },
        completeTodo(state, payload) {
            state.todos.filter((todo, key) => {
                if (key === payload) {
                    console.log('todo.check',todo);
                    todo.check = !todo.check;
                    console.log('todo.check',todo);
                }
            })
        }
    },
    actions: {
        createTodo(state, payload) {
            state.commit('createTodo', payload);
            state.commit('todoLocalStorage');
        },
        removeTodo(state, payload) {
            state.commit('removeTodo', payload);
            state.commit('todoLocalStorage');
        },
        completeTodo(state, payload) {
            state.commit('completeTodo', payload);
            state.commit('todoLocalStorage');
        }
    },
    getters: {
        todos(state) {
            return state.todos;
        },
        todoLocalStore(state) {
            if (localStorage.getItem('myTodo')) {
                state.todos = JSON.parse(localStorage.getItem('myTodo'));
            }
        }
    }
}
