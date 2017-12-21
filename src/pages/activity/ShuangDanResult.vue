<template>
  <div class='container' ref="container"
       :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/兑奖页面.jpg')+')'}">
    <img :src="image" alt=" "
         style="width: 168px;height: 71px;margin-top: 60px;margin-left: -90px;">
    <p class="title">{{data[type].step1}} <span style="font-weight: bold;">{{data[type].wxcode}}</span></p>

    <img class="qrcode" :src="qrcode" alt="">

    <div style="display: flex;margin-right:22px;">
      <p class="title" style="margin-top: 0;display: flex;">第二步：</p>
      <p style="display: inline-block;float: left;font-size: 14px;color: #333;flex: 1;">
        {{data[type].desc}}</p>
    </div>
    <p style="font-size: 12px;	line-height: 20px;	color: #666666;margin: 30px 20px 0 12px ">
      *本活动奖品由互金每日早知道提供。最终解释权归互金每日早知道所有
    </p>

  </div>
</template>

<script>
  export default {
    prop: ['message'],
    components: {},
    data() {
      return {
        data: {
          type0: {
            step1: '第一步：扫码添加微信',
            wxcode: '',
            desc: '注册并投资相应金额即可获得！(限即日起至12月20日新注册用户）',
          },
          type1: {
            step1: '第一步：关注公众号',
            wxcode: '互金每日早知道',
            desc: '在公众号“互金每日早知道”内回复“领奖”，即可兑奖。',
          }
        }
      }
    },
    methods: {},
    computed: {
      type() {
        return 'type0'
      },
      image() {
        return require('../../assets/images/shuangdan/' + (this.$route.params && this.$route.params.prize ? this.$route.params.prize : 2) + 'yuan.png')
      },
      qrcode() {
        if (this.$route.params.prize == 1) {
          return require('../../assets/images/shuangdan/qrcode.jpg');
        } else {
          return require('../../assets/images/shuangdan/wxqrcode.jpg')
        }
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
    height: 100%;
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
