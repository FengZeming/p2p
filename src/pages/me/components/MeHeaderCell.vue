<template>
  <div>
    <div style="display: flex;width: 100%;height: 100px;
      align-items: center; background-size: cover;background-repeat: no-repeat;"
         :style="{backgroundImage:'url('+pic+')'}">
      <img :src="message.headimgurl" @click="goProfile" alt=" ">

      <p style="color: white;font-size: 17px;" @click="goProfile">{{message.nickname}}</p>

      <!--<div style="align-self: center;margin-left: -5px;">-->
      <!--<p style="color: white;font-size: 12px;">黄金会员</p>-->
      <!--</div>-->
    </div>
    <div
      style="display: flex; background-color: rgb(0,62,203);justify-content: center;align-items: center;align-self: center;">
      <p style="color: white;font-size: 16px;padding: 5px; flex: 1;align-self: center;">可提现金额: {{message.withdrawable}} 元</p>
      <button @click="onClick">提现</button>
    </div>

  </div>
</template>

<script>
  import fetch from '../../../api/http';

  export default {
    props: ['message'],
    data() {
      return {
        pic: require('../../../assets/images/user/bg_1.jpg')
      }
    },
    methods: {
      goProfile() {
        this.$router.push('./profile');
      },
      onClick(){
        this.$emit('btnClick')
      }
    },
    computed: {},
    mounted() {
    }
  }
</script>

<style scoped>
  img {
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
    margin-bottom: 6px;
    font-size: 15px;
    color: blue;
    margin-right: 10px;
    padding: 2px 10px;
  }

</style>
