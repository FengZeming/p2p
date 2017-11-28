<template>
  <div class="img-box" style="width: 100%;display: flex;flex-direction: column; " ref="box">
    <p style="font-family: PingFang-SC-Medium;font-size: 15px;font-weight: normal;margin-top: 30px;margin-left: 12px;
          text-align: left;font-stretch: normal;line-height: 15px;letter-spacing: 0px;color: #f44524;">
      为了保证你的资金安全，请绑定手机</p>
    <div style="margin-top:16px; width: 95%; align-self: center;display: flex;">
      <divider-vertical-onepx></divider-vertical-onepx>
      <group gutter="0" class="weui-cells_form" style="width: 100%;">
        <x-input placeholder="手机号码" class="weui-vcode" style="height: 30px;" v-model="phone" >
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
</template>

<script>
  import {XInput, XDialog, XButton, Group} from 'vux'
  import DividerOnepx from '../../../components/Divider1px'
  import DividerVerticalOnepx from '../../../components/DividerVertical1px'

  export default {
    components: {
      XDialog,
      XButton,
      XInput,
      Group,
      DividerOnepx,
      DividerVerticalOnepx
    },
    data() {
      return {
        count: 60,
        phone: '',
        code: ''
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
        fetch('http://api.prguanjia.com/account/sendAuthCode', {
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

<style scoped>
  .img-box {
    height: 280px;
    width: 100% !important;
    overflow: hidden;
  }
</style>
