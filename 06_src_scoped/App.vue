<<template lang="">
  <div class="demo">
    <School></School>
    <Student></Student>
  </div>
</template>
<script>
  import Student from './components/Student'
  import School from './components/School'
  export default {
    name:'App',
    components:{Student,School},
    
  }
</script>

<style lang="less">
  .demo{
    background-color: pink;
    .atguigu{
      font-size: 40px;
    }
  }
</style>
