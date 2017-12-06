<template>
  <div
    style="display: flex;width: 100%;background-color: white;height: 100px;justify-content: center;align-items: center;">
    <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-start;padding: 12px;"
         @click="onClick(true)"
    >
      <p style="color:#999;font-size: 13px;">现金余额&nbsp;(元)</p>
      <div style="margin-top: 13px; display: flex; align-items: flex-end;">
        <p style="font-size: 23px;color: #333;line-height: 22px;">{{message.mywallet}}</p>
        <p>明细</p>
      </div>
    </div>
    <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-start;padding: 12px; padding-right: 0px;"
         @click="onClick(false)">
      <div style="display: flex; width: 100%;">
        <p style="color:#999;font-size: 13px;">积分&nbsp;(个)</p>
        <i style="flex: 1;"> </i>
        <div @click="onExchange"
             style="width: 60px;height: 22px;background-color: white;
      display: flex;justify-content: center;align-items: center;
      border: solid 1px #2772ff;border-radius: 12px 0px 0px 12px">
          <img src="../.././../assets/images/user/gift.png" alt=" "
               style="align-self: center; width:15px; height:15px; ">
          <p style="color: #2772ff;font-size: 13px; margin-left: 3px;align-self: center;">兑换</p>
        </div>
      </div>

      <div style="margin-top: 13px; display: flex; align-items: flex-end;">
        <p style="font-size: 23px;color: #333;line-height: 22px;">{{message.mycoin}}</p>
        <p>明细</p>
      </div>

    </div>

  </div>

</template>
<script>
  import Divider from '../../../components/Divider'

  export default {
    props: ['message'],
    components: {
      Divider
    },
    methods: {
      onClick(type) {
        this.$router.push({path: '/incomeDetail', query: {message: this.message, type: type}})
      },
      onExchange(ev) {
        this.$emit('doExchange');
        ev.cancelBubble = true;
      }
    }
  }
</script>
<style scoped>

  p + p {
    font-family: PingFang-SC-Regular;
    font-size: 12px;
    font-weight: normal;
    padding: 2px 5px;
    transform: scale(0.8);
    font-stretch: normal;
    line-height: 12px;
    letter-spacing: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    color: #999999;
    border-radius: 10px;
    border: solid 1px #bfbfbf;
    margin-left: 0px;
  }

</style>
