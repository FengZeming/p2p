<template>
  <div style="display: flex;flex-direction: row;">
    <tab :line-width="1" custom-bar-width="70px" style="position: fixed;width:100%;">
      <tab-item selected @on-item-click="onItemClick(0)">1-3年级</tab-item>
      <tab-item @on-item-click="onItemClick(1)">4-6年级</tab-item>
      <tab-item @on-item-click="onItemClick(2)">初中</tab-item>
      <tab-item @on-item-click="onItemClick(3)">高中</tab-item>
    </tab>
    <div style="padding-top: 50px;align-items:center;display: flex;flex-direction: column;width: 100%;">
      <p> 长按二维码进群学习💖获取资料💖</p>
      <img v-if="selectedIndex==0" :src="type0.src">
      <img v-if="selectedIndex==1" :src="type1.src">
      <img v-if="selectedIndex==2" :src="type2.src">
      <img v-if="selectedIndex==3" :src="type3.src">

    </div>


  </div>

</template>
<script>
  import {Tab, TabItem, Group, Cell} from 'vux'
  import axios from 'axios'

  export default {
    components: {
      Tab,
      TabItem,
      Group,
      Cell
    },
    data() {
      return {
        selectedIndex: 0,
        type0: {
          src: '',
          count: 0
        },
        type1: {
          src: '',
          count: 0
        },
        type2: {
          src: '',
          count: 0
        },
        type3: {
          src: '',
          count: 0
        }
      }

    },
    methods: {
      onItemClick(index) {
        var self =this;
        this.selectedIndex = index;
        if (this['type' + index].count <= 0 || !this['type' + index].src) {
          axios.get('http://api.prguanjia.com/table/qrcode/' + index)
            .then(function (response) {
              self['type'+self.selectedIndex] = response.data.data
            }).catch(function (err) {
            console.log(err);
          })
        }
      }
    },
    mounted() {
      this.onItemClick(0);
    }
  }

</script>

<style scoped>
  p {
    color: #666;
    margin-top: 10px;
  }

  img {
    margin-top: 20px;
    min-width: 90vw;
    max-width: 100vw;
    min-height: 90vw;
    max-height: 100vw;
    overflow: hidden;
  }

</style>
