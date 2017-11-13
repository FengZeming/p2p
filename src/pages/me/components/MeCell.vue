<template>
  <div style="height: 60px;width: 100%; display: flex;align-items: center;">
    <img :src="itemIcon" style="max-width: 70%;margin-left: 10px;
    max-height: 70%;" alt="卡券">
    <p style="font-size: 18px;color: #333;margin-right: 4px;">{{itemTitle}}</p>
    <span
      style="padding: 2px 5px;background-color:#f60; border-radius: 8px;font-size: 10px;color: white;line-height: 14px;">
      即将过期
    </span>
    <p style="flex: 1; text-align: right;font-size: 12px;color: #999">1张待使用</p>
    <img :src="require('../../../assets/images/arrow.png')"
         style="max-height:30%;margin-right: 10px;margin-left: 10px;">
  </div>
</template>
<script>
  import s from '../../../assets/images/钱包.png'
  export default {
    props: ['message'],
      computed:{
         itemIcon(){
           return this.message.icon;
         },itemTitle(){
          console.log(this.message.icon);
           return this.message.title;
         },


      }

  }


</script>
<style scoped>


</style>
