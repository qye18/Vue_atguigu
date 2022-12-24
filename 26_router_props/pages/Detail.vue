<template>
    <ul>
      <li>消息编号：{{ $route.query.id }}</li>
      <li>消息标题：{{ $route.query.title }}</li>
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