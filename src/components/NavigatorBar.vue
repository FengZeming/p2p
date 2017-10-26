<template>
  <tabbar slot="bottom">
    <tabbar-item link="/home">
      <span slot="icon" class="iconfont">&#xe756;</span>
      <span slot="label">存管</span>
    </tabbar-item>

    <tabbar-item link="/deposit">
      <span slot="icon" class="iconfont">&#xe616;</span>
      <span slot="label">存管</span>
    </tabbar-item>

    <tabbar-item link="/trade">
      <span slot="icon" class="iconfont">&#xe62d;</span>
      <span slot="label">成交量</span>
    </tabbar-item>
    <tabbar-item link="/me">
      <span slot="icon" class="iconfont">&#xe61e;</span>
      <span slot="label">我的</span>
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
    }
  }

</script>

