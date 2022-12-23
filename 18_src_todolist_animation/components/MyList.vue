<template>
  <div>
      <transition-group name="todo" appear>
        <MyItem 
          v-for="todo in todos" 
          :key="todo.id" 
          :todo="todo"
          :todos="todos">
        </MyItem>
      </transition-group>
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
  props:['todos']
}
</script>
<style scoped>
  MyItem:hover {
    background-color: rebeccapurple;
  }

  .todo-enter, .todo-leave-to {
    transform: translateX(-100%);
  }
  .todo-leave, .todo-enter-to {
    transform: translateX(0);
  }
  .todo-enter-active, .todo-leave-active {
    transition: 0.5s linear;
  }
 
</style>>
</style>