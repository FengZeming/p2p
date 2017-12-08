<template>
  <div ref="container" style="height: 100%;width: 100%;">
    <scroller :on-refresh="loadData">
      <div class="item_contianer"
           :style="{backgroundImage:'url('+require('../../assets/images/user/圆角矩形3@2x.png')+')'}"
      >
        <div style="flex: 1;"></div>
        <div
          @click="toDetial"
          style="margin-right: 16px; height: 35px;display: flex;justify-content: center;align-items: center;">
          <span
            style="font-size: 20px;display: flex;width: 3px;height: 3px;background: #be4201;border: solid 1px #ffffff;border-radius:3px;margin-right: 4px;"></span>
          <span style="color: #be4201;font-size: 14px;">明细</span>
        </div>
      </div>

      <div style="width: 100%;height: 55px;display: flex;align-items: center;">

        <p
          style="margin-right:16px; margin-left: 10px;display: flex;color:#666;font-size: 16px;flex: 1;align-items: center;">
          当前积分&nbsp;
          <span style="font-size: 20px;color:#666;display:flex;align-items: center;">{{data.mycoin}}</span>
          <img
            @click="toRule"
            src="../../assets/images/user/组1@2x.png"
            style="margin-left:6px; width: 13px;height: 13px;align-items: center;justify-self: center;justify-content: center;"
            alt="">
        </p>
        <div
          @click="onItemClick"
          style="border-radius: 2px;	border: solid 1px #d8d8d8;display: flex;justify-content: center;align-items: center;
        margin-right: 16px;width: 90px;height: 30px;font-size: 18px;text-align: center;color: #999;">兑换现金
        </div>
      </div>
      <divider-onepx></divider-onepx>
      <div v-for="item,index in list">
        <score-store-cell :message="item"></score-store-cell>
        <divider-onepx :message="{marginLeft:'10px'}"></divider-onepx>
      </div>
    </scroller>

    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox2" class="dialog-demo" hide-on-blur>
        <me-dialog-score-exchange ref="box" :message="queryParams" @onScoreExchage="scoreExchage"
                                  @onCancle="cancleScoreExchangeDialog" @onExchange="exchangeScore"
        ></me-dialog-score-exchange>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showWarnBox2" class="dialog-demo" hide-on-blur>
        <me-dialog-warn2 ref="box" @onCancle="cancleScoreExchangeDialog" @onExchange="exchangeScore"
        ></me-dialog-warn2>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import fetch from '../../api/http'
  import DividerOnepx from '../../components/Divider1px'
  import ScoreStoreCell from './components/ScoreStoreCell'
  import MeDialogScoreExchange from '../me/components/MeDialogScoreExchange'
  import MeDialogWarn from '../me/components/MeDialogWarn'
  import MeDialogWarn2 from '../me/components/MeDialogWarn2'

  import {XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom, XInput} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      DividerOnepx,
      ScoreStoreCell,
      MeDialogScoreExchange,
      MeDialogWarn,
      MeDialogWarn2,
      XDialog
    },
    data() {
      return {
        showScrollBox2: false,
        showWarnBox2: false,
        list: []
      }
    },
    computed: {
      data() {
        return this.$route.query;
      },
      queryParams() {
        return this.$route.query;
      }
    },
    methods: {
      exchangeScore(coins) {
        let url = 'http://tservice.prguanjia.com/account/exchange';
        fetch(url, {type: 'post', params: {coins: coins}}).then(res => {
          if (!res.message) {
            this.cancleScoreExchangeDialog()
            this.$vux.toast.show({
              text: '兑换成功', type: 'text'
            });
            this.fetchData()
          } else {
            this.$vux.toast.show({
              text: '兑换失败, 请稍后', type: 'text'
            });
          }
        }).catch(err => {
          this.$vux.toast.show({
            text: '兑换失败, 请稍后', type: 'text'
          });
        });

      },
      cancleScoreExchangeDialog() {
        this.showScrollBox2 = false;
      },
      scoreExchage() {
        this.showScrollBox2 = false;
        this.$router.push({path: '/scoreDeclare', query: {pageType: true}});
      },
      showDialog2() {
        if (this.data.mycoin < 100) {
          this.showWarnBox2 = true;
          return;
        }
        this.showScrollBox2 = true
      },
      onItemClick() {
        if (this.data.mycoin < 100) {
          this.showWarnBox2 = true;
          return;
        }
        this.showScrollBox2 = true
      },
      toDetial() {
        this.$router.push({path: '/incomeDetail', query: {message: this.queryParams, type: false}})
      },
      toRule() {
        this.$router.push({path: '/scoreDeclare', query: {pageType: true}});
      },
      loadData(done) {
        let url = 'http://tservice.prguanjia.com/account/scoreTask '
        fetch(url)
          .then(res => {
            this.list = res.data;
            if (done) done()
          }).catch(err => {
          if (done) done()
        })
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>
  p {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    color: #ffffff;
  }

  span {
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 15px;
    color: #ffffff;
  }

  .item_contianer {
    width: 100%;
    height: 160px;
    background-color: #f8e6cc;
    background-size: 100% auto;
    display: flex;

  }
</style>
