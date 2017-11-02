import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Trade from '@/pages/trade/Trade'
import Deposit from '@/pages/deposit/Deposit'
import Me from '@/pages/me/Me'
import PlatDetail from '../pages/detail/PlatDetail.vue'
import Search from '../pages/search/Search.vue';
import Evaluate from '../pages/evaluate/Evaluate.vue'
import Coupons from '../pages/coupons/Coupons.vue'
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: '/',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: '前100排名',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/home',
      name: '前100排名',
      component: Home
    }, {

      path: '/deposit',
      name: '存管',
      component: Deposit

    }, {
      path: '/trade',
      name: '交易量',
      component: Trade
    }, {
      path: '/detail',
      name: '平台详情',
      component: PlatDetail,
      meta: {
        keepAlive: false,
        navHidden: true
      }
    },
    {
      path: '/search',
      name: '搜索',
      component: Search,
      meta: {
        keepAlive: true,
        navHidden: true
      }
    },
    {
      path: '/evaluate',
      name: '评分',
      component: Evaluate,
      meta: {
        keepAlive: false,
        navHidden: true
      }
    }, {
      path: '/coupons',
      name: '我的优惠券',
      component: Coupons,
      meta: {
        keepAlive: true,
        navHidden: true
      }
    },
    {
      path: '/*',
      name: '我的',
      component: Me
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
    //   return { x: 0, y: to.meta.savedPosition ||0}
    // }
  }
})
