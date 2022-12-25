<template>
  <div>
    <h4 :style="{opacity}">新闻报道</h4>
    <ul>
      <li>新闻1 <input type="text"></li>
      <li>新闻2 <input type="text"></li>
      <li>新闻3 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'News',
  data() {
    return {
      opacity:1
    }
  },
  activated() {
    this.timer = setInterval(() => {
      console.log('挂载');
      this.opacity -= 0.01;
      if (this.opacity <= 0 ) {
        this.opacity = 1;
      }
    }, 20);
  },
  deactivated() {
    clearInterval(this.timer);
  },
}
</script>

<style>

</style>