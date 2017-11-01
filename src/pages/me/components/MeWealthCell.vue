<template>
  <div style="display: flex;width: 100%;background-color: white">
    <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-start;padding: 12px;">
      <p style="color:#999;font-size: 13px;">金库余额(元)</p>
      <p style="margin-top: 4px;font-size: 23px;color: #333;">88.28</p>
    </div>
    <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-start;padding: 12px;">
      <p style="color:#999;font-size: 13px;">金币(个)</p>
      <p style="margin-top: 4px;font-size: 23px;color: #333;">88</p>
    </div>

  </div>

</template>
<script>
  import Divider from '../../../components/Divider';
 export default {
   components:{
     Divider
   }
 }
</script>
