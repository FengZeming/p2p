<template>
  <div class="itemContainer" :style="{background:bgColor?'#fff':'#f8fcee'}">
    <p class="wrapItem" style="width: 40px;">
      {{ itemIndex+1}}
    </p>
    <p class="wrapItem" style="flex: 1.2;font-size: 13px;" :style="{color:  textColor||'#377902'}">
      {{ item.platName}}
    </p>
    <p class="wrapItem" style="flex: 1;" :style="{color:  textColor||'#333'}">
      {{ item.incomeRate ? item.incomeRate : '-'}}
    </p>
    <p class="wrapItem" style="flex: 1;" :style="{color:  textColor||'#333'}">
      {{ item.bidderNum ? item.bidderNum : '-' }}
    </p>
    <p class="wrapItem" style="flex: 1;" :style="{color:  textColor||'#333'}">
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
      textColor() {
        return this.message.disable?'#999999':null
      }
    },
    methods:{
    },

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
    color: #333;
    font-size: 14px;
    width: 60px;
    align-items: center;
    justify-content: center;

  }
</style>
