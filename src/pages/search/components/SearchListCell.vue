<template>
  <div class="itemContainer" :style="{background:itemIndex?'white':'#edf5fa'}">
    <p class="wrapItem" style="'flex: 2;margin-left:5px;" :style="{color: isQuestion ?'#999':'#dc3d05'}">
      {{indexId + 1}}
    </p>
    <p class="wrapItem" style="flex: 3; justify-content: flex-start; margin-left: 10px;"
       :style="{color: isQuestion ?'#999999':'#080363'}">
      {{ item.platform}}
    </p>
    <img v-if="isQuestion" :src="require('../../../assets/images/flightning.png')"
         style="width: 20px;height: 20px; justify-content: center;margin-right: 30px;"/>
  </div>
</template>
<script>
  export default {
    name: 'cell',
    props: ['message']
    ,
    mounted() {
    },
    computed: {
      item() {
        return this.message.item;
      },
      itemIndex() {
        return this.message.index % 2;
      },
      indexId() {
        return this.message.index;
      },
      isQuestion() {
        return this.message.item.is_question==='1';
      },
      titleColor() {
        return this.message.titleColor;
      },
      textColor() {
        return this.message.disable ? '#999999' : null;
      }
    }
  }
</script>

<style scoped>
  .itemContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 40px;
    align-items: center;
  }

  .wrapItem {
    display: flex;
    color: #666;
    font-size: 14px;
    width: 60px;
    align-items: center;
    justify-content: center;

  }


</style>
