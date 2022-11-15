<template>
  <div>
      <MyItem 
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo"
        :todos="todos" 
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"></MyItem>
  </div>
</template>
<script>
import MyItem from './MyItem.vue'
export default {
  name:'MyList',
  components:{MyItem},
  data() {
    return {
      
    }
  },
  props:['todos','checkTodo','deleteTodo']
}
</script>
<style scoped>
  MyItem:hover {
    background-color: rebeccapurple;
  }
</style>>
</style>