import {nanoid} from 'nanoid'
import axios from 'axios'
export default {
  namespaced:true,
  actions:{
    addPersonServer(context){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
      .then(
        response => {
          context.commit('ADDPERSON',response.data)
        },
        error => {
          console.log(error.message);
        }
      )
    }
  },
  mutations:{
    ADDPERSON(state, value) {
      state.persons.unshift({id:nanoid(), name:value})
    }
  },
  state:{
    persons:[{id:'001',name:'张三'}]
  },
  getters:{},
}