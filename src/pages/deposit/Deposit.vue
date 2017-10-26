<template>
  <view-box class="viewBox" style="margin-bottom: 0;">
    <div v-for="item,index in list">
      <symbol-bar v-if="!index" :message="titles"></symbol-bar>
      <div v-if="!index" style="width: 100%;height: 1px; background-color: #d8d8d8"></div>
      <cell class="cell" :message='{item:item ,index:index }'></cell>
    </div>
  </view-box>
</template>
<script>
  import {ViewBox} from 'vux';
  import Cell from '../../components/DepositListCell2.vue'
  import SymbolBar from '../../components/SymbolBar'
  import axios from 'axios'

  export default {
    name: 'deposit',
    components: {
      ViewBox, Cell,
      SymbolBar
    },
    data() {
      return {
        list: [1, 2],
        titles: ['排序', '平台', '存管', '备注'],
      }
    },


    mounted() {

      axios.get('/table/bankListApi')
        .then( ({data}) => {
          console.log(data);
          this.list=data.data.rows;
          console.log(this.list);
        }).catch(function (err) {
          console.log(err);
      })

    }
  }
</script>

<style scoped>

</style>
