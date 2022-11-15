<<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>
<script>
//引入一个混合
export default {
  data(){
    return {
      name:'张三',
      sex:'male'
    }
  },
}
</script>

<style scoped>
  .demo{
    background-color: orange;
  }
</style>