<<template lang="">
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方dom元素</button>
    <School></School>
  </div>
</template>
<script>
  import School from './components/School'
  export default {
    name:'App',
    components:{School},
    data() {
      return {
        msg:'欢迎！'
      }
    },
    methods: {
      showDOM(){
        console.log(this.$refs.title);
      }
    },
  }
</script>

