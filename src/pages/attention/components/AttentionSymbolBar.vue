<template>
  <div style="display: flex;flex-direction: row;
    height: 40px;width: 100%; align-items: center;">
    <p style="display:flex; align-items: center;justify-content: center; font-size: 14px;min-width: 25%;height: 100%;">
      {{indexTitle(0)}}
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
  export default {
    props: ['message'],
    methods: {
      indexTitle(i) {
        return '平台名称';
      },
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
