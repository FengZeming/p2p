<template>
  <div>
    <div style="display: flex;width: 100%;height: 80px;
      align-items: center; background-size: cover;background-repeat: no-repeat;"
         :style="{backgroundImage:'url('+pic+')'}">
      <img :src="require('../../../assets/images/钱包.png')" @click="goProfile" alt="头像">

      <p style="color: white;font-size: 17px;" @click="goProfile">miss古铜</p>

      <!--<div style="align-self: center;margin-left: -5px;">-->
      <!--<p style="color: white;font-size: 12px;">黄金会员</p>-->
      <!--</div>-->
    </div>
    <div
      style="display: flex; background-color: #0c3481;justify-content: center;align-items: center;align-self: center;">
      <p style="color: white;font-size: 16px;padding: 5px; flex: 1;align-self: center;">可提现金额: 10.36 </p>
      <button>提现</button>
    </div>

  </div>
</template>

<script>
  import fetch from '../../../api/http';
  export default {
    data() {
      return {
        pic: require('../../../assets/images/user/bg_1.jpg')
      }
    },
    methods: {
      goProfile() {
        this.$router.push('./home');
      }
    },
    mounted(){

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
