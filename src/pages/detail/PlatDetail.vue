<template>
  <div>
    <div @click="hideCover" :style="{display:coverShow}"
         style="background-color: rgba(0,0,0,0.8);width: 100%;height: 100%;z-index: 1; position: fixed; ">

      <div
        style="   display: flex;justify-content: center;align-items: center; width: 100%;height: 100%;flex-direction: column;">
        <img @click.stop="onQrcodeClick" :src="detail.qrcode ? detail.qrcode:require('../../assets/images/qrcode.jpg')"
             alt=" ">
        <div class="consult" style="height: 100px;">投资咨询请添加微信<br>
          licaishi1122或licaishi1123
        </div>
      </div>

    </div>
    <div style="width: 100%;height: 100%; margin-bottom: 44px;">
      <!--<div v-for="item,index in detail">-->
      <detail-header-cell class="cell" :message='detail'></detail-header-cell>
      <divider :message="{height:'8px'}"></divider>
      <detail-info-cell :message='detail'></detail-info-cell>
      <divider :message="{height:'7px'}"></divider>
      <detail-data-cell :message='detail'></detail-data-cell>
      <divider :message="{height:'8px'}"></divider>
      <detail-power-cell :message='detail'></detail-power-cell>
      <divider :message="{height:'5px'}"></divider>
      <router-link :to="{path:'/evaluate',query:detail}">
        <detail-button-cell :message='detail'></detail-button-cell>
      </router-link>
      <divider :message="{height:'5px'}" :style="{marginBottom:reviews&& reviews.length>0? 0:(50+'px') }"></divider>

      <!--<div>-->
      <!--<qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>-->
      <!--</div>-->
      <!--</div>-->
      <div v-for=" item,index in reviews">
        <detail-review-cell :message='item' @onZan="loadReviewData"></detail-review-cell>
        <divider :message="{height:'8px'}"></divider>
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
      onQrcodeClick() {
      },
      attention() {
        fetch('http://tservice.prguanjia.com/account/follow', {
          type: 'post',
          params: {platid: this.$route.query.platid, type: 1}
        }).then((respones) => {
          this.$vux.toast.show({text: respones.result ? '关注失败' : '关注成功', type: 'text'});
        }).catch(function (err) {
          console.log(err)
        })
      },
      loadData() {
        fetch('/table/platformDetail', {type: 'post', params: {'platid': this.$route.query.platid}})
          .then((response) => {
            this.detail = response.data;
          }).catch(function (err) {
        });
       this.loadReviewData()
      },
      loadReviewData(){
        fetch('http://service.wx.prguanjia.com/account/evaluationListGet', {type: 'post', params: {'platid': this.$route.query.platid}})
          .then((response) => {
            this.reviews = response.data;
          }).catch(function (err) {
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
      this.loadData()
      this.wxShare(this.$wechat, location.href);
    }

  }
</script>

<style scoped>
  div p {
    height: 100%;
    flex: 1;
    display: flex;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    color: #fefefe;
  }

  img {
    width: 100px;
    align-content: center;
    align-items: center;
    height: 100px;

  }

  .consult {
    width: 100%;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 16px;

  }

</style>
