<template>
  <div>
    <div style="height: 75px;width: 100%;">


    </div>
    <divider :style="{marginLeft: marLeft}"></divider>
  </div>

</template>

<script>
  import Divider from '../../../../components/Divider1px'

  export default {
    props:['isLast'],
    components: {Divider},
    data() {
      return {}
    },
    methonds: {},
    computed: {
      marLeft(){
        return this.isLast? '0px':'10px'
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
