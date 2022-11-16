<template>
  <div v-show="total">
    <label>
      <input type="checkbox" v-model="isAll">
      <span>已完成{{finishedTodo}}/全部{{total}}</span>
    </label>
    <button @click="removeAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name:'MyFooter',
  data() {
    return {
    }
  },
  computed:{
    total:{
      get(){
        return this.todos.length
      }
    },
    finishedTodo:{
      get(){
        return this.todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0);
      }
    },
    isAll:{
      get(){
        return this.total === this.finishedTodo && this.total > 0
      },
      set(checked) {
        this.$bus.$emit('checkAllTodos', checked)
        // this.checkAllTodos(checked);
      }
    }
  },
  methods: {
    removeAll(){
      this.$bus.$emit('removeAll');
    },
  },
  props:['todos']
}
</script>
<style scoped>
  div {
    border-top: 1px solid grey;
    padding-top: 10px;
  }
  input {
    margin-right: 5px;
  }
  
</style>