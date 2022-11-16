<template>
  <div>
      <MyItem 
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo"
        :todos="todos"></MyItem>
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
</style>>
</style>