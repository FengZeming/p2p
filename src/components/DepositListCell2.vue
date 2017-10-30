<template>
  <div class="itemContainer" :style="{background:bgColor?'#fff':'#fcf3f0'}" @click="toDetail">
    <p class="wrapItem" style="'flex: 1;">
      {{ itemIndex}}
    </p>
    <p class="wrapItem" style="flex: 2;" :style="{color: titleColor ||'#dc3d05'}">
      {{ item.platform}}
    </p>
    <p class="wrapItem" style="flex: 2;">
      {{ item.bank_name || '-'}}
    </p>
    <p class="wrapItem" style="flex:1.5;">
      {{ item.comment || '-' }}
    </p>
  </div>

</template>
<script>

  export default {
    components: {},
    props: ['message'],
    methods: {
      toDetail(e) {
        this.$router.push({
          path: '/detail'
        })
      }

    },
    computed: {
      bgColor() {
        return this.message.index % 2
      },
      titleColor() {
        return this.message.color;
      },
      itemIndex() {
        return this.message.index + 1;
      }
      ,
      item() {
        return this.message.item;
      }
    }
  }
</script>
<style scoped>
  .itemContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 40px;
    align-items: center;
  }

  .wrapItem {
    display: flex;
    color: #666666;
    font-size: 14px;
    width: 60px;
    align-items: center;
    justify-content: center;

  }

</style>
