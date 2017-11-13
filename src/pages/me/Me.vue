<template>
  <div style="flex:1; ;margin-bottom: 50px;">
    <me-header-cell></me-header-cell>
    <me-wealth-cell style="margin-top: 5px;"></me-wealth-cell>
    <divider-onepx></divider-onepx>
    <divider :message="{height:'10px'}"></divider>
    <divider-onepx></divider-onepx>
    <router-link :to="{path:'/coupons'}">
      <me-cell :message="{icon:require('../../assets/images/卡券.png'),title:'我的优惠券'}"></me-cell>
    </router-link>
    <divider-onepx :message="{marginLeft:'10px'}"></divider-onepx>
    <me-cell :message="{icon:require('../../assets/images/钱包.png'),title:'一起赚'}"></me-cell>
    <divider-onepx></divider-onepx>
    <divider :message="{height:'10px'}"></divider>
    <me-grid-cell></me-grid-cell>

  </div>
</template>

<script>
  import MeHeaderCell from './components/MeHeaderCell'
  import MeWealthCell from './components/MeWealthCell'
  import MeCell from './components/MeCell'
  import MeGridCell from './components/MeGridCell'
  import Divider from '../../components/Divider'
  import DividerOnepx from '../../components/Divider1px'

  import icon from '../../assets/images/钱包.png'
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
