<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)">
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input 
        type="text" 
        v-show="todo.isEdit" 
        :value="todo.title" 
        @blur="doneEdit(todo,$event)"
        ref="inputTitle">
      </label>
      <button @click="deleteTask(todo.id)">删除</button>
      <button v-show="!todo.isEdit" @click="EditTask(todo)">编辑</button>
    </li>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
  name:'MyItem',
  props:['todo','checkTodo','todos','deleteTodo'],
  methods: {
    handleCheck(id){
      // 通知App组件将对应的todo对象
      // this.$bus.$emit('checkTodo', id);
      pubsub.publish('checkTodo',id)
    },
    deleteTask(id) {
      if (confirm('确定删除吗')){
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo',id)
      }
    },
    EditTask(todo) {
      // this.todo.isEdit = true;
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        console.log('first time');
        this.$set(todo,'isEdit',true)
      }
      this.$nextTick(() => this.$refs.inputTitle.focus())
    },
    doneEdit(todo,e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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
    margin-right: 5px;
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