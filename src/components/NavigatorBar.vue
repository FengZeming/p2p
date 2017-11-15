<template>
  <tabbar slot="bottom" style="position: fixed;">
    <tabbar-item :link="{path:'/home'}" :selected="routePath =='/home'||routePath=='/'" v-if="isP2p(routePath)">
      <img slot="icon" src="../assets/images/44.png">
      <img slot="icon-active" src="../assets/images/4.png">
      <span slot="label">排名</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/deposit'}" :selected="routePath =='/deposit'" v-if="isP2p(routePath)">
      <img slot="icon" src="../assets/images/33.png">
      <img slot="icon-active" src="../assets/images/3.png">

      <span slot="label">存管</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/trade'}" :selected="routePath =='/trade'" v-if="isP2p(routePath)">
      <img slot="icon" src="../assets/images/22.png">
      <img slot="icon-active" src="../assets/images/2.png">

      <span slot="label">成交量</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/me'}" :selected="routePath =='/me'" v-if="isP2p(routePath)">
      <img slot="icon" src="../assets/images/11.png">
      <img slot="icon-active" src="../assets/images/1.png">
      <span slot="label">我的</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/iframe'}" :selected="routePath =='/iframe'" v-if="isP2p(routePath)">
      <img slot="icon" src="../assets/images/11.png">
      <img slot="icon-active" src="../assets/images/1.png">
      <span slot="label">我的</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/sign'}" :selected="routePath =='/sign'" v-if="isSign(routePath)">
      <img slot="icon" src="../assets/images/11.png">
      <img slot="icon-active" src="../assets/images/1.png">
      <span slot="label">今日签到</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/signRanking'}" :selected="routePath =='/signRanking'" v-if="isSign(routePath)">
      <img slot="icon" src="../assets/images/11.png">
      <img slot="icon-active" src="../assets/images/1.png">
      <span slot="label">排行榜</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/signScore'}" :selected="routePath =='/sign'" v-if="isSign(routePath)">
      <img slot="icon" src="../assets/images/11.png">
      <img slot="icon-active" src="../assets/images/1.png">
      <span slot="label">脑容量</span>
    </tabbar-item>


  </tabbar>
</template>
<script>
  import {
    Tabbar,
    TabbarItem
  } from 'vux';

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    data() {
      return {}
    },
    methods: {
      routerSelected(path) {
        return this.$router.path === path;
      },
      isP2p(pageName) {
        return ['/', '/home', '/deposit', '/trade', '/me', '/iframe'].includes(pageName);
      },
      isSign(pageName) {
        return ['/sign', '/signRanking', '/signScore'].includes(pageName);
      }
    },
    computed: {
      routePath() {
        return this.$route.path;
      }


    }
  }

</script>

<style scoped>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label span {
    color: #080363 !important;
  }

  img {
    max-width: 19px;
    max-height: 19px;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }
  span{
    font-size: 11px;
  }
</style>
