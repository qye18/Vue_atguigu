<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- to路径传参的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
        <!-- to路径传参的对象写法 -->
        <router-link :to="{
          name:'detail',
          query:{
            ...m
          }
        }">
          {{m.title}}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Message',
  data() {
    return {
      messages:[
        {id:'001', title:'消息1'},
        {id:'002', title:'消息2'},
        {id:'003', title:'消息3'},
      ]
    }
  },
  mounted(){
    // console.log(this.$route);
  }
}
</script>

<style>

</style>