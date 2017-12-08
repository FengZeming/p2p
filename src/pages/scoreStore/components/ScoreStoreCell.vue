<template>
  <div style="width: 100%;height: 90px;display: flex;align-items: center;">
    <div style="flex: 1;">
      <p style="margin-left: 10px;display: flex;color:#1f60db;font-size: 16px;flex: 1;line-height: 30px;
 font-weight: bold;
">
        {{message.desc}}&nbsp;<span style="color: #333333;font-weight: lighter">+{{message.value}}分</span></p>
      <p style="font-size: 12px;color: #999;margin-left: 10px;line-height: 20px;">{{message.abstract}}</p>
    </div>
    <div
      @click="onClick"
      style="border-radius: 2px; background: #ab3c01;display: flex;justify-content: center;align-items: center;
        margin-right: 16px;width: 85px;height: 30px;font-size: 17px;text-align: center;color: #fff;">去完成
    </div>
  </div>
</template>

<script>
  export default {
    props: ['message'],
    components: {},
    data() {
      return {}
    },
    methods: {
      onClick() {
        window.location.href = this.message.url;
      }
    },
    computed: {},
    mounted() {

    }
  }
</script>

<style scoped>

</style>
