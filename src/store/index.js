// the file is to create a store

import Vuex from 'vuex'
import Vue from 'vue'
import {nanoid} from 'nanoid'
Vue.use(Vuex);

const actions = {
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
  },
  ADDPERSON(state, value) {
    state.persons.unshift({id:nanoid(), name:value})
  }
};
const state = {
  sum:0,
  school:'atguigu',
  student:'张三',
  persons:[{id:'001',name:'张三'}]
};

const getters = {
  BigSum(state) {
    return state.sum * 10
  }
}

export default new Vuex.Store({actions, mutations, state, getters})
