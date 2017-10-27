<template>
  <div style="display: flex;flex-direction: column;">
    <p style="padding-left: 10px;padding-top: 6px;padding-bottom: 3px;font-size: 13px;color: #999;">投资建议</p>
    <div style="width: 100%;height: 0.5px;background-color: #d8d8d8;padding-left: 10px;"></div>
    <p style="color: #999;font-size: 13px; padding:8px 10px;">
      {{platDesc}}
    </p>
  </div>
</template>
<script>
  export default {
    props:['message'],
    data() {
      return {}
    },
    computed:{
      platDesc(){
        return this.message.advice;
      }
    }
  }

</script>
