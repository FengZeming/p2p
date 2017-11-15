<template>
  <div style="display: flex;width: 100%;background-color: white">
    <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-start;padding: 12px;"
         @click="onClick(true)"
    >
      <p style="color:#999;font-size: 13px;">金库余额&nbsp;(元)</p>
      <div style="margin-top: 8px; display: flex; align-items: flex-end;">
        <p style="font-size: 23px;color: #333;line-height: 22px;">{{message.mywallet}}</p>
        <p>明细</p>
      </div>
    </div>
    <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-start;padding: 12px;"
         @click="onClick(false)"
    >
      <p style="color:#999;font-size: 13px;">金币&nbsp;(个)</p>
      <div style="margin-top: 8px; display: flex; align-items: flex-end;">
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
      }
    }
  }
</script>
<style scoped>

  p + p {
    font-family: PingFang-SC-Regular;
    font-size: 10px;
    font-weight: normal;
    padding: 2px 2px;
    font-stretch: normal;
    line-height: 10px;
    letter-spacing: 0px;
    color: #999999;
    border-radius: 6px;
    border: solid 1px #bfbfbf;
    margin-left: 5px;
  }

</style>
