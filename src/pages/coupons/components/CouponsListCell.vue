<template>
  <div style="background-color: #f4f4f4;padding:20px 20px 10px 20px; ;">
  <div style="background-color:white;display: flex; flex-direction: column;">
    <divider :message="{height:'10px'}" style="background-color: #999;"></divider>
    <div style="display: flex;flex-direction: row">
      <p style="flex: 1;">加息券</p>
      <p>懒财网加息券</p>
    </div>
    <div style="display: flex;">
      <p style="font-size: 24px;">1<span style="font-size: 16px;">%</span></p>
      <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-end;">
        <p>已使用</p>
        <p>2017.07.20 - 2017.08.20</p>
      </div>
    </div>
    <div style="display: flex;flex-direction: row;padding-left: 5px;padding-right: 1px;">
      <div v-for="i in 20"  class="semi-circle"></div>
    </div>

  </div>

  </div>
</template>

<script>
  import Divider from '../../../components/Divider';

  export default {
    components: {
      Divider,
    }


  }

</script>
<style>
  .semi-circle {
    border-radius: 8vw 8vw 0 0;
    height: 1.5vw;
    width: 4vw;
    margin-right: 4px;
    background-color: #f4f4f4;
  }

</style>
