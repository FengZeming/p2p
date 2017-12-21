<template>
  <div class='container' ref="container"
       :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/兑奖页面.jpg')+')'}">
    <img :src="image" alt=" "
         style="width: 168px;height: 71px;margin-top: 60px;margin-left: -90px;">
    <p class="title">第一步：扫码添加微信 <span style="font-weight: bold;">licaishi1122</span></p>

    <img class="qrcode" src="../../../dist/images/qrcode.jpg" alt="">

    <div style="display: flex;margin-right:22px;">
      <p class="title" style="margin-top: 0;display: flex;">第二步：</p>
      <p style="display: inline-block;float: left;font-size: 14px;color: #333;flex: 1;">
        注册并投资相应金额即可获得！(限即日起至12月20日新注册用户）</p>
    </div>
    <p style="font-size: 12px;	line-height: 20px;	color: #666666;margin: 30px 20px 0 12px ">
      *本活动奖品由互金每日早知道提供。最终解释权归互金每日
      早知道所有
    </p>

  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    computed: {
      image() {
        return require('../../assets/images/shuangdan/58yuan.png')
      }
    },
    mounted() {
      this.$refs.container.parentNode.style.paddingBottom = 0;
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 242%;
    flex-direction: column;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .title {
    font-size: 15px;
    line-height: 23px;
    margin-top: 75px;
    color: #333333;
    align-self: flex-start;
    margin-left: 12px;
  }

  .qrcode {
    border: 4px solid #004624;
    width: 112px;
    height: 112px;
    margin: 20px;
  }
</style>
