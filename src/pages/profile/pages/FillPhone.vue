<template>
  <div style="display: flex;flex-direction: column;justify-content: center;">
    <group class="weui-cells_form">
      <x-input placeholder="手机号码" class="weui-vcode" style="height: 35px;">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
      <x-input placeholder="请输入验证码" type="number" :min="4" :max="6" style="height: 35px;"></x-input>
      <!--@on-change="change"-->

    </group>
    <x-button type="primary" >立即验证</x-button>


  </div>
</template>

<script>
  import {XInput, Group, XButton, Cell} from 'vux'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    data() {
      return {}
    },
    methonds: {},
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
