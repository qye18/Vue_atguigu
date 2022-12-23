<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="../logo.png" alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观看</h4>
      </template>
    </Category>
</div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name:'App',
  components: {Category},
  data() {
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['超级玛丽','食之契约','英雄联盟','绝地求生'],
      films:['《阿利艾蒂》','《龙猫》','《千与千寻》','《起风了》'],
    }
  }
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
