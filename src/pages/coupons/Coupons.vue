<template>
  <div>

    <tab :line-width="1" custom-bar-width="70px" style="position: fixed;width:100%;">
      <tab-item selected @on-item-click="onItemClick(0)">未使用</tab-item>
      <tab-item @on-item-click="onItemClick(1)">已过期</tab-item>
      <tab-item @on-item-click="onItemClick(2)">已使用</tab-item>
    </tab>
    <div style="padding-top: 44px;">
      <div v-for="item in list0" v-if="isItemSelected(0)">
        <coupons-list-cell>
        </coupons-list-cell>
      </div>
      <div v-for="item in list1" v-if="isItemSelected(1)">
        <coupons-list-cell>
        </coupons-list-cell>
        <coupons-list-cell>
        </coupons-list-cell>
      </div>
      <div v-for="item in list2" v-if="isItemSelected(2)">
        <coupons-list-cell>
        </coupons-list-cell>
        <coupons-list-cell>
        </coupons-list-cell>
        <coupons-list-cell>
        </coupons-list-cell>
      </div>
    </div>
  </div>

</template>
<script>
  import {Tab, TabItem, Group, Cell} from 'vux'
  import CouponsListCell from './components/CouponsListCell'
  import fetch from '../../api/http'

  export default {
    components: {
      Tab,
      TabItem,
      Group,
      Cell,
      CouponsListCell
    },
    data() {
      return {
        selectedIndex: 0,
        list0: [1],
        list1: [2],
        list2: [2]
      }
    },
    computed: {

    },
    methods: {
      onItemClick(index) {
        this.selectedIndex = index;
      },
      isItemSelected(index){
        return this.selectedIndex ===index;
      }
    }
    ,
    mounted() {
      fetch('http://tservice.prguanjia.com/account/myCoupons', {type: 'post', params: {type: 0}})
        .then((res) => {
          console.log(res)
        }).catch(err => {
        console.log(err)
      })

    }
  }

</script>

<style>


</style>
