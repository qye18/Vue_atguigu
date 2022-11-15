<<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
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
    sendStudentName(){
      // 触发Student组件实例身上的atguigu事件
      this.$emit('atguigu',this.name,123,666)
    },
    unbind(){
      this.$off('atguigu') //解绑一个自定义事件
      // this.$off(['atguigu','demo']) // 解绑多个自定义事件，需要写到一个数组里
      // this.$off() // 解绑所有自定义事件
      // 当一个组件被销毁后（this.$destroy()），他身上所有的自定义事件都不存在了
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