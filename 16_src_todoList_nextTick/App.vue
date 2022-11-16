<template>
  <div class="demo">
    <MyHeader></MyHeader>
    <MyList :todos="todos"></MyList>
    <MyFooter 
      :todos="todos"
      :checkAllTodos="checkAllTodos"></MyFooter>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
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
      checkTodo(_,id){
        this.todos.forEach((todo) => {
          if(todo.id === id) todo.done = !todo.done 
        })
      },
      deleteTodo(_,id) {
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
      },
      updateTodo(id, title) {
        this.todos.forEach(todo => {
          if (todo.id === id) {
            todo.title = title
          }
        })
      }
    },
    mounted(){
      this.$bus.$on('removeAll', this.removeAllTodos)
      this.$bus.$on('addTodo',this.addTodo)
      this.$bus.$on('checkAllTodos', this.checkAllTodos)
      // this.$bus.$on('checkTodo',this.checkTodo)
      // this.$bus.$on('deleteTodo', this.deleteTodo)
      // pubsub.subscribe('checkTOdo',(pubName, data) => {})
      this.pid_checkTodo = pubsub.subscribe('checkTodo', this.checkTodo)
      this.pid_deleteTodo = pubsub.subscribe('deleteTodo',this.deleteTodo)
      this.$bus.$on('updateTodo',this.updateTodo)
    },
    beforeDestroy(){
      this.$bus.$off('removeAll')
      this.$bus.$off('addTodo')
      this.$bus.$off('checkAllTodos')
      // this.$bus.$off('checkTodo',this.checkTodo)
      // this.$bus.$off('deleteTodo', this.deleteTodo)
      pubsub.unsubscribe(this.pid_checkTodo)
      pubsub.unsubscribe(this.pid_deleteTodo)
      this.$bus.$off('updateTodo')
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
