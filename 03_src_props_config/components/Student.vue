<<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age+1}}</h2>
  </div>
</template>
<script>
export default {
  name:'School',
  data(){
    return {
      msg:'a student at atguigu'
    }
  },
  // props:['name','sex','age'] //简单接收

  // 接收同时对数据类型进行限制
  /* props:{
    name:String,
    age:Number,
    sex:String
  } */
  props:{
    name:String,
    required:true
  },
  age:{
    type:Number,
    default:99
  },
  sex:{
    type:String,
    required:true
  }
}
</script>