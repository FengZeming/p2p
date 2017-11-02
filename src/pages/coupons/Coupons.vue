<template>
  <div >

    <tab :line-width="1" custom-bar-width="70px" style="position: fixed;width:100%;">
      <tab-item selected>未使用</tab-item>
      <tab-item>已过期</tab-item>
      <tab-item>已使用</tab-item>
    </tab>
    <div style="padding-top: 44px;">

      <coupons-list-cell>
      </coupons-list-cell>
    </div>


  </div>

</template>
<script>
  import {Tab, TabItem, Group, Cell} from 'vux'
  import CouponsListCell from './components/CouponsListCell'

  export default {
    components: {
      Tab,
      TabItem,
      Group,
      Cell,
      CouponsListCell
    }
  }

</script>

<style>


</style>
