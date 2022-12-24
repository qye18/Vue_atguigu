import VueRouter from "vue-router";
import About from '../components/About'
import Home from '../components/Home'

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home},
    {
      path:'/about',
      component:About},
  ]
})