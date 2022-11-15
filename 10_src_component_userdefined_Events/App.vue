<<template lang="">
  <div class="app">
    <h1>{{msg}}</h1>
    <School :getSchoolName="getSchoolName"></School>
    <!-- <Student v-on:atguigu="getStudentName"></Student> -->
    <!-- native: 给组件添加原生dom事件click，如果不加native，click就被当成了自定义事件，需要在Student用emit -->
    <Student ref="student" @click.native="demo"></Student>
  </div>
</template>
<script>
  import Student from './components/Student'
  import School from './components/School'
  export default {
    name:'App',
    components:{Student,School},
    data() {
      return {
        msg:'你好啊'
      }
    },
    methods: {
      getSchoolName(name) {
        console.log('App收到了学校名',name);
      },
      getStudentName(name,...params){
        console.log('App收到了学生名', name,params);
      },
      demo(){
        console.log(123);
      }
    },
    mounted(){
      // this.$refs.student.$on('atguigu',this.getStudentName)
      this.$refs.student.$once('atguigu',this.getStudentName)
    }
  }
</script>

<style>
  .app{
    padding:5px;
    background-color: grey;
  }
</style>
