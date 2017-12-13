<template>
  <div>
    <div style="display: flex;width: 100%;
    height: 124px;background-position: bottom;
    align-items: center;
    background-size: 100%;
    background-color: #2772ff;
     background-repeat: no-repeat; background-clip: border-box"
         :style="{backgroundImage:'url('+pic+')'}">
      <img  class="icon" :src="message.headimgurl" @click="goProfile" alt=" ">

      <p style="color: white;font-size: 17px;" @click="goProfile">{{message.nickname}}</p>
      <i style="flex: 1;"></i>
      <div style="display: flex;" v-show="false">
        <div @click="goProfile">
          <p class="edit">编辑资料</p>
          <p v-if="">{{message.is_perfect ?'已':'未' }}完成</p>
        </div>
        <img class="arraw" :src="require('../../../assets/images/user/icon拷贝@2x.png')" alt=" ">
      </div>
      <!--<div style="align-self: center;margin-left: -5px;">-->
      <!--<p style="color: white;font-size: 12px;">黄金会员</p>-->
      <!--</div>-->
    </div>
    <div
      style="display: flex; background-color: rgb(0,62,203);justify-content: center;align-items: center;align-self: center;height: 40px;">
      <p style="color: white;font-size: 16px;padding: 5px; flex: 1;align-self: center;">可提现金额:
        {{message.withdrawable}} 元</p>
      <button style="border: none;outline: none;" @click="onClick">提现</button>
    </div>

  </div>
</template>

<script>
  import fetch from '../../../api/http';
  import {XButton} from 'vux';
  import icon from '../../../assets/images/user/icon拷贝@2x.png'
  export default {
    components: {
      XButton
    },
    props: ['message'],
    data() {
      return {
        pic: require('../../../assets/images/user/bg_1.jpg')
      }
    },
    methods: {
      goProfile() {
        // this.$router.push({path: './profile', query: this.message});
      },
      onClick() {
        this.$emit('btnClick')
      }
    },
    computed: {},
    mounted() {
    }
  }
</script>

<style scoped>
  .icon {
    width: 44px;
    height: 44px;
    margin: 0px 10px 0px 20px;
    background-color: black;
    border-radius: 22px;
  }

  button {
    background-color: white;
    border-radius: 2px;
    border-color: darkblue;
    margin-top: 6px;
    height: 24px;
    margin-bottom: 6px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    color: #2772ff;
    margin-left: 10px;
    margin-right: 10px;
  }
  .edit{
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 2px;
    color: #ffffff;
  }
  p+p{
    font-size: 12px;
    font-weight: normal;
    text-align: right;
    font-stretch: normal;
    line-height: 14px;
    color: #ffffff;
  }
  .arraw{
    width: 6px;
    height: 10px;
    margin-top: 4px;
    margin-right: 16px;
    margin-left: 9px;
  }
</style>
