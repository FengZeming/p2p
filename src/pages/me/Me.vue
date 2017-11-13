<template>
  <div style="height: 100%;margin-bottom: 50px;">
    <me-header-cell></me-header-cell>
    <me-wealth-cell style="margin-top: 5px;"></me-wealth-cell>
    <divider-onepx></divider-onepx>
    <divider :message="{height:'10px'}"></divider>
    <divider-onepx></divider-onepx>
    <router-link :to="{path:'/coupons'}">
      <me-cell></me-cell>
    </router-link>
    <divider-onepx :message="{marginLeft:'10px'}"></divider-onepx>
    <me-cell></me-cell>
    <divider-onepx></divider-onepx>
    <divider :message="{height:'10px'}"></divider>
    <me-grid-cell></me-grid-cell>
    <!--<iframe src="http://game.prguanjia.com/user/index.html" frameborder="0" style="width: 100%;height: 100%;"></iframe>-->

  </div>
</template>

<script>
  import MeHeaderCell from './components/MeHeaderCell'
  import MeWealthCell from './components/MeWealthCell'
  import MeCell from './components/MeCell'
  import MeGridCell from './components/MeGridCell'
  import Divider from '../../components/Divider'
  import DividerOnepx from '../../components/Divider1px'

  export default {
    components: {
      MeHeaderCell,
      MeWealthCell,
      MeCell,
      Divider,
      MeGridCell,
      DividerOnepx
    }
  }


</script>

<style scoped>

</style>
