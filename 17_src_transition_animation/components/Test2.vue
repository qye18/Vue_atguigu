<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow" >你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Test',
  data() {
    return {
      isShow:true
    }
  },
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }
  .hello-enter, .hello-leave-to{
    /* transform: translateX(-100%); */
    opacity: 0;
  }
  .hello-enter-active,.hello-leave-active{
    transition: 2s linear;
  }
  .hello-enter-to, .hello-leave{
    /* transform: translateX(0); */
    opacity: 1;
  }
 

</style>