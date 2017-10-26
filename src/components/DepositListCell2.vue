<template>
  <div class="itemContainer" :style="{background:bgColor?'#edf5fa':'#f8fcee'}" @click="toDetail">
    <p class="wrapItem" style="'flex: 2;" :style="{color: titleColor ||'#080363'}">
      {{ itemIndex}}
    </p>
    <p class="wrapItem" style="width: 80px; ">
      {{ item.platform}}
    </p>
    <p class="wrapItem" style="width: 70px;">
      {{ item.bank_name || '-'}}
    </p>
    <p class="wrapItem" style="width: 80px;">
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
        console.log('detail')
        this.$router.push({
          path: '/'
        })
      }

    },
    computed: {
      bgColor() {
        return this.message.index % 2
      }, titleColor() {
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
    color: #999999;
    font-size: 14px;
    width: 60px;
    align-items: center;
    justify-content: center;

  }

</style>
