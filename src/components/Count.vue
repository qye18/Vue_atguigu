<template>
  <div class="box">
    <h4>当前 求和为：{{ sum }}</h4>
    <h4>当前 求和放大十倍后为：{{ BigSum }}</h4>
    <h4>学校: {{ school }} 学生: {{ student }}</h4>
    <h4 style="color:red;">Person组件的总人数是: {{ persons.length }}</h4>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="addNumber(number)">+</button>
    <button @click="subNumer(number)">-</button>
    <button @click="oddAdd(number)">当前和为奇数再加</button>
    <button @click="waitAdd(number)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name:'Count',
  data() {
    return {
      number:1,
    }
  },
  computed:{
    ...mapState(['sum', 'school', 'student','persons']),
    ...mapGetters(['BigSum'])
  },
  methods: {
    // addNumber() {
    //   this.$store.commit('ADD', this.number)
    // },
    // subNumer() {
    //   this.$store.commit('SUB', this.number)
    // },
    ...mapMutations({addNumber:'ADD', subNumer:'SUB'}),

    // oddAdd() {
    //   this.$store.dispatch('oddAdd', this.number);
    // },
    // waitAdd() {
    //   this.$store.dispatch('waitAdd', this.number);
    // }
    ...mapActions(['oddAdd', 'waitAdd']),
  },

}
</script>
  
<style scoped>
  .box > * {
    margin-right: 5px;
  }
</style>