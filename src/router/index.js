import Vue from 'vue'
import Router from 'vue-router'
import ga from 'vue-ga'
import Landing from '../pages/landing/Landing';

Vue.use(Router);
let router =  new Router({
  mode: 'history',
  base: '/landing',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      redirect: '/landing'
    }, {
      path: '/landing',
      name: 'landing',
      component: Landing,
      meta: {
        title: '双旦狂欢',
        navHidden: true,
      }
    },{
      path: '/*',
      redirect:'/landing'
    }
  ],

  scrollBehavior(to, from, savePostion) {
    return savePostion | {x: 0, y: 0}

    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   if (from.meta.keepAlive) {
    //     from.meta.savedPosition = document.body.scrollTop;
    //   }
    //   return { x: 0, y: to.meta.savedPosition ||0}ttemplate

    // }
  }
});

ga(router,'UA-110807983-1');

export default router;
