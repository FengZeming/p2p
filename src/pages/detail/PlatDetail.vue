<template>
  <view-box class="viewBox" style="margin-bottom: 0;">
    <div v-for="item,index in detail">
      <cell class="cell" :message='{item:item ,index:index }'></cell>

    </div>
  </view-box>
</template>

<script>
  import fetch from '../../api/http'
  import Cell from './components/DetailHeaderCell'
  import SymbolBar from '../../components/SymbolBar'
  import {ViewBox} from 'vux'

  export default {

    name: 'detail',
    components: {Cell, ViewBox},
    data() {
      return {
        detail: {}
      }
    },
    mounted() {
      console.log(this.$route.query);
      fetch('/table/platformDetail', {type: 'post', params: {'platid': this.$route.query.platid}})
        .then((response) => {
          this.detail = response.data;
          console.log(this.detail)
        }).catch(function (err) {
        console.log(err)
      })
    }

  }
</script>

<style scoped>


</style>
