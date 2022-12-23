<template>
  <div class="box">
    <h4>当前 求和为：{{sum}}</h4>
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
      sum:0
    }
  },
  methods: {
    addNumber() {
      this.sum += this.number;
    },
    subNumer() {
      this.sum -= this.number;
    },
    oddAdd() {
      if (this.sum % 2) {
        this.sum += this.number;
      }
    },
    waitAdd() {
      setTimeout(() => {
        this.sum += this.number;
      },500);
    }
  }

}
</script>
  
<style scoped>
  .box > * {
    margin-right: 5px;
  }
</style>