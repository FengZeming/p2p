<template>
  <scroller
    :on-refresh="refresh"
    :on-infinite="loadMore">
    <div class="viewBox" style="margin-bottom: 0;">
      <div v-for="item,index in list">
        <symbol-bar v-if="!index" :message="titles"></symbol-bar>
        <div v-if="!index" style="width: 100%;height: 1px; background-color: #d8d8d8"></div>

        <cell v-if="!item.platid" class="cell" :message='{item:item ,index:index ,disable:true }'></cell>

        <router-link :to="{path:'/detail',query:item}" v-if="item.platid">
          <cell class="cell" :message='{item:item ,index:index}' ></cell>
        </router-link>
      </div>
    </div>
  </scroller>
</template>
<script>
  import {ViewBox} from 'vux';
  import Cell from '../../components/DepositListCell2.vue'
  import SymbolBar from './components/DepositSymbolBar.vue'
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
      this.refresh();
    },
    methods: {
      refresh(done) {
        fetch('/table/bankListApi', {type: 'post', params: {page: 1, length: '30'}})
          .then(({data}) => {
            this.list = data.rows;
            if (done) done()
          }).catch(function (err) {
          if (done) done()
        });
      },

      loadMore(done) {
        fetch('/table/bankListApi', {type: 'post', params: {page: this.list.length / 30 + 1, length: '30'}}, true)
          .then((response) => {
            this.list = this.list.concat(response.data.rows);
            done()
          }).catch(function (err) {
          done();
        })
      }
    }
  }
</script>

<style scoped>
  .viewBox {
    width: 100%;
    height: 100%;
  }
</style>
