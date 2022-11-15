<<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址{{address}}</h2>
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
  methods: {
    handleStudentData(val){
      console.log(val);
    }
  },
  mounted(){
    this.$bus.$on('sendData', this.handleStudentData)
  },
  beforeDestroy(){
    this.$off('sendData')
  }
}
</script>

<style scoped>
  .demo {
    background-color: skyblue;
    padding:5px;
  }
</style>