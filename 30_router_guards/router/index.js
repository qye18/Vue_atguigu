import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

const router = new VueRouter({
  routes:[
    {
      name:'home',
      path:'/home',
      meta: {
        title:'home'
      },
      component:Home,
      children:[
        {
          name:'message',
          path:'message',
          component:Message,
          meta:{
            title:'message'
          },
          children:[
            {
              name:'detail',
              path:'detail',
              component:Detail,
              meta: {
                title:'detail'
              },
              props({query}){
                return {
                  id:query.id,
                  title:query.title
                }
              }
            }
          ]},
        {
          name:'news',
          path:'news',
          meta:{
            isAuth:true,
            title:'news'
          },
          component:News}
      ]
    },
    {
      name:'about',
      path:'/about',
      meta:{title:'about'},
      component:About},
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to.meta.isAuth);
  if (to.meta.isAuth) {
    if (localStorage.getItem('student') === 'zhangsan') {
      next();
    } else {
      alert('you do not have permission to visit')
    }
  } else {
    next();
  }
})

router.afterEach((to,from) => {
  document.title = to.meta.title || 'Undefined Title';
})
export default router;