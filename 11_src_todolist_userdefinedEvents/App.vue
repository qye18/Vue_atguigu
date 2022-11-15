<template>
  <div class="demo">
    <MyHeader @addTodo="addTodo"></MyHeader>
    <MyList 
      :todos="todos" 
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"></MyList>
    <MyFooter 
      :todos="todos"
      @removeAllTodos="removeAllTodos"
      @checkAllTodos="checkAllTodos"></MyFooter>
  </div>
</template>
<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
  export default {
    components:{MyHeader,MyList,MyFooter},
    data() {
      return {
        todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      //勾选/取消勾选
      checkTodo(id){
        this.todos.forEach((todo) => {
          if(todo.id === id) todo.done = !todo.done 
        })
      },
      deleteTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(index,1)
      },
      removeAllTodos(){
        this.todos = this.todos.filter(todo => !todo.done)
      },
      checkAllTodos(isChecked){
        this.todos.forEach(todo => {
          todo.done = isChecked;
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value) {
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .demo {
    width: 80%;
    min-width: 300px;
    max-width: 500px;
    margin: 10px auto;
    padding: 5px;
    border: 1px solid grey;
  }

  .demo > * {
    margin-bottom: 10px;
    width: 100%;
  }

  button {
    float: right;
    cursor: pointer;
    background-color: red; 
    border: none;
    border-radius: 3px;
    color:white;
    padding: 3px 10px;
    vertical-align: middle;
  }
  button:active {
    background-color: rgb(168, 22, 22);
  }
  
</style>
