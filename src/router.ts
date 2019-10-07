import Vue from 'vue';
import Router from 'vue-router';
import { Home,About } from './pages/home/index';


Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }
  ]
});



/**
 * 按需加载
 * 
 */
// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
