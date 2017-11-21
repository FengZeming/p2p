<template>
  <div style="display: flex;flex-direction: column;justify-content: center;">
    <group class="weui-cells_form" gutter="0">
      <x-input placeholder="手机号码" class="weui-vcode" style="height: 35px;" v-model="phone">
        <x-button slot="right" style="min-width: 60px;margin-left: 10px;" type="primary" mini @click.native="getAuthCode">
          {{count >= 60 ? '获取验证码' : (count+'s')}}
        </x-button>
      </x-input>
      <x-input placeholder="请输入验证码" type="number" :min="4" :max="6" style="height: 35px;" v-model="code"></x-input>
      <!--@on-change="change"-->

    </group>
    <x-button type="primary">立即验证</x-button>

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
        console.log()
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
