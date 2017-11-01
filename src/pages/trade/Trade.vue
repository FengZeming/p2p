<template>
  <div style="width: 100%; height: 100%;">
    <scroller
      :on-refresh="refresh"
      :on-infinite="loadMore">
      <div>
        <div v-for="item ,index in list">
          <symbol-bar v-if="!index" :message="titles"></symbol-bar>
          <div v-if="!index" style="width: 100%;height: 1px; background-color: #d8d8d8"></div>

          <cell class="cell" :message='{item:item ,index:index ,disable:true}' v-if="!item.platid"></cell>
          <router-link :to="{path:'/detail',query:item}" v-if="item.platid">
            <cell class="cell" :message='{item:item ,index:index }'></cell>
          </router-link>
        </div>
      </div>
    </scroller>
  </div>

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
      this.refresh();
    },
    methods: {
      refresh(done) {
        fetch('/table/dailyDataListApi', {type: 'post', params: {page: 1, length: '30'}})
          .then((response) => {
            this.list = response.data;
            if (done) done()
          }).catch(function (err) {
          if (done) done()

        })
      },

      loadMore(done) {
        fetch('/table/dailyDataListApi', {type: 'post', params: {page: this.list.length/30+1, length: '30'}}, true)
          .then((response) => {
           this.list = this.list.concat(response.data);
            done()
          }).catch(function (err) {
        })


//        setTimeout(() => {
//          var start = this.bottom + 1
//          for (var i = start; i < start + 10; i++) {
//            this.items.push(i + ' - keep walking, be 2 with you.')
//          }
//          this.bottom = this.bottom + 10
//          done()
//        }, 1500)
      }
    }
  }


</script>

<style scoped>

</style>
