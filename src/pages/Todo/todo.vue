<template>
    <div class="container">
        <h1>Todo</h1>
        <div class="todo">
            <div class="todo-list">
                <div class="todo-list__header">
                    <div class="todo-list__header-title">Список задач</div>
                    <input class="todo-list__header-search" v-model="search" type="search" placeholder="Поиск">
                </div>
                <div class="todo-item" v-for="(todo, key) of searchTodo" :key="key">
                    <div class="todo-item__checked" @click.prevent="completeTodo(key)" :class="todo.check ? 'check' : ''"></div>
                    <div class="todo-item__name">{{todo.name}}</div>
                    <div class="todo-item__remove" @click="removeTodo(key)">X</div>
                </div>
            </div>
            <div class="todo-create">
                <input type="text" class="todo-create__input" v-model="todo" placeholder="Название задачи">
                <button class="todo-create__btn" type="submit" @click="createTodo">Создать</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              todo: '',
              search: ''
          }
        },
        computed: {
            todos() {
                return this.$store.getters.todos;
            },
            todoLocalStore() {
                return this.$store.getters.todoLocalStore;
            },
            searchTodo() {
                return this.$store.getters.todos.filter(name => {
                    return name.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        methods: {
            createTodo() {
                this.$store.dispatch('createTodo', this.todo);
                this.todo = '';
            },
            removeTodo(key) {
                this.$store.dispatch('removeTodo', key);
            },
            completeTodo(key) {
                this.$store.dispatch('completeTodo', key)
            }
        }
    }
</script>

<style scoped>
    .todo{
        display: flex;
        justify-content: space-between;
    }
    .todo-list{
        width: 60%;
    }
    .todo-list__header{
        border: 1px solid #000;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .todo-list__header-search{
        padding: 5px 10px;
    }
    .todo-item{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid #dedede;
    }
    .todo-item__checked{
        position: relative;
        width: 10px;
        height: 10px;
    }
    .todo-item__checked.check + .todo-item__name{
        text-decoration: line-through;
    }
    .todo-item__checked:before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 16px;
        height: 16px;
        border: 1px solid #000;
        border-radius: 5px;
    }
    .todo-item__checked.check:after{
        position: absolute;
        content: '';
        background: #ff000c;
        left: 3px;
        top: 3px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
    }
    .todo-item__name{
        width: 90%;
    }
    .todo-item__remove{
        cursor: pointer;
    }
    .todo-create{
        width: 35%;
    }
    .todo-create__input{
        display: block;
        width: 100%;
        padding: 10px 20px;
        margin-bottom: 20px;
    }
    .todo-create__btn{
        display: block;
        width: 100%;
    }
</style>
