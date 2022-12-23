// the file is to create a store

import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const actions = {
  /* 'add' and 'sub' are not necessary, and can be ignored since there is no backend 
    and it does not handle anything except commiting to mutations. by removing these two, need to change methods used in Count
    from dispatch to commit
  */
  // add(context, value){
  //   // console.log(a,b);
  //   context.commit('ADD', value);
  // },
  // sub(context, value) {
  //   context.commit('SUB', value);
  // },
  oddAdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('ADD', value)
    }
  },
  waitAdd(context, value) {
    setTimeout(() => {
      context.commit('ADD', value)
    }, 500);
  }
};
const mutations = {
  ADD(state,value) {
    // console.log(a,value);
    state.sum += value;
  },
  SUB(state, value) {
    state.sum -= value
  }
};
const state = {
  sum:0,
  school:'atguigu',
  student:'张三'
};

const getters = {
  BigSum(state) {
    return state.sum * 10
  }
}

export default new Vuex.Store({actions, mutations, state, getters})
