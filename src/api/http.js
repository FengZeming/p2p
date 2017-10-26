import axios from 'axios'
import {LoadingPlugin} from 'vux'

Vue.use(LoadingPlugin)


import {stringify} from 'qs'
// axios 配置
axios.defaults.timeout = 8000;
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log('请求404')
          break;
        case 500:
          console.log('请求500')
          break;
      }
    }
    console.log(error);
    return Promise.reject({code: '-100', message: '网络异常请稍后再试！'})
  }
);
// 请求时的拦截
axios.interceptors.request.use(function (config) {
  // 发送请求之前做一些处理
  return config;
}, function (error) {
  // 当请求异常时做一些处理
  return Promise.reject(error);
});

// 封装请求
export function fetch(url, options) {
  // 显示
  this.$vux.loading.show({
    text: 'Loading'
  });
  var opt = options || {};
  return new Promise((resolve, reject) => {
    axios({
      method: opt.type || 'get',
      url: url,
      params: opt.params || {},
      // 判断是否有自定义头部，以对参数进行序列化。不定义头部，默认对参数序列化为查询字符串。
      data: (opt.headers ? opt.data : stringify(opt.data)) || {},
      responseType: opt.dataType || 'json',
      // 设置默认请求头
      headers: opt.headers || {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    })
      .then(response => {
        if (response.data.code === 0) {
          resolve(response.data)
        } else if (response.data.code === '000') {
          resolve(response.data)
        } else {
          reject(response.data)

          store.commit('SET_LOADING', false)
        }
        // 隐藏
        this.$vux.loading.hide()

      })
      .catch(error => {
        console.log(error)
        reject(error)

        // 隐藏
        this.$vux.loading.hide()
      })
  })
}

export default axios
