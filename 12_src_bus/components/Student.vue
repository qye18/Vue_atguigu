<<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendData">发送学生信息</button>
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
  methods: {
    sendData(){
      this.$bus.$emit('sendData',this.name)  
    }
  },
}
</script>

<style scoped>
  .student{
    background-color: orange;
    padding:5px;
    margin-top: 5px;
  }
</style>