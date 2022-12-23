<template>
  <div class="container">
    <Count></Count>
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  name:'App',
  components: {Count},
  
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
