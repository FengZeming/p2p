<template>
  <div style="display: flex;flex-direction: column;">
    <p style="padding-left: 10px;padding-top: 8px;padding-bottom: 5px;font-size: 13px;color: #999;">投资建议</p>
    <div style="width: 100%;height: 0.5px;background-color: #f4f4f4;"></div>
    <p style="color: #666;font-size: 16px; padding:8px 10px;">
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
