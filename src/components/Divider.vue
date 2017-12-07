<template>

  <div style="width: 100%;background-color: #f4f4f4;" :style="{height:dividerHeight}"></div>

</template>
<script>
  export default {
    props:['message'],
    computed:{
      dividerHeight(){

        return this.message&& this.message.height ? this.message.height:0.5;

      }
    }
  }
</script>


<style scoped>

  .background-gradient-1px {
    background:
      linear-gradient(180deg, black, black 50%, transparent 50%) top left / 100% 1px no-repeat,
      linear-gradient(90deg, black, black 50%, transparent 50%) top right / 1px 100% no-repeat,
      linear-gradient(0, black, black 50%, transparent 50%) bottom right / 100% 1px no-repeat,
      linear-gradient(-90deg, black, black 50%, transparent 50%) bottom left / 1px 100% no-repeat;
  }
  /* 或者 */
  .background-gradient-1px{
    background: -webkit-gradient(linear, left top, left bottom, color-stop(.5, transparent), color-stop(.5, #d8d8d8), to(#d8d8d8)) left bottom repeat-x;
    background-size: 100% 1px;
  }

</style>
