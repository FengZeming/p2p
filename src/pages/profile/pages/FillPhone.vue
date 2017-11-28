<template>
  <div style="display: flex;flex-direction: column;justify-content: center;">
    <group class="weui-cells_form" gutter="0">
      <x-input placeholder="手机号码" class="weui-vcode" style="height: 35px;" v-model="phone">
        <x-button slot="right" style="min-width: 60px;margin-left: 10px;" type="primary" mini
                  @click.native="getAuthCode">
          {{count >= 60 ? '获取验证码' : (count + 's')}}
        </x-button>
      </x-input>
      <x-input placeholder="请输入验证码" type="number" :min="4" :max="6" style="height: 35px;" v-model="code"></x-input>
      <!--@on-change="change"-->

    </group>
    <x-button type="primary" @click.native="verifyCode">立即验证</x-button>

  </div>
</template>

<script>
  import {XInput, Group, XButton, Cell} from 'vux'
  import fetch from '../../../api/http'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    data() {
      return {
        phone: '',
        code: '',
        count: 60
      }
    },
    methods: {
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
      verifyCode() {
        if (!this.phone) {
          this.$vux.toast.show({type: 'text', text: '请输入手机号'})
          return;
        }
        if (!(/^1[34578]\d{9}$/.test(this.phone))) {
          this.$vux.toast.show({text: '手机号有误', type: 'text'});
          return;
        }

        if (!this.code) {
          this.$vux.toast.show({type: 'text', text: '请输入验证码'})
          return;
        }

        fetch('http://tservice.prguanjia.com/account/savePhone', {
          type: 'post',
          params: {phone: this.phone, code: this.code}
        })
          .then(res => {
            if (!res.result) {
              this.$vux.toast.show({type: 'text', text: '保存成功'})
              this.$router.back();
            }else {
              this.$vux.toast.show({type: 'text', text: res.msg})
            }
          }).catch(err => {
          this.$vux.toast.show({type: 'text', text: '保存失败'})
        })
      }
    },
    computed: {},
    mounted() {

    }
  }
</script>

<style scoped>
  div ~ button {
    width: 80%;
    height: 45px;
    margin-top: 40px;
    background-color: #2772ff;
    border-radius: 4px;
    font-family: PingFang-SC-Medium;
    font-size: 18px;
    align-self: center;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0px;
    letter-spacing: 0px;
    color: #ffffff;
    border: none;
  }

</style>
