<template>
  <div>
    <grid :cols="2">
      <grid-item v-for="item,index in grid" style="height: 55px;padding: 10px;align-items: center;display: flex;">
        <router-link :to="{path:'/attention'}">
          <div style="display: flex;align-items: center;">
            <img :src="itemIcon(item)" v-if="item.icon"
                 style="width: 30px;height: 30px;">
            <p style="color: #333;font-size: 15px; margin-left: 5px;" v-if="item.icon">
              {{item.title}}
            </p>
          </div>
        </router-link>
      </grid-item>
    </grid>
  </div>

</template>
<script>
  import {Grid, GridItem, GroupTitle} from 'vux'

  export default {
    data() {
      return {
        grid:[
          {title:'每日签到',icon:require('../../../assets/images/签到.png')},
          {title:'网贷评测',icon:require('../../../assets/images/评测.png')},
          {title:'会员福利',icon:require('../../../assets/images/会员福利.png')},
          {title:'我的账本',icon:require('../../../assets/images/记账本.png')},
          {title:'我的关注',icon:require('../../../assets/images/关注.png')},
          {title:'',icon:''}
        ]
      }
    },
    components: {
      Grid,
      GridItem
    },
    methods:{
      itemIcon(item){
        return item.icon;
      }
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
