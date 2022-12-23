<template>
  <section class="jumbotron">
    <h3 class="jumbotron-header">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord">
      &nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
  <!-- <div id="search">
    <div class="search-box">
      <p>Search Github Users</p>
      <div class="search-content">
        <input type="text" placeholder="enter the name you search">
        <button>Search</button>
      </div>
    </div>
  </div> -->
</template>
<script src="https://cdn.bootcdn.net/ajax/libs/axios/1.2.0/axios.js"></script>
<script>
import axios from '../../node_modules/axios'
export default {
  data(){
    return {
      keyWord: ''
    }
  },
  methods:{
    searchUsers(){
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})

      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          response => {
            console.log(response.data.items);
            this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
          },
          error => {
            console.log(error.message);
            this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})

          }
        )
      
    }
  }
}
</script>

<style scoped>
  /* * {
    margin: 0; padding: 0; box-sizing: border-box;
  } 
  #search {
    width: 80%;
    height: 120px;
    margin: 0 auto;
    padding: 40px 30px;
    background-color: rgb(240, 240, 240);
  }
  #search .search-box p {
    font-size: 20px;
    margin-bottom: 3px;
  } 
  #search .search-box input, #search .search-box button {
    font-size: 11px;
  }

  #search .search-box input {
    margin-right: 5px;
  }
  
  #search .search-box button {
    padding: 0px 3px;
  } */
</style>