<template>
  <view-box class="viewBox">
    <div v-for="item,index in list">
      <div v-if="!index" style="display: flex;flex-direction: row; height: 44px;width: 100%; align-items: center;">
        <!--{{message}}-->
        <p style="display:flex;flex: 1; align-items: center;justify-content: center; font-size: 15px;">
          名称
        </p>
        <p class="wrapItem" style="margin-left: 0;">
          综合排名
        </p>
        <p class="wrapItem">
          网贷之家
        </p>
        <p class="wrapItem">
          网贷天眼
        </p>
        <p class="wrapItem" style="margin-right: 10px;">
          融360
        </p>
      </div>
      <div v-if="!index" style="width: 100%;height: 1px; background-color: #d8d8d8"></div>

      <cell class="tableViewCell" :message='item'></cell>
    </div>
  </view-box>
</template>
<script>

  import {
    ViewBox
  } from 'vux';
  import axios from 'axios';
  import Cell from '../../components/TableViewCell'

  export default {
    name: 'home',
    components: {
      ViewBox,
      Cell
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      getRankList() {
        var self = this;
        axios.get('/table/rankList')
          .then(function (response) {
            console.log(response);
            self.list = response.data.data;
            console.log(self.list);
          }).catch(function (err) {
        })
      }
    },
    mounted() {
      this.getRankList();
    }
  }


</script>

<style lang="less" scoped>

  .viewBox {
    width: 100%;
    height: 100%;
    padding-bottom: 0;
  }

  .wrapItem {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 15px;
    color: #333;
  }


</style>

