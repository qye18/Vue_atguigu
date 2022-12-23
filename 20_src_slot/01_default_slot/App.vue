<template>
  <div class="container">
    <Category title="美食">
      <img src="../logo.png" alt="">
    </Category>
    <Category title="游戏">
      <ul class="content-list">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
  .container {
    display: flex;
    justify-content: space-around;
  }
  
  img, video {
    width: 100%;
  }
</style>
