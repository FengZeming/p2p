<template>
  <tabbar slot="bottom" style="position: fixed;">
    <tabbar-item :link="{path:'/home'}" :selected="routePath =='/home'||routePath=='/'">
      <img slot="icon" src="../assets/images/44.png">
      <img slot="icon-active" src="../assets/images/4.png">
      <span slot="label">排名</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/deposit'}" :selected="routePath =='/deposit'">
      <img slot="icon" src="../assets/images/33.png">
      <img slot="icon-active" src="../assets/images/3.png">

      <span slot="label">存管</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/trade'}" :selected="routePath =='/trade'">
      <img slot="icon" src="../assets/images/22.png">
      <img slot="icon-active" src="../assets/images/2.png">

      <span slot="label">成交量</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/me'}" :selected="routePath =='/me'">
      <img slot="icon" src="../assets/images/11.png">
      <img slot="icon-active" src="../assets/images/1.png">
      <span slot="label" >我的</span>
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
      }
    },
    computed: {
      routePath() {
        return this.$route.path;
      }
    }
  }

</script>

<style >
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
  color: #080363 !important;
  }
</style>
