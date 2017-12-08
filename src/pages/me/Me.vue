<template>
  <div style="flex:1; ;margin-bottom: 50px;">

    <me-header-cell :message="data" @btnClick="showDialog"></me-header-cell>
    <me-wealth-cell :message="data" style="margin-top: 5px;" @doExchange="showDialog2"></me-wealth-cell>
    <!--<divider-onepx></divider-onepx>-->
    <divider :message="{height:'10px'}"></divider>
    <!--<divider-onepx></divider-onepx>-->

    <router-link :to="{path:'/task'}">
      <div class="task"></div>
    </router-link>
    <!--<divider-onepx></divider-onepx>-->
    <divider :message="{height:'10px'}"></divider>
    <!--<divider-onepx></divider-onepx>-->
    <router-link :to="{path:'/coupons'}">
      <me-cell
        :message="{icon:require('../../assets/images/卡券.png'),title:'我的优惠券',warn:data.coupon_number?'即将过期':'',desc:data.coupon_number+'张待使用'}"></me-cell>
    </router-link>
    <divider-onepx :message="{marginLeft:'10px'}"></divider-onepx>
    <me-cell
      :message="{icon:require('../../assets/images/user/icon_wallet.png'),title:'一起赚',desc:'开发中',disabled:true}"></me-cell>
    <!--<divider-onepx></divider-onepx>-->
    <divider :message="{height:'15px'}"></divider>
    <me-grid-cell :message="data.welfareData"></me-grid-cell>

    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox" class="dialog-demo" hide-on-blur>
        <me-dialog-score-bind-phone @onHideDialog="hideDialog"></me-dialog-score-bind-phone>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox2" class="dialog-demo" hide-on-blur>
        <me-dialog-score-exchange ref="box" :message="data" @onScoreExchage="scoreExchage"
                                  @onCancle="cancleScoreExchangeDialog" @onExchange="exchangeScore"
        ></me-dialog-score-exchange>
      </x-dialog>
    </div>


    <div v-transfer-dom>
      <x-dialog v-model="showWarnBox" class="dialog-demo" hide-on-blur>
        <me-dialog-warn ref="box" :message="data"
                        @onCancle="cancleScoreExchangeDialog" @onExchange="exchangeScore"
        ></me-dialog-warn>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showWarnBox2" class="dialog-demo" hide-on-blur>
        <me-dialog-warn2 ref="box" :message="data"
                         @onCancle="cancleScoreExchangeDialog" @onExchange="exchangeScore"
        ></me-dialog-warn2>
      </x-dialog>
    </div>

  </div>

</template>

<script>
  import MeHeaderCell from './components/MeHeaderCell'
  import MeWealthCell from './components/MeWealthCell'
  import MeCell from './components/MeCell'
  import MeGridCell from './components/MeGridCell'
  import Divider from '../../components/Divider'
  import DividerOnepx from '../../components/Divider1px'

  import fetch from '../../api/http'
  import DividerVerticalOnepx from '../../components/DividerVertical1px'
  import MeDialogScoreExchange from './components/MeDialogScoreExchange.vue'
  import MeDialogScoreBindPhone from './components/MeDialogScoreBindPhone.vue'
  import MeDialogWarn from './components/MeDialogWarn.vue'
  import MeDialogWarn2 from './components/MeDialogWarn2.vue'

  import {XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom, XInput} from 'vux'
  import {cookie} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      MeHeaderCell,
      MeWealthCell,
      MeCell,
      Divider,
      MeGridCell,
      DividerOnepx,
      XDialog,
      XButton,
      Group,
      XSwitch,
      XInput,
      DividerVerticalOnepx,
      MeDialogScoreBindPhone,
      MeDialogScoreExchange,
      MeDialogWarn,
      MeDialogWarn2
    },
    data() {
      return {
        showScrollBox: false,
        showScrollBox2: false,
        showWarnBox: false,
        showWarnBox2: false,
        data: {
          coupon_number: 0,
          headimgurl: '',
          mycoin: 0,
          mywallet: 0,
          nickname: "",
          withdrawable: 0,
          address: "",
          phone: "",
          postcode: "",
          realname: "",
          welfareData: []
        }
      }
    },
    methods: {
      hideDialog() {
        this.showScrollBox = false;
      },
      withdraw() {
        let url = location.protocol + '//service.wx.prguanjia.com/account/withdraw';
        fetch(url).then(res => {
          if (!res.result) {
            this.p2pWithdrawpost(res.pbid)
          } else {
            this.$router.push('/withdrawal');
          }
        }).catch(err => {
          this.$router.push('/withdrawal');
        })
      },
      p2pWithdrawpost(orderId) {
        let url = location.protocol + '//service.wx.prguanjia.com/redpack/p2pWithdrawpost';
        fetch(url, {type: 'post', params: {'pbid': orderId}}).then(res => {
          if (!res.result) {
            this.$router.push({path: '/withdrawal', query: {success: true}});
          } else {
            this.$router.push('/withdrawal');
          }
        }).catch(err => {
          this.$router.push('/withdrawal');
        })
      },
      showDialog() {
        if (!this.data.phone) {
          this.showScrollBox = true
        } else if (this.data.mywallet < 10) {
          this.showWarnBox = true;
        } else {
          if (cookie.get('fuwu_openid') && (this.route && this.route.query && this.route.query.auth * 1 === 1)) {
            this.withdraw();
          } else {
            let tmpUrl = location.href;
            tmpUrl.replace('?auth=1', '');
            location.href = 'http://service.wx.prguanjia.com/redpack/auth?callback=' + location.href + '?auth=1'
          }
        }
      },
      showDialog2() {
        if (this.data.mycoin < 100) {
          this.showWarnBox2 = true;
          return;
        }
        this.showScrollBox2 = true
      },
      cancleScoreExchangeDialog() {
        this.showScrollBox2 = false;
      },
      scoreExchage() {
        this.showScrollBox2 = false;
        this.$router.push({path: '/scoreDeclare', query: {pageType: true}});
      },
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
      getAuthCode() {
        if (this.count < 60 && this.count > 0) {
          return;
        }

        if (!(/^1[34578]\d{9}$/.test(this.phone))) {
          this.$vux.toast.show({text: '手机号有误', type: 'text'});
          return;
        }
        fetch('http://api.prguanjia.com/user/sendAuthCode', {
          type: 'post',
          params: {phone: this.phone, state: 2}
        }).then(res => {
          this.startCountDown();
        }).catch(err => {

        });
      },
      startCountDown() {
        let self = this;
        var timer = null;
        timer = setInterval(function () {
          if (self.count > 0) {
            self.count--;
          }
          else {
            clearInterval(timer);
            self.count = 60;
          }
        }, 1000);
      },
      exchange() {
        this.showScrollBox2 = true;
      },
      fetchData() {
        fetch('http://tservice.prguanjia.com/account/home')
          .then(res => {
            this.data = res.data;
          }).catch(err => {
        })
      }
    },
    mounted() {
      this.fetchData();
      if ((this.$route.query.auth * 1 === 1 && cookie.get('fuwu_openid'))) {
        this.withdraw();
      }

      this.wxShare(this.$wechat, location.href);

    }
  }
</script>

<style lang="less" scoped>

  .dialog-demo {
    .weui-dialog {
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 280px;
      width: 100% !important;
      overflow: hidden;
    }
  }

  .task {
    width: 100%;
    height: 80px;
    background-size: 100%;
    background-image: url("../../assets/images/user/轮播@2x.png");
    background-position: 100%;
  }
</style>
