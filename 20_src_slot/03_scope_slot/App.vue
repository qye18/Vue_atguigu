<template>
  <div class="container">
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
        <div class="foot">
          <a href="http://www.atguigu.com">单机游戏</a>
          <a href="http://www.atguigu.com">网络游戏</a>
        </div>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
        <div class="foot">
          <a href="http://www.atguigu.com">单机游戏</a>
          <a href="http://www.atguigu.com">网络游戏</a>
        </div>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li style="list-style-type:circle;" v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
        <div class="foot">
          <a href="http://www.atguigu.com">单机游戏</a>
          <a href="http://www.atguigu.com">网络游戏</a>
        </div>
      </template>
    </Category>
</div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name:'App',
  components: {Category},
  
}
</script>
<style>
  .container, .foot {
    display: flex;
    justify-content: space-around;
  }
  
  h4 {text-align: center; padding-top: 10px;}
 
  ul {
    padding-bottom: 10px;
  }
  img, video {
    width: 100%;
  }
  img {height: 100px;}

</style>
