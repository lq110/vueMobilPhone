import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {//路由缓存
        keepplive: true
      }
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue'),
      meta: {//路由缓存
        keepplive: true
      }
    },
    {
      path: '/list1',
      name: 'list1',
      component: () => import('./views/List1.vue'),
    },
    {
      path: '/list2',
      name: 'list2',
      component: () => import('./views/List2.vue'),
    },
    {
      path: '/list3',
      name: 'list3',
      component: () => import('./views/List3.vue'),
    },
    {
      path: '/Detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/Car.vue'),
    },
    {
      path: '/phone_nav',
      name: 'phone_nav',
      component: () => import('./views/phone_nav.vue'),
    },
    {
      path: '/vant',
      name: 'vant',
      component: () => import('./views/vant.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/Detail.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/demo.vue'),
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('./views/Demo1.vue'),
    },
    {
      path: '/demo_top',
      name: 'demo_top',
      component: () => import('./views/Demo_top.vue'),
    },
    {
      path: '/lq',
      name: 'lq',
      component: () => import('./views/LQ.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/Card.vue'),
    },
    {
      path: '/card1',
      name: 'card1',
      component: () => import('./views/Card_test.vue'),
    },
    {
      path: '/*',
      redirect: '/',
    },
  ],
});
