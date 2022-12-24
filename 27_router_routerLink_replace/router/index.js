import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

export default new VueRouter({
  routes:[
    {
      name:'home',
      path:'/home',
      component:Home,
      children:[
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'detail',
              path:'detail',
              component:Detail,

              // props的第一种写法，值为对象，对象中的所有键值都会以props的形式传给Detail组件
              // props:{a:1,b:'data'},

              // props的第二种写法，布尔值为真，则把该路由组件收到的所有params参数以props的形式传给Detail组件
              // props:true,

              // props的第三章写法，值为函数，参数为该组件的$route
              props({query}){  // 解构赋值   {query:{id,title}} 多重解构赋值。可以但没必要，维护的时候一眼看不懂
                return {
                  id:query.id,
                  title:query.title
                }
              }
            }
          ]},
        {
          path:'news',
          component:News}
      ]
    },
    {
      path:'/about',
      component:About},
  ]
})