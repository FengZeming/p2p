<template>
  <div style="width: 100%;height: 100%;">
    <!--<div v-for="item,index in detail">-->
    <detail-header-cell class="cell" :message='detail'></detail-header-cell>
    <detail-info-cell :message='detail'></detail-info-cell>
    <divider></divider>
    <detail-data-cell :message='detail'></detail-data-cell>
    <divider></divider>
    <detail-power-cell :message='detail'></detail-power-cell>
    <divider :message="{height:'5px'}"></divider>
    <detail-button-cell :message='detail'></detail-button-cell>
    <divider :message="{height:'5px'}"></divider>

    <detail-review-cell :message='detail'></detail-review-cell>
    <!--<div>-->
    <!--<qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>-->
    <!--</div>-->
    <!--</div>-->
    <div v-for=" item,index in reviews">
    <detail-review-cell :message='item'></detail-review-cell>
  </div>
  </div>
</template>

<script>
  import fetch from '../../api/http'
  import DetailHeaderCell from './components/DetailHeaderCell'
  import SymbolBar from '../../components/SymbolBar'
  import DetailInfoCell from './components/DetailInfoCell'
  import {Group, Cell, Qrcode} from 'vux'
  import DetailButtonCell from './components/DetailButtonCell'
  import DetailPowerCell from './components/DetailPowerCell'
  import DetailDataCell from './components/DetailDataCell'
  import DetailReviewCell from './components/DetailReviewCell'
  import Divider from '../../components/Divider.vue'

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
      DetailDataCell,
      DetailReviewCell,
      Divider
    },
    data() {
      return {
        detail: {},
        reviews: []
      }
    },
    mounted() {
      console.log(this.$route.query);
      fetch('/table/platformDetail', {type: 'post', params: {'platid': this.$route.query.platid}})
        .then((response) => {
          this.detail = response.data;
        }).catch(function (err) {
        console.log(err)
      });
      fetch('/table/evaluationListGet', {type: 'post', params: {'platid': this.$route.query.platid}})
        .then((response) => {
          this.reviews = response.data;
          console.log(this.reviews);

        }).catch(function (err) {
        console.log(err);
      })
    }

  }
</script>

<style scoped>


</style>
