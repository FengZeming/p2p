<template>
  <div style="display: flex;width: 100%;background-color: white">
    <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-start;padding: 12px;"
         @click="onClick(1)"
    >
      <p style="color:#999;font-size: 13px;">金库余额(元)</p>
      <p style="margin-top: 4px;font-size: 23px;color: #333;">{{message.mywallet}}</p>
    </div>
    <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-start;padding: 12px;"
         @click="onClick(1)"
    >
      <p style="color:#999;font-size: 13px;">金币(个)</p>
      <p style="margin-top: 4px;font-size: 23px;color: #333;">{{message.mycoin}}</p>
    </div>

  </div>

</template>
<script>
  import Divider from '../../../components/Divider';

  export default {
    props: ['message'],
    components: {
      Divider
    },
    methods: {
      onClick(index) {
          this.$router.push({path:'/incomeDetail'})
      }
    }
  }
</script>
