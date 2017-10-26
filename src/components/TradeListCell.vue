<template>
  <div class="itemContainer" :style="{background:itemIndex?'#edf5fa':'#f8fcee'}">
    <p class="wrapItem" style="width: 40px;">
      {{ itemIndex}}
    </p>
    <p class="wrapItem" style="flex: 1;" :style="{color: titleColor ?titleColor:'#080363'}">
      {{ item.platName}}
    </p>
    <p class="wrapItem" style="width: 70px;">
      {{ item.incomeRate ? item.incomeRate : '-'}}
    </p>
    <p class="wrapItem" style="width: 100px;">
      {{ item.bidderNum ? item.bidderNum : '-' }}
    </p>
    <p class="wrapItem" style="flex: 1;">
      {{ item.amount ? item.amount : '-'}}
    </p>

  </div>
</template>
<script>
  export default {
    props: ['message'],
    computed: {
      itemIndex() {
        return this.message.index;
      },
      item() {
        return this.message.item;
      },
      bgColor() {
        return this.message.index % 2;
      },
      titleColor() {
        return this.message.titleColor;
      }
    },
    methods: {}

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
    color: #999999;
    font-size: 14px;
    width: 60px;
    align-items: center;
    justify-content: center;

  }
</style>
