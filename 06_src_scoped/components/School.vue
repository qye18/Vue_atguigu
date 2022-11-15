<<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2 class="atguigu">学校地址{{address}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'atguigu',
      address:'北京'
    }
  },
}
</script>

<style scoped>
  .demo {
    background-color: skyblue;
  }
</style>