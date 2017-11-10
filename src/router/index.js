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
import Attention from '../pages/attention/Attention.vue'
import Sign from '../pages/signPages/main/Sign.vue'
import SignRanking from '../pages/signPages/signRanking/SignRanking.vue'
import SignScore from '../pages/signPages/signScore/SignScore.vue'
import Qrcode from '../pages/qrcode/Qrcode.vue'
import Shake from '../pages/game/shake/Shake.vue'
import Test from '../pages/test/Test.vue'

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
    },
    {
      path: '/coupons',
      name: '我的优惠券',
      component: Coupons,
      meta: {
        keepAlive: true,
        navHidden: true
      }
    }, {
      path: '/me',
      name: '我的',
      component: Me,
      meta: {
        keepAlive: true,
        navHidden: false
      }
    },
    {
      path: '/attention',
      name: '我的关注',
      component: Attention,
      meta: {
        keepAlive: true,
        navHidden: true
      }
    },
    {
      path: '/sign',
      name: '签到',
      component: Sign,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/signRanking',
      name: '排行榜',
      component: SignRanking,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/signScore',
      name: '脑容量',
      component: SignScore,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/qrcode',
      name: '二维码',
      component: Qrcode,
      meta: {
        navHidden: true,
      }
    },{      path: '/test',
      name: '测试',
      component: Test,
      meta: {
        navHidden: true,
      }
    },{
      path: '/shake',
      name: '摇一摇',
      component: Shake,
      meta: {
        navHidden: true,
      }
    },
    {
      path: '/*',
      name: '首页',
      component: Home
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
