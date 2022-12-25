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
          <button @click="pushShow(m)">push查看</button>
          <button @click="replaceShow(m)">replace查看</button>
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
  methods:{
    pushShow(m){
      this.$router.push({
        name:'detail',
          query:{
            ...m
          }
      })
    },
    replaceShow(m){
      this.$router.replace({
        name:'detail',
          query:{
            ...m
          }
      })
    }
  },
  mounted(){
    // console.log(this.$route);
  }
}
</script>

<style>

</style>