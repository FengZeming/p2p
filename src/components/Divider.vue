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
