<template>
  <div class="itemContainer" :style="{background:bgColor?'#fff':'#fcf3f0'}">
    <p class="wrapItem" style="'flex: 1;" :style="{color:textColor||'#666666'}">
      {{ itemIndex}}
    </p>
    <p class="wrapItem" style="flex: 2;" :style="{color: textColor ||'#dc3d05'}">
      {{ item.platform}}
    </p>
    <p class="wrapItem" style="flex: 2;" :style="{color:textColor||'#666666'}">
      {{ item.bank_name || '-'}}
    </p>
    <p class="wrapItem" style="flex:1.5;" :style="{color:textColor||'#666666'}">
      {{ item.comment || '-' }}
    </p>
  </div>

</template>
<script>

  export default {
    components: {},
    props: ['message'],
    methods: {},
    computed: {
      bgColor() {
        return this.message.index % 2
      },
      titleColor() {
        return this.message.color;
      },
      itemIndex() {
        return this.message.index + 1;
      }
      ,
      item() {
        return this.message.item;
      },
      textColor() {
        return this.message.disable ? '#999999' : null;
      }
    },
    mounted() {
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
    color: #666666;
    font-size: 14px;
    width: 60px;
    align-items: center;
    justify-content: center;

  }

</style>
