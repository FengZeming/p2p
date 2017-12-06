<template>
  <div>
    <div style="height: 45px;width: 100%;display: flex;align-items: center;">
      <div style="	width: 2px;height: 15px;margin-left: 15px;" :style="{backgroundColor:message.pageType?'#7c4dff':'#2772ff'}"></div>
      <p style="margin-left: 10px;" :style="{color:message.pageType?'#7c4dff':'#2772ff'}">{{month}}</p>
    </div>
    <divider></divider>
  </div>

</template>

<script>
  import Divider from '../../../../components/Divider1px'

  export default {
    props: ['message'],
    components: {Divider},
    data() {
      return {}
    },
    methonds: {},
    computed: {
      month() {
        if (parseInt(this.message.item.indate.split('-')[1]) === new Date().getMonth() + 1
            && parseInt(this.message.item.indate.split('-')[0]) === 1900+new Date().getYear() ) {
          return '本月'
        }
        return this.message.item.indate.split('-')[1] + '月';
      }
    },
    mounted() {
    }

  }
</script>

<style scoped>

</style>
