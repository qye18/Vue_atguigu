<template>
  <div>
    <input type="text" @keyup.enter="add" v-model="todoName" placeholder="输入一个任务，按下回车确认">
  </div>
</template>
<script>
import {nanoid} from 'nanoid'
export default {
  name:'MyHeader',
  data() {
    return {
      todoName:'',
    }
  },
  methods:{
    add(e){
      if (!this.todoName.trim()) return alert('输入不能为空')
      const todoObj = {id:nanoid(), title:this.todoName, done:false}
      this.$bus.$emit('addTodo',todoObj)
      // this.addTodo(todoObj);
      this.todoName = ''
    },
    
  },
  // props:['addTodo']
}
</script>

<style scoped>
  input[type="text"] {
    padding: 5px;
    width: 100%;
  }  
  input:focus {
    outline: none;
    border-color: rgba(82,168,236,0.8);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(82,168,236,0.8);
  }
</style>