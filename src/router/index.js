import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test1 from "@/components/test.vue"
import Test2 from "@/components/test2.vue"

Vue.use(Router)
import store from '../store/'
let _Router = new Router({
  routes: [
    {
      path: '/test1',
      name: 'test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: Test2
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
