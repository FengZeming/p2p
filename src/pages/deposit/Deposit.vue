<template>
  <view-box class="viewBox" style="margin-bottom: 0;">
    <div v-for="item,index in list">
      <symbol-bar v-if="!index" :message="titles"></symbol-bar>
      <div v-if="!index" style="width: 100%;height: 1px; background-color: #d8d8d8"></div>
      <router-link :to="{path:'/detail',query: item}" >
        <cell class="cell" :message='{item:item ,index:index }'></cell>
      </router-link>
    </div>
  </view-box>
</template>
<script>
  import {ViewBox} from 'vux';
  import Cell from '../../components/DepositListCell2.vue'
  import SymbolBar from '../../components/SymbolBar'
  import fetch from '../../api/http'

  export default {
    name: 'deposit',
    components: {
      ViewBox, Cell,
      SymbolBar
    },
    data() {
      return {
        list: [],
        titles: ['排序', '平台', '存管', '备注'],
      }
    },

    mounted() {
      fetch('/table/bankListApi',)
        .then(({data}) => {
          this.list = data.rows;
        }).catch(function (err) {
        console.log(err);
      })

    }
  }
</script>

<style scoped>

</style>
