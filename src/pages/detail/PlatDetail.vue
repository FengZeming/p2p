<template>
  <div>
    <div @click="hideCover" :style="{display:coverShow}"
         style="background-color: rgba(0,0,0,0.8);width: 100%;height: 100%;z-index: 1; position: fixed;">
      <p>投资咨询请添加微信<br>
        licaishi1122或licaishi1123</p>
    </div>
    <div style="width: 100%;height: 100%; margin-bottom: 44px;">
      <!--<div v-for="item,index in detail">-->
      <detail-header-cell class="cell" :message='detail'></detail-header-cell>
      <detail-info-cell :message='detail'></detail-info-cell>
      <divider></divider>
      <detail-data-cell :message='detail'></detail-data-cell>
      <divider></divider>
      <detail-power-cell :message='detail'></detail-power-cell>
      <divider :message="{height:'5px'}"></divider>
      <router-link :to="{path:'/evaluate',query:detail}">
        <detail-button-cell :message='detail'></detail-button-cell>
      </router-link>
      <divider :message="{height:'5px'}"></divider>

      <!--<div>-->
      <!--<qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>-->
      <!--</div>-->
      <!--</div>-->
      <div v-for=" item,index in reviews">
        <detail-review-cell :message='item'></detail-review-cell>
        <divider :message="{height:'5px'}"></divider>
      </div>

      <div style="display:flex; position: fixed;bottom:0; height: 38px;width: 100%;background-color: #0e67d6;">
        <p @click="showCover" :to="{path:''}">投资咨询</p>
        <p @click="attention" style="background-color:#0a57b7;">关注</p>
      </div>

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
    methods: {
      hideCover() {
        this.coverShow = 'none'
      },
      showCover() {
        this.coverShow = ''
      },
      attention() {
        fetch('http://tservice.prguanjia.com/account/follow', {
          type: 'post',
          params: {platid: this.$route.query.platid, type: 1}
        }).then(function (respones) {
          console.log(respones)

        }).catch(function (err) {
            console.log(err)
        })
      }
    },
    data() {
      return {
        coverShow: 'none',
        detail: {},
        reviews: []
      }
    },
    mounted() {
      fetch('/table/platformDetail', {type: 'post', params: {'platid': this.$route.query.platid}})
        .then((response) => {
          this.detail = response.data;
        }).catch(function (err) {
      });
      fetch('/table/evaluationListGet', {type: 'post', params: {'platid': this.$route.query.platid}})
        .then((response) => {
          this.reviews = response.data;
        }).catch(function (err) {
      })
      this.wxShare(this.$wechat,location.href);

    }

  }
</script>

<style scoped>
  div p {
    height: 100%;
    flex: 1;
    display: flex;
    font-family: MicrosoftYaHei;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    color: #fefefe;
  }


</style>
