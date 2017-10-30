<template>
  <view-box>
    <div v-for="item ,index in list">
      <symbol-bar v-if="!index" :message="titles"></symbol-bar>
      <div v-if="!index" style="width: 100%;height: 1px; background-color: #d8d8d8"></div>
      <cell class="cell" :message='{item:item ,index:index }'></cell>
    </div>
  </view-box>
</template>
<script>
  import {ViewBox} from 'vux';
  import Cell from '../../components/TradeListCell'
  import fetch from '../../api/http'
  import SymbolBar from './components/TradeSymbolBar.vue'

  export default {

    components: {ViewBox, Cell, SymbolBar},

    data() {
      return {
        list: [],
        titles: ['排名', '平台名称', '年化收益', '投资人数', '成交量(万)']
      }
    },

    mounted() {
      fetch('/table/dailyDataListApi', {type:'post', params: {page: 1, length: '30'}})
        .then((response)=> {
          this.list = response.data;
          console.log(this.list)
        }).catch(function (err) {

      })
    }

  }


</script>

<style scoped>

</style>
