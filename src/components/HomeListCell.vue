<template>
  <div class="itemContainer" :style="{background:itemIndex?'#ffffff':'#edf5fa'}">
    <!--{{message}}-->
    <p class="wrapItem" style="'flex: 2;margin-left:5px;" :style="{color: titleColor ?titleColor:'#080363'}">
      {{ item.platform}}
    </p>
    <p class="wrapItem" style="flex: 1; color: #dc3d05;" >
      {{ item.ranking}}
    </p>
    <p class="wrapItem" style="flex: 1;">
      {{ item.wdzj_grade ? item.wdzj_grade : '-'}}
    </p>
    <p class="wrapItem" style="flex: 1;">
      {{ item.wdty_grade ? item.wdty_grade : '-' }}
    </p>
    <p class="wrapItem" style="flex: 1;">
      {{ item.rong_grade ? item.rong_grade : '-'}}
    </p>

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
      titleColor() {
        return this.message.titleColor;
      }
    }
  }
</script>

<style>
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
