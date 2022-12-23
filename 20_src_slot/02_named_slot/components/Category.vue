<template>
  <div class="cateogry">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，等组件的使用者进行填充 -->
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props:['title']
}
</script>
  
<style scoped>
  * {border: 0px; margin: 0px; box-sizing: border-box;}
  .cateogry {
    width: 200px;
    height: 300px;
    background-color: skyblue;
  }
  .cateogry h3 {
    margin: 20px 0;
    text-align: center;
    background-color: orange;
  }

</style>