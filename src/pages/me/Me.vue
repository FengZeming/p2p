<template>
  <div style="flex:1; ;margin-bottom: 50px;">

    <me-header-cell :message="data" @btnClick="showDialog"></me-header-cell>
    <me-wealth-cell :message="data" style="margin-top: 5px;"></me-wealth-cell>
    <divider-onepx></divider-onepx>
    <divider :message="{height:'10px'}"></divider>
    <divider-onepx></divider-onepx>
    <router-link :to="{path:'/coupons'}">
      <me-cell :message="{icon:require('../../assets/images/卡券.png'),title:'我的优惠券',warn:'即将过期',desc:'1张待使用'}"></me-cell>
    </router-link>
    <divider-onepx :message="{marginLeft:'10px'}"></divider-onepx>
    <me-cell :message="{icon:require('../../assets/images/钱包.png'),title:'一起赚',warn:'进行中',desc:'现金红包不停发'}"></me-cell>
    <divider-onepx></divider-onepx>
    <divider :message="{height:'10px'}"></divider>
    <me-grid-cell></me-grid-cell>

    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox" class="dialog-demo" hide-on-blur>
        <div class="img-box" style="width: 100%;display: flex;flex-direction: column;" ref="box">
          <p style="font-family: PingFang-SC-Medium;font-size: 15px;font-weight: normal;margin-top: 30px;margin-left: 12px;
          text-align: left;font-stretch: normal;line-height: 15px;letter-spacing: 0px;color: #f44524;">
            为了保证你的资金安全，请绑定手机</p>
          <div style="margin-top:16px; width: 95%; align-self: center;display: flex;">
            <divider-vertical-onepx></divider-vertical-onepx>
            <group gutter="0" class="weui-cells_form" style="width: 100%;">
              <x-input placeholder="手机号码" class="weui-vcode" style="height: 30px;" v-model="phone">
                <x-button slot="right" type="primary" mini style="min-width: 60px;" @click.native="getAuthCode">
                  {{count >= 60 ? '获取验证码' : (count + 's')}}
                </x-button>
              </x-input>
            </group>
            <divider-vertical-onepx></divider-vertical-onepx>
          </div>
          <div style="margin-top:12px; width: 95%; align-self: center;display: flex;">
            <divider-vertical-onepx></divider-vertical-onepx>
            <group gutter="0" class="weui-cells_form" style="width: 100%; ">
              <x-input placeholder="请输入验证码" type="number" :min="4" :max="6" style="height: 30px;"
                       v-model="code"></x-input>
              <!--@on-change="change"-->
            </group>
            <divider-vertical-onepx></divider-vertical-onepx>

          </div>
          <x-button
            style="margin-top: 40px;width: 133px;height: 40px;align-self: center;background:#2772ff;color: white;">
            立即验证
          </x-button>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox2" class="dialog-demo" hide-on-blur>
        <div class="img-box" style="width: 100%;display: flex;flex-direction: column;height: 320px;" ref="box">
          <p
            style="display: flex;color: #999999; font-size: 12px;align-items: center;margin-top: 10px;align-self: flex-end;margin-bottom: 25px;margin-right: 20px;">
            <img src="../../assets/images/sign/问号.png"
                 style="width: 10px;height: 10px;padding:1px;border: solid 1px #bfbfbf;border-radius: 7px;"
                 alt=" ">
            &nbsp;&nbsp;积分规则</p>

          <div style="display: flex;margin-left: 20px;margin-right: 20px;">
            <p
              style="border: solid 1px #bfbfbf;border-radius: 18px;display:flex;align-self:center;justify-content: center;line-height:38px;width: 36px;height: 36px;	font-size: 15px;	color: #bfbfbf;">
              一</p>
            <div style="display:flex;flex: 1;justify-content: center;align-self: center;">
              <input type="text"
                     style="color:#2772ff;font-size: 18px; 	border-radius: 4px;border: solid 1px #bfbfbf;width: 80px;height: 30px;outline: none;padding-right: 5px;padding-left: 5px;">
              <span
                style="	color: #666666;font-size: 14px;text-align: center;display: flex;align-self: center;margin-left:8px;">积分</span>
            </div>
            <p
              style="border: solid 1px #bfbfbf;border-radius: 18px;display:flex;align-self:center;justify-content: center;line-height:38px;width: 36px;height: 36px;	font-size: 18px;	color: #bfbfbf;">
              ＋</p>

          </div>
          <p style="color: #999999; font-size: 10px; text-align: left; margin: 20px 20px 15px 20px;">
            提示：提现金额以元为单位，须为10的整数倍。</p>
          <div
            style="flex: 1;width: 100%;justify-content: center;align-items: center;align-self: center;flex-direction: column;">
            <div id="arrow"
                 style="position:relative;left: 0 ;right: 0;margin: auto;top: 5.6px;background-color: white;"></div>
            <divider-onepx style="flex: 1px;"></divider-onepx>
            <div
              style="display: flex;flex-direction: column;justify-content: center;align-self: center;
              width: 100%;height:100%;border-radius: 0 0 4px 4px;background-color: #eeeeee;">

              <p style="font-size:34px;color: #ff6600;">1.00<span style="color:#333;font-size: 12px;">元</span></p>

              <div style="width: 100%;display: flex; height: 32px;flex-direction: row;margin-top: 18px;margin-bottom: 20px;">
                <div style="display: flex;flex: 1;">
                  <x-button mini type="primary" style="width: 120px;color: white">确定</x-button>
                </div>
                <div style="flex: 1;display: flex;">
                  <x-button mini style="width: 120px;background-color: #999;color: white;">取消</x-button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </x-dialog>
    </div>
    <div @click="exchange"
         style="width: 60px;height: 22px;background-color: white; position: fixed;top: 150px;right: 0px;
      display: flex;justify-content: center;align-items: center;
      border: solid 1px #2772ff;border-radius: 12px 0px 0px 12px">
      <img src="../../assets/images/user/gift.png" alt=" " style="align-self: center; width:15px; height:15px; ">
      <p style="color: #2772ff;font-size: 13px; margin-left: 3px;align-self: center;">兑奖</p>
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

  import {XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom, XInput} from 'vux'


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
      DividerVerticalOnepx
    },
    data() {
      return {
        showScrollBox: false,
        showScrollBox2: false,
        count: 60,
        phone: '',
        code: '',
        data: {
          headimgurl: '',
          mycoin: 0,
          mywallet: 0,
          nickname: "聪",
          withdrawable: 0
        }
      }
    },
    methods: {
      showDialog() {
        this.showScrollBox = true
      },
      getAuthCode() {
        if (this.count < 60 && this.count > 0) {
          return;
        }

        if (!(/^1[34578]\d{9}$/.test(this.phone))) {
          this.$vux.toast.show({text: '手机号有误', type: 'text'});
          return;
        }
        fetch('http://tservice.prguanjia.com/account/sendAuthCode', {
          type: 'post',
          params: {phone: this.phone, state: 2}
        })
          .then(res => {
            this.startCountDown();
          }).catch(err => {
          this.startCountDown();

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
      }
    },
    mounted() {
      this.$refs.box.parentNode.style.maxWidth = '92%'
      this.$refs.box.parentNode.style.width = '92%'
      fetch('http://tservice.prguanjia.com/account/home')
        .then(res => {
          this.data = res.data;
        }).catch(err => {

      })

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

    #arrow {
      display: block;
      height: 8px;
      width: 8px;

      border-width: 1px;
      border-color: transparent;
      border-style: solid;
      border-bottom-color: #d8d8d8;
      border-left-color: #d8d8d8;
      transform: rotate(-45deg);
    }
  }
</style>
