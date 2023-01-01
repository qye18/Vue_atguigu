<template>
  <div>
    <button>原生按钮</button>    
    <input type="text">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div class="block">
      <span class="demonstration">默认</span>
      <date-picker1
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </date-picker1>
    </div>
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return {
      value1:''
    }
  }
}
</script>
<style>

</style>
