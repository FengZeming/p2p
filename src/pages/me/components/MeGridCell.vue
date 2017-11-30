<template>
  <div>
    <grid :cols="2">
      <grid-item v-for="item,index in grid" style="height: 55px;padding: 10px;align-items: center;display: flex;"
                 @on-item-click="onItemClick(item,index)">
        <div style="display: flex;align-items: center;height: 55px;">
          <img :src="itemIcon(item)" v-if="item.icon"
               style="width: 25px;height: 25px;">
          <p style="font-size: 15px; margin-left: 5px;"
             :style="{color:themeColor(item)}"
             v-if="item.icon">
            {{item.title}}
          </p>
        </div>
      </grid-item>
    </grid>
  </div>

</template>
<script>
  import {Grid, GridItem, GroupTitle} from 'vux'
  export default {
    data() {
      return {
        grid: [
          {
            title: '每日签到',
            icon: require('../../../assets/images/签到.png'),
            url: 'http://game.prguanjia.com/check/index.html'
          },
          {
            title: '网贷评测',
            icon: require('../../../assets/images/评测.png'),
            url: 'http://game.prguanjia.com/investtest/index.html'
          },
          {title: '会员福利', icon: require('../../../assets/images/会员福利.png'), path: ''},
          {title: '我的账本', icon: require('../../../assets/images/user/icon_book.png'), disabled: true},
          {title: '我的关注', icon: require('../../../assets/images/关注.png'), path: '/attention'},
          {title: '', icon: ''}
        ]
      }
    },
    components: {
      Grid,
      GridItem
    },
    methods: {
      themeColor(item){
        return item.disabled?'#999':'#333'
      },
      itemIcon(item) {
        return item.icon;
      },
      onItemClick(item, index) {
        if (item.url && item.url.includes('http')) {
          window.location.href = item.url
        } else if (item.path) {
          this.$router.push({path: item.path})
        }
      }
    },
    computed:{

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
