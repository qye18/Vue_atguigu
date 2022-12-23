<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width:100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">welcome</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">Loading...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg.length">{{info.errMsg}}</h1>
  </div>
  <!-- <ul id="myList">
    <li class="user-info">
      <img src="../../01_src_CLI/assets/logo.png" alt="vue logo">
      <p>xxxxxx</p>
    </li>
    <li class="user-info">
      <img src="../../01_src_CLI/assets/logo.png" alt="vue logo">
      <p>xxxxxx</p>
    </li>
    <li class="user-info">
      <img src="../../01_src_CLI/assets/logo.png" alt="vue logo">
      <p>xxxxxx</p>
    </li>
    <li class="user-info">
      <img src="../../01_src_CLI/assets/logo.png" alt="vue logo">
      <p>xxxxxx</p>
    </li>
    <li class="user-info">
      <img src="../../01_src_CLI/assets/logo.png" alt="vue logo">
      <p>xxxxxx</p>
    </li>
  </ul> -->
</template>

<script>
export default {
  data() {
    return {
      info:{
        isFirst:true,
        isLoading:false,
        errMsg:'',
        users: []
      }
      
    }
  },
  mounted() {
    this.$bus.$on('updateListData', (dataObj)=> {
      console.log("list组件,收到数据:",dataObj);
      this.info = {...this.info,...dataObj};
    })
  }
}
</script>

<style scoped>
  .album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}

	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
  /* * {margin:0; padding: 0}
  #myList {
    display: flex;
    border: 1px solid rgb(240, 240, 240);
    width: 85%;
    margin: 0 auto;
    
    align-content: center;
    flex-wrap: wrap;
    
  }
  #myList .user-info {
    width: 33%;
    flex-direction: column;
    list-style: none;
    display: flex;
    justify-content: center;
    align-content: center;
    
  }
  #myList .user-info > * {
    width: 100%;
  }

  #myList .user-info img {
    width: 50px;
    height: 50px;
  } */

</style>