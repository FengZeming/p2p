<template>
  <tabbar slot="bottom">
    <tabbar-item :link="{path:'/home'}" :selected="routePath =='/home'||routePath=='/'">
      <span slot="icon" class="iconfont" >&#xe756;</span>
      <span slot="label">存管</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/deposit'}" :selected="routePath =='/deposit'">
      <span slot="icon" class="iconfont" >&#xe616;</span>
      <span slot="label">存管</span>
    </tabbar-item>

    <tabbar-item :link="{path:'/trade'}" :selected="routePath =='/trade'">
      <span slot="icon" class="iconfont" >&#xe62d;</span>
      <span slot="label">成交量</span>
    </tabbar-item>
    <!--<tabbar-item :link="{path:'/me'}" :selected="routePath =='/me'">-->
      <!--<span slot="icon" class="iconfont" >&#xe61e;</span>-->
      <!--<span slot="label">我的</span>-->
    <!--</tabbar-item>-->
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
    methods:{
     routerSelected(path){
       return this.$router.path ===path;
     }
    },
    computed:{
      routePath(){
        return this.$route.path;
      }
    }
  }

</script>

