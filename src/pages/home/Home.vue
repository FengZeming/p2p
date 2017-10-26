<template>


  <view-box class="viewBox">
    <div>
      Home
    </div>

  </view-box>
</template>
<script>

  import {
    ViewBox
  } from 'vux';
  import axios from 'axios';

  export default {
    name: 'home',
    components: {
      ViewBox
    },
    data() {
      return {}
    },
    methods: {
      getRankList() {
        axios.get('/table/rankList')
          .then(function (response) {
            console.log(response)
          }).catch(function (err) {
          console.log(err);
        })
      }
    },
    mounted() {
      this.getRankList();
    }
  }


</script>

<style lang="less" scoped>

  .viewBox {
    width: 100%;
    height: 100%;
  }

</style>
