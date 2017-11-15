<template>
  <div style="flex:1; ;margin-bottom: 50px;">

    <me-header-cell :message="data" @btnClick="showDialog"></me-header-cell>
    <me-wealth-cell :message="data" style="margin-top: 5px;"></me-wealth-cell>
    <divider-onepx></divider-onepx>
    <divider :message="{height:'10px'}"></divider>
    <divider-onepx></divider-onepx>
    <router-link :to="{path:'/coupons'}">
      <me-cell
        :message="{icon:require('../../assets/images/卡券.png'),title:'我的优惠券',warn:'即将过期',desc:'1张待使用'}"></me-cell>
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
              <x-input placeholder="手机号码" class="weui-vcode" style="height: 30px;">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
              </x-input>
            </group>
            <divider-vertical-onepx></divider-vertical-onepx>
          </div>
          <div style="margin-top:12px; width: 95%; align-self: center;display: flex;">
            <divider-vertical-onepx></divider-vertical-onepx>
            <group gutter="0" class="weui-cells_form" style="width: 100%; ">
              <x-input placeholder="请输入验证码" type="number" :min="4" :max="6" style="height: 30px;"></x-input>
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
    <button style="width: 30px;height: 30px;background-color: red; position: fixed;top: 150px;right: 0px;outline: none;border: none;border-radius: 4px 4px 20px 10px">

    </button>
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
  }
</style>
