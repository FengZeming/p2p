import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import Trade from '@/pages/trade/Trade'
import Deposit from '@/pages/deposit/Deposit'
import Me from '@/pages/me/Me'
import PlatDetail from '../pages/detail/PlatDetail.vue'

Vue.use(Router);
export default new Router({
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
      name: 'Home',
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
      path: '/me',
      name: '我的',
      component: Me
    }, {
      path: '/detail',
      name: '平台详情',
      component: PlatDetail,
      meta: {
        keepAlive: false,
        navHidden:true
      }
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savePostion) {
    return savePostion | {x: 0, y: 0}
  }
})
