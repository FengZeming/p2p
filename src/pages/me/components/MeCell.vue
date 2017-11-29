<template>
  <div style="height: 65px;width: 100%; display: flex;align-items: center;">
    <img :src="itemIcon"
         style="max-width: 50%;margin-left: 10px;max-height: 50%;" alt=" "
    >
    <p style="font-size: 18px;color: #333;margin-right: 2px;"
       :style="{color:themeColor}"
    >{{itemTitle}}</p>
    <span v-show="message.warn"
      style="padding: 2px 5px;background-color:#f60; border-radius: 8px;
      font-size: 10px;color: white;line-height: 14px;transform:scale(0.8);"
    >
      {{message.warn}}
    </span>
    <p style="flex: 1; text-align: right;font-size: 12px;"
       :style="{color:descColor}"
    >{{message.desc}}</p>
    <img :src="require('../../../assets/images/arrow.png')"
         style="max-height:30%;margin-right: 10px;margin-left: 10px;">
  </div>
</template>
<script>
  export default {
    props: ['message'],
    computed: {
      themeColor() {
        return this.message.disabled ? '#ccc' : '#333';
      },
      descColor(){
        return this.message.disabled ? '#ccc' : '#999';
      },
      itemIcon() {
        return this.message.icon;
      }, itemTitle() {
        return this.message.title;
      },
    }
  }
</script>
<style scoped>


</style>
