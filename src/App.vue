<template>
  <div id="app" style="height: 100%;display: flex;flex-direction: column;">
    <view-box class="box-container">
      <keep-alive exclude="detail">
        <router-view class="router-view" ></router-view>
      </keep-alive>
    </view-box>
    <navigator-bar v-show="navHidden"></navigator-bar>
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
      return {
        showMenu: false,
        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left'
      }
    },
    computed: {
        navHidden(){
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

</style>
