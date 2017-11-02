<template>
  <div>
    <grid :cols="2">
      <grid-item v-for="i in 6" :key="i" style="height: 55px;padding: 10px;align-items: center;display: flex;">
        <div style="display: flex;align-items: center;">
          <img :src="require('../../../assets/images/关注.png')"
               style="width: 30px;height: 30px;">
          <p style="color: #333;font-size: 15px;">
            每日签到
          </p>
        </div>
      </grid-item>
    </grid>
  </div>

</template>
<script>
  import {Grid, GridItem, GroupTitle} from 'vux'

  export default {
    components: {
      Grid,
      GridItem
    }
  }
</script>
<style scoped>
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
</style>
