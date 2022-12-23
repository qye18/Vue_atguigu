<template>
  <div>
    <h4>人员列表</h4>
    <h4 style="color:red;">Count组件求和为: {{ sum }}</h4>
    <input placeholder="请输入名字" type="text" v-model="name">
    <button @click="addPerson(name)">添加</button>
    <ul>
      <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name:'Person',
  data(){
    return {
      name:''
    }
  },
  computed:{
    ...mapState(['sum','persons']),

  },
  methods:{
    ...mapMutations({addPerson:'ADDPERSON'})
  }
}
</script>

<style>

</style>