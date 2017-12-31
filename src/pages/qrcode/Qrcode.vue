<template>
  <div style="display: flex;flex-direction: column;">
    <tab v-show="!selectedType" :line-width="1" custom-bar-width="70px" style="position: relative;width:100%;">
      <tab-item :selected="isTabSelect(0)" @on-item-click="onItemClick(0)">学前</tab-item>
      <tab-item :selected="isTabSelect(1)" @on-item-click="onItemClick(1)">小学</tab-item>
      <tab-item :selected="isTabSelect(4)" @on-item-click="onItemClick(4)">初中</tab-item>
      <tab-item :selected="isTabSelect(5)" @on-item-click="onItemClick(5)">高中</tab-item>
    </tab>
    <tab v-if="showChildTab" :line-width="1" custom-bar-width="60px" :style="{width:selectedType? '100%':'80%'}"
         style="position: relative;height: 38px;align-self: center;">
      <tab-item :selected="isChildTabSelect(1)" @on-item-click="onItemClick(1)">1-2年级</tab-item>
      <tab-item :selected="isChildTabSelect(2)" @on-item-click="onItemClick(2)">3-4年级</tab-item>
      <tab-item :selected="isChildTabSelect(3)" @on-item-click="onItemClick(3)">5-6年级</tab-item>
    </tab>
    <div style="padding-top: 50px;align-items:center;display: flex;flex-direction: column; width: 100%;"
    >
      <p class="btn"> 长按二维码，加入家长交流群 </p>
      <img v-if="selectedIndex==0" :src="type0.src">
      <img v-if="selectedIndex==1" :src="type1.src">
      <img v-if="selectedIndex==2" :src="type2.src">
      <img v-if="selectedIndex==3" :src="type3.src">
      <img v-if="selectedIndex==4" :src="type4.src">
      <img v-if="selectedIndex==5" :src="type5.src">
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
        }, type4: {
          src: '',
          count: 0
        }, type5: {
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
          })
        }
      },
      isTabSelect(index) {
        if (this.selectedIndex == 1 || this.selectedIndex == 2 || this.selectedIndex == 3) {
          return index == 1;
        }
        return this.selectedIndex == index;
      },
      isChildTabSelect(index) {
        return this.selectedIndex == index;
      }
    },
    computed: {
      residue() {
        return this['type' + this.selectedIndex].count;
      },
      showChildTab() {
        return this.selectedIndex == 1 || this.selectedIndex == 2 || this.selectedIndex == 3;
      },
      selectedType() {
        return (this.$route.query && this.$route.query.selectedType == 'primary')
      }
    },
    mounted() {
      this.onItemClick(0);
      this.selectedIndex = this.$route.query.selectedIndex;
      console.log(this.$route.query)
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
    color: #2772ff;
    padding: 4px 20px;
    margin-top: 25px;
    background-color: #ffffff;
    border-radius: 33px;
    border: dotted 1px #2772ff;
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
