<template>
  <div>
    <h4>Home组件的内容</h4>
    <router-link class="navi" active-class="highlight" to="/home/news">News</router-link>
    <router-link class="navi" active-class="highlight" to="/home/message">Message</router-link>
    <keep-alive include="News">
      <router-view class="content-view"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name:'Home',
}
</script>

<style scoped>
  .navi {
    margin-right: 20px;
  }
  .highlight {
    background-color: aqua;
  }

a {
  text-decoration: none;  
}
</style>