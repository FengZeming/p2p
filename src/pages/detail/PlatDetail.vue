<template>
  <group>
    <!--<div v-for="item,index in detail">-->
    <detail-header-cell class="cell" :message='detail'></detail-header-cell>
    <detail-info-cell :message='detail'></detail-info-cell>
    <detail-data-cell :message='detail'></detail-data-cell>
    <detail-power-cell :message='detail'></detail-power-cell>
    <detail-button-cell :message='detail'></detail-button-cell>
    <detail-review-cell :message='detail'></detail-review-cell>
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
  import DetailButtonCell from './components/DetailButtonCell'
  import DetailPowerCell from './components/DetailPowerCell'
  import DetailReviewCell from './components/DetailReviewCell'
  import DetailDataCell from './components/DetailDataCell'

  export default {

    name: 'detail',
    components: {
      DetailHeaderCell,
      Group,
      Cell,
      DetailInfoCell,
      Qrcode,
      DetailButtonCell,
      DetailPowerCell,
      DetailReviewCell,
      DetailDataCell
    },
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
