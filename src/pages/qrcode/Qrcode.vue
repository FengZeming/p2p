<template>
  <div style="display: flex;flex-direction: row;">
    <tab :line-width="1" custom-bar-width="70px" style="position: fixed;width:100%;">
      <tab-item selected @on-item-click="onItemClick(0)">学前</tab-item>
      <tab-item @on-item-click="onItemClick(1)">小学</tab-item>
      <tab-item @on-item-click="onItemClick(2)">初中</tab-item>
      <tab-item @on-item-click="onItemClick(3)">高中</tab-item>
    </tab>
    <div style="padding-top: 50px;align-items:center;display: flex;flex-direction: column;width: 100%;">
      <p class="btn"> 长按二维码，加入家长交流群 </p>
      <img v-if="selectedIndex==0" :src="type0.src">
      <img v-if="selectedIndex==1" :src="type1.src">
      <img v-if="selectedIndex==2" :src="type2.src">
      <img v-if="selectedIndex==3" :src="type3.src">
      <p class="hint">还剩{{residue}}个免费名额，快快扫码入群吧！</p>

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
        var self = this;
        this.selectedIndex = index;
        if (this['type' + index].count <= 0 || !this['type' + index].src) {
          axios.get('http://api.prguanjia.com/table/qrcode/' + index)
            .then(function (response) {
              self['type' + self.selectedIndex] = response.data.data
            }).catch(function (err) {
            console.log(err);
          })
        }
      }
    },
    computed:{
      residue(){
        return this['type' + this.selectedIndex].count;
      }
    },
    mounted() {
      this.onItemClick(0);
    }
  }

</script>

<style scoped>
  .btn {
    font-family: PingFang-SC-Medium;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #057704;
    padding: 4px 20px;
    margin-top: 25px;
    background-color: #ffffff;
    border-radius: 33px;
    border: dotted 1px #038f02 ;
  }

  img {
    margin-top: 44px;
    min-width: 170px;
    max-width: 170px;
    min-height: 170px;
    max-height: 170px;
    overflow: hidden;
  }

  .hint {
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    margin-top: 25px;
    line-height: 0px;
    letter-spacing: 0px;
    color: #999999;
  }
</style>
