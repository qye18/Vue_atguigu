export default {
  namespaced:true,
  actions:{
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
  },
  mutations:{
    ADD(state,value) {
      // console.log(a,value);
      state.sum += value;
    },
    SUB(state, value) {
      state.sum -= value
    },
  },
  state:{
    sum:0,
    school:'atguigu',
    student:'张三',
  },
  getters:{
    BigSum(state) {
      return state.sum * 10
    }
  },
}