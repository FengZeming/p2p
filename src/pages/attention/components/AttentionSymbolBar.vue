<template>
  <div style="display: flex;flex-direction: row; background-color: aliceblue;
    height: 44px;width: 100%; align-items: center;">
    <p style="display:flex; align-items: center;justify-content: center; font-size: 15px;width: 100px;">
      {{indexTitle(0)}}
    </p>
    <div style="display: flex;overflow: scroll;flex-direction: row; flex:1;" ref="gridHeaderContainer">
      <p class="wrapItem">
        标题1
      </p>
      <p class="wrapItem">
        标题11
      </p>
      <p class="wrapItem">
        标题111
      </p>
      <p class="wrapItem">
        标题1111
      </p>
      <p class="wrapItem">
        标题11111
      </p>
      <p class="wrapItem">
        标题111111
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['message'],

    methods: {
      indexTitle(i) {
        return '标题';
        return this.message[i];
      },
      titleLength() {
        return this.message.length() / 5;
      },
      menu() {
        console.log(' scroll  :  ' + this.$refs.gridHeaderContainer.scrollLeft)
      },
      scrollLeftTo(x) {
        console.log(' scrollTo:' + x);
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
    min-width: 100px;
    margin-left: 4px;
    margin-right: 4px;
    font-size: 14px;
    text-align: center;
    color: #333;
  }

</style>
