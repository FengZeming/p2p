<template>
  <div id="app" style="height: 100%;margin-bottom: 50px;">
    <view-box class="box-container">
      <!--exclude="detail"-->
      <keep-alive>
        <router-view class="router-view" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view class="router-view" v-if="!$route.meta.keepAlive"></router-view>

    </view-box>
    <navigator-bar slot="bottom" style="position: fixed;" v-show="navHidden"></navigator-bar>
  </div>
</template>

<script>
  import {
    ViewBox,
    XHeader,
    Loading
  } from 'vux';
  import NavigatorBar from './components/NavigatorBar';

  export default {
    name: 'app',
    components: {
      ViewBox,
      XHeader,
      Loading,
      NavigatorBar
    },
    data() {
      return {}
    },
    computed: {
      navHidden() {
        return !this.$route.meta.navHidden;
      }
    }
  }
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  @import "./style/font.less";

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: white;
    margin: 0;
    padding: 0;
    height: 100%;

  }

  .box-container {
    width: 100%;
    flex: 1;
  }

  #app {
    margin-bottom: 0 !important;
  }

  #scrollUpIco {
    display: none
  }

</style>
