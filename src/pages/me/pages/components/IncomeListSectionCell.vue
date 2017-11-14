<template>
  <div>
    <div style="height: 45px;width: 100%;display: flex;align-items: center;">
      <div style="	width: 2px;height: 15px;background-color: #7c4dff;margin-left: 15px;"></div>
      <p style="color: #7c4dff;margin-left: 10px;">{{month}}</p>
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
        if (parseInt(this.message.indate.split('-')[1]) === new Date().getMonth() + 1) {
          return '当月'
        }
        return this.message.indate.split('-')[1] + '月';
      }
    },
    mounted() {
      console.log(this.message)
    }
  }
</script>

<style scoped>

</style>
