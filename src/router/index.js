import Vue from 'vue'
import Router from 'vue-router'
import ShuangDan from '../pages/activity/ShuangDan';
import ShuangDanResult from '../pages/activity/ShuangDanResult';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: '/activity',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      redirect: '/shuangdan'
    }, {
      path: '/shuangdan',
      name: 'shuangdan',
      component: ShuangDan,
      meta: {
        title: '双旦狂欢',
        navHidden: true,
      }
    },{
      path: '/result',
      name: 'result',
      component: ShuangDanResult,
      meta: {
        title: '领奖',
        navHidden: true,
      }
    }, {
      path: '/*',
      redirect:'/shuangdan'
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
})
