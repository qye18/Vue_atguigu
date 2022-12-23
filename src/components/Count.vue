<template>
  <div class="box">
    <h4>当前 求和为：{{ $store.state.sum }}</h4>
    <h4>当前 求和放大十倍后为：{{ $store.getters.BigSum }}</h4>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="addNumber">+</button>
    <button @click="subNumer">-</button>
    <button @click="oddAdd">当前和为奇数再加</button>
    <button @click="waitAdd">等一等再加</button>
  </div>
</template>

<script>
export default {
  name:'Count',
  data() {
    return {
      number:1,
    }
  },
  methods: {
    addNumber() {
      // this.sum += this.number;
      // this.$store.dispatch('add', this.number);
      this.$store.commit('ADD', this.number)
    },
    subNumer() {
      // this.sum -= this.number;
      // this.$store.dispatch('sub', this.number);
      this.$store.commit('SUB', this.number)
    },
    oddAdd() {
      // if (this.sum % 2) {
        // this.sum += this.number;
      // }
      this.$store.dispatch('oddAdd', this.number);
    },
    waitAdd() {
      // setTimeout(() => {
        // this.sum += this.number;
      // },500);
      this.$store.dispatch('waitAdd', this.number);
    }
  },

}
</script>
  
<style scoped>
  .box > * {
    margin-right: 5px;
  }
</style>