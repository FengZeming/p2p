<template>
  <div class="itemContainer">
    <!--{{message}}-->
    <p class="wrapItem" style="flex: 1; background-color: red;">
      {{ message.platform}}
    </p>
    <p class="wrapItem" style="width: 80px;">
      {{ message.ranking}}
    </p>
    <p class="wrapItem" style="width: 70px;">
      {{ message.wdzj_grade}}
    </p>
    <p class="wrapItem" style="width: 90px;">
      {{ message.wdty_grade}}
    </p>
    <p class="wrapItem">
      {{ message.rong_grade}}
    </p>


  </div>
</template>
<script>
  export default {
    name: 'cell',
    props: ['message']
  }
</script>

<style>
  .itemContainer {
    display: flex;
    flex-direction: row;
    height: 60px;
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
