<template>
  <group>
    <!--<div v-for="item,index in detail">-->
    <detail-header-cell class="cell" :message='detail'></detail-header-cell>
    <detail-info-cell :message='detail'></detail-info-cell>
    <!--<div>-->
      <!--<qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>-->
    <!--</div>-->

    <!--</div>-->
  </group>
</template>

<script>
  import fetch from '../../api/http'
  import DetailHeaderCell from './components/DetailHeaderCell'
  import SymbolBar from '../../components/SymbolBar'
  import DetailInfoCell from './components/DetailInfoCell'
  import {Group, Cell, Qrcode} from 'vux'

  export default {

    name: 'detail',
    components: {DetailHeaderCell, Group, Cell, DetailInfoCell, Qrcode},
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
