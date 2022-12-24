<template>
    <ul>
      <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
    </ul>
</template>

<script>
export default {
  name:'Detail',
  data(){
    return {
      details:[
        {
          id:'001',
          detail:'详细信息1'
        }
      ]
    }
  },
  props:['id', 'title']
}
</script>

<style>

</style>