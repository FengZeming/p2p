<template>
  <div style="display: flex;flex-direction: row; height: 44px;width: 100%; align-items: center;">
    <p style="display:flex;flex: 0.7; align-items: center;justify-content: center; font-size: 14px;">
      {{indexTitle(0)}}
    </p>
    <p class="wrapItem" style="margin-left: 0;font-size: 14px;">
      {{indexTitle(1)}}
    </p>
    <p class="wrapItem">
      {{indexTitle(2)}}
    </p>
    <p class="wrapItem">
      {{indexTitle(3)}}
    </p>
    <p v-if="titleLength" class="wrapItem" style="margin-right: 5px; font-size: 12px">
      {{indexTitle(4)}}
    </p>
  </div>

</template>
<script>
  export default {
    name: 'symbol',
    props: ['message'],
    mounted() {

    },
    methods: {
      indexTitle(i) {
        return this.message[i];
      },
      titleLength() {
        return this.message.length() / 5;
      }
    },
    computed: {}
  }
</script>
<style scoped>

  .wrapItem {
    margin-left: 4px;
    text-align: center;
    margin-right: 4px;
    font-size: 14px;
    color: #333;
    flex:1;
  }


</style>
