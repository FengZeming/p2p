// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {cookie} from 'vux'
import * as config from './api/http'


/* ----------- Config ---------- */
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:7890/';
axios.defaults.baseURL = '/api';
import VueScroller from 'vue-scroller'

Vue.use(VueScroller);
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)

/* ----------- Config ---------- */
Vue.config.productionTip = true;


// 省略...
router.afterEach(route => {
  // 从路由的元信息中获取 title 属性
  if (route.name) {
    document.title = route.name

    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      const hackIframe = document.createElement('iframe')
      hackIframe.style.display = 'none';
      hackIframe.src = '/robots.txt?r=' + Math.random()

      document.body.appendChild(hackIframe)

      setTimeout(_ => {
        document.body.removeChild(hackIframe)
      }, 300)
    }
  }

});

router.beforeEach((to, from, next) => {
  console.log( ' unionid  '+cookie.get('unionid'))
  if (!cookie.get('unionid') && !config.dev) {
    // http://service.wx.prguanjia.com/redpack/auth?callback=
    location.href = 'http://service.wx.prguanjia.com/account/auth?callback=' + location.href;
    return;
  }
  next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

//
// //设置微信分享全局函数
// const http = axios;
// let wx =WechatPlugin;
// console.log(wx);
// Vue.prototype.wxShare = function (title, desc,link,imgUrl,url) {
//   http.get(url).then(res => {// 获得签名配置
//     var Data =res.body.data;
//     // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，
//     wx.config({
//       debug:true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//       appId: Data.appid,   // 必填，公众号的唯一标识
//       timestamp: Data.timestamp, // 必填，生成签名的时间戳
//       nonceStr: Data.nonceStr,   // 必填，生成签名的随机串
//       signature: Data.signature, // 必填，签名，见附录1
//       jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//     });
//   });
//   wx.ready(() => {
//     // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，
//     // 则可以直接调用，不需要放在ready函数中。
//     wx.onMenuShareAppMessage({ // 分享给朋友
//       title: title, // 分享标题
//       desc: desc,   // 分享描述
//       link:link,   // 分享链接 默认以当前链接
//       imgUrl: imgUrl,// 分享图标
//       // 用户确认分享后执行的回调函数
//       success: function () {
//         console.log('分享成功');
//       },
//       // 用户取消分享后执行的回调函数
//       cancel: function () {
//         console.log('分享到朋友取消');
//       }
//     });
//     //分享到朋友圈
//     wx.onMenuShareTimeline({
//       title: title, // 分享标题
//       desc: desc,
//       link:link,
//       imgUrl: imgUrl,// 分享图标
//       // 用户确认分享后执行的回调函数
//       success: function () {
//         console.log("分享成功");
//       },
//       // 用户取消分享后执行的回调函数
//       cancel: function () {
//         console.log('分享到朋友圈取消');
//       }
//     });
//     wx.error(function(res){
//       console.log(res);// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
//     });
//   });
// };
