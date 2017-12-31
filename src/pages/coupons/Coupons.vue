<template>
  <div style="height: 100%;width: 100%;" ref="contianer">

    <tab :line-width="1" custom-bar-width="70px" style="position: fixed;width:100%;">
      <tab-item selected @on-item-click="onItemClick(0)">未使用</tab-item>
      <tab-item @on-item-click="onItemClick(1)">已过期</tab-item>
      <tab-item @on-item-click="onItemClick(2)">已使用</tab-item>
    </tab>
    <div style="padding-top: 44px;">
      <div v-for="item in list0" v-if="isItemSelected(0)">
        <coupons-list-cell :message="{item:item,pageType:0}"></coupons-list-cell>
      </div>
      <div v-for="item in list1" v-if="isItemSelected(1)">
        <coupons-list-cell :message="{item:item,pageType:1}"></coupons-list-cell>
      </div>
      <div v-for="item in list2" v-if="isItemSelected(2)">
        <coupons-list-cell :message="{item:item,pageType:2}"></coupons-list-cell>
      </div>
    </div>

    <p v-if="!(this['list'+selectedIndex] && (this['list'+selectedIndex]).length>0)" class="hint">暂无数据</p>

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
        list0: null,
        list1: null,
        list2: null
      }
    },
    computed: {},
    methods: {
      onItemClick(index) {
        this.selectedIndex = index;
        if (!(this['list' + index])) {
          this.fetchData();
        }
      },
      fetchData() {
        fetch('http://tservice.prguanjia.com/account/myCoupons', {type: 'post', params: {type: this.selectedIndex}})
          .then((res) => {
            this['list' + this.selectedIndex] = res.data.list;
          }).catch(err => {
        })
      },
      isItemSelected(index) {
        return this.selectedIndex === index;
      }
    },
    mounted() {
      this.fetchData();
    }
  }

</script>

<style scoped>

  .hint {
    color: #666;
    margin: auto;
    position: absolute;
    top: 50%; left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }


</style>
