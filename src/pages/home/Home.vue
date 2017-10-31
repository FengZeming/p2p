<template>
  <view-box class="viewBox" style="margin-bottom: 0;">
    <div v-for="item,index in list">
      <symbol-bar v-if="!index" :message="titles"></symbol-bar>
      <div v-if="!index" style="width: 100%;height: 1px; background-color: #d8d8d8"></div>

      <cell class="tableViewCell" :message='{item:item ,index:index ,disable:true}' v-if="!item.platid"></cell>

      <router-link :to="{path:'/detail',query:item}" v-if="item.platid">
        <cell class="tableViewCell" :message='{item:item ,index:index }'></cell>
      </router-link>

    </div>
  </view-box>
</template>
<script>

  import {
    ViewBox
  } from 'vux';
  import axios from 'axios';
  import Cell from '../../components/HomeListCell'
  import SymbolBar from '../../components/SymbolBar'

  export default {
    name: 'home',
    components: {
      ViewBox,
      SymbolBar,
      Cell
    },
    data() {
      return {
        list: [],
        scrollTop: 0,
        titles: ['名称', '综合排名', '网贷之家', '网贷天眼', '融360']
      }
    },
    methods: {
      getRankList() {
        axios.get('/table/rankList')
          .then( (response)=> {
            this.list = response.data.data;
            console.log(this.list);
          }).catch(function (err) {
          console.log(err);
        })
      }
    },
    computed: {},
    mounted() {
      this.getRankList();
    }
  }


</script>

<style lang="less" scoped>

  .viewBox {
    width: 100%;
    height: 100%;
  }


</style>

