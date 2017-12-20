<template>
  <div class='container' ref="container"
       :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/兑奖页面.jpg')+')'}">
    <img src="../../assets/images/shuangdan/58yuan.png" alt=" "
         style="width: 168px;height: 71px;margin-top: 60px;margin-left: -90px;">

  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    computed: {},
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

</style>
