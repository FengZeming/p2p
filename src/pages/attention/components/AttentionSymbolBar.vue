<template>
  <div style="display: flex;flex-direction: row;
    height: 44px;width: 100%; align-items: center;">
    <p style="display:flex; align-items: center;justify-content: center; font-size: 15px;width: 20%;">
      {{indexTitle(0)}}
    </p>
    <div style="display: flex;overflow: scroll; width: 80%;" ref="gridHeaderContainer">
      <p class="wrapItem" style="margin-left: 0;">
        indexTitle(1)indexTitleindexTitleindexTitle
      </p>
      <p class="wrapItem">
        indexTitle(1)indexTitleindexTitleindexTitle
      </p>
      <p class="wrapItem">
        {{indexTitle(3)}}
      </p>
      <p class="wrapItem">
        {{indexTitle(4)}}
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['message'],

    methods: {
      indexTitle(i) {
        return '12';
        return this.message[i];
      },
      titleLength() {
        return this.message.length() / 5;
      },
      menu() {
        console.log (' scroll  :  '+this.$refs.gridHeaderContainer.scrollLeft)
      },
      scrollLeftTo(x){
        console.log (' scrollTo:' + x);
        this.$refs.gridHeaderContainer.scrollTo(x,100);
      }
    },
    computed: {},
    mounted() {
      this.$refs.gridHeaderContainer.addEventListener('scroll',this.menu);
    },
  }
</script>
<style scoped>
  .wrapItem {
    width: 400px;
    margin-left: 4px;
    margin-right: 4px;
    font-size: 14px;
    text-align: center;
    color: #333;
  }

</style>
