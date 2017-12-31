<template>
  <div style="display: flex;flex-direction: column;align-items: center; margin-top: 20px;">
    <div style="display: flex;flex-direction: row; width: 100%; height: 10px;align-items:center;">
      <divider-onepx style="flex: 1px;"></divider-onepx>
      <div id="arrow"></div>
      <divider-onepx style="flex: 1px;"></divider-onepx>
    </div>

    <div
      style="display: flex;flex-direction: row;justify-content:space-around;width: 100%;margin-left: 20px;margin-right: 20px;">
      <div>
        <p> 段位</p>
        <p> 2345</p>

      </div>
      <div>
        <p> 段位</p>
        <p> 2345</p>

      </div>
      <div>
        <p> 段位</p>
        <p> 2345</p>

      </div>
    </div>

    <divider-onepx style="width: 100%;"></divider-onepx>
    <divider :message="{height:'3px'}" style="margin-top: 3px;background-color: #0052da"></divider>
  </div>

</template>
<script>
  import DividerOnepx from '../../../../components/Divider1px'
  import Divider from '../../../../components/Divider'

  export default {
    components: {
      DividerOnepx,
      Divider
    }

  }

</script>
<style scoped>
  #arrow {
    display: block;
    height: 8px;
    width: 8px;
    border-width: 1px;
    background-color: white;
    border-color: transparent;
    border-style: solid;
    border-top-color: #d8d8d8;
    border-left-color: #d8d8d8;
    transform: rotate(45deg);
  }
  div p{
    font-family: ﻿FZLTHK--GBK1-0;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #448aff;
  }
</style>
