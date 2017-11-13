<template>
  <div style="display: flex;flex-direction: row;background-color: white;
    height: 40px;width: 100%; align-items: center;">
    <p style="display:flex; align-items: center;justify-content: center; font-size: 14px;min-width: 25%;height: 100%;">
      平台名称
    </p>
    <div style="display: flex;overflow: scroll;flex-direction: row;height: 100%; min-width:75%;" ref="gridHeaderContainer">
      <p class="wrapItem">
        年华收益
      </p>
      <p class="wrapItem">
        投资人数
      </p>
      <p class="wrapItem">
        成交量(万)
      </p>
    </div>
  </div>
</template>
<script>
  import Divider from '../../../components/Divider1px'

  export default {
    props: ['message'],
    components:{
      Divider
    },
    methods: {
      titleLength() {
        return this.message.length() / 5;
      },
      menu() {
      },
      scrollLeftTo(x) {
        this.$refs.gridHeaderContainer.scrollTo(x, 100);
      }
    },
    computed: {},
    mounted() {
      this.$refs.gridHeaderContainer.addEventListener('scroll', this.menu);
    },
  }
</script>
<style scoped>
  .wrapItem {
    display: flex;
    min-width: 33.333%;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #333;
  }

</style>
