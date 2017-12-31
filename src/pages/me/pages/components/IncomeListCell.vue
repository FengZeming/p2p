<template>
  <div>
    <div style="height: 75px;width: 100%;display: flex;">
      <div style="flex: 1;display: flex; justify-content:center;flex-direction: column;margin-left: 16px;">
        <p style="font-family: PingFang-SC-Medium;font-size: 16px;font-weight: normal;
	font-stretch: normal;line-height: 14px;letter-spacing: 0px;color: #282527;">{{message.item.title}}</p>
        <p style="margin-top: 12px;font-family: PingFang-SC-Medium;font-size: 12px;font-weight: normal;
	font-stretch: normal;line-height: 14px;color: #999999;">{{message.item.indate}}</p>
      </div>
      <p style="align-self: center;margin-right: 16px;" :style="{color:message.item.amount>0?'#333':'#f60'}">{{message.item.amount}}</p>

    </div>
    <divider :style="{marginLeft: marLeft}"></divider>
  </div>

</template>

<script>
  import Divider from '../../../../components/Divider1px'

  export default {
    props: ['message'],
    components: {Divider},
    data() {
      return {}
    },
    methonds: {},
    computed: {
      marLeft() {
        return this.message.isLast ? '0px' : '16px'
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
