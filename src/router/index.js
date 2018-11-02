import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import store from '../store/'
let _Router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: ()=>import("../views/login.vue")
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: ()=>import("../views/mainPage.vue"),
      children:[
        {
          path:"/mainPage/banjiquan",
          name:"banjiquan",
          component:()=>import("../views/banjiquan.vue")
        }
      ]
    }
  ]
})

const infoPages = [
  "/test1",
  "/test2"
]

_Router.beforeEach((to, from, next) => {
  
  if(infoPages.indexOf(to.path)>-1){
    store.commit("SHOW_INFO_PAGE");
  }
  next();
})
export default _Router;
