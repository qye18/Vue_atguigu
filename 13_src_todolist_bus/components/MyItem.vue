<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)">
        <span>{{todo.title}}</span>
      </label>
      <button @click="deleteTask(todo.id)">删除</button>
    </li>
  </div>
</template>
<script>
export default {
  name:'MyItem',
  props:['todo','checkTodo','todos','deleteTodo'],
  methods: {
    handleCheck(id){
      // 通知App组件将对应的todo对象
      this.$bus.$emit('checkTodo', id);
    },
    deleteTask(id) {
      if (confirm('确定删除吗')){
        this.$bus.$emit('deleteTodo',id)
      }
    }
  },
 
}
</script>
<style scoped>
  div {
    border: 1px solid grey;
    width: 100%;
  }
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label input {
    vertical-align: middle;
    position: relative;
    top:-1px;
    margin-right: 5px;
  }
  li button {
    float: right;
    margin-top: 6px;
    display: none;
    font-size: 10px;
    /* opacity: 0; */
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
  
  li:hover {
    background-color: rgb(209, 206, 206);
  } 
  li:hover button{
    display: block;
  }
  
  
</style>