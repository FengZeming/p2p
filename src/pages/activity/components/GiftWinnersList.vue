<template>
  <div class="itemContainer"
       :style="{backgroundImage:'url('+require('../../../assets/images/shuangdan/中奖榜单1@2x.png')+')'}">
    <div class="listItemContainer" style=" margin-top: 50px;width: 100%;">
      <p>幸运用户</p>
      <p>所获奖品</p>
    </div>
    <div style="flex: 1;overflow: hidden;margin-bottom: 20px;" ref="list">
      <div style="width: 100%;display: flex;justify-content: center;flex-direction: column;" ref="child">
        <div v-for="item,index in list" class="listItemContainer" style="height: 25px;width: 100%;">
          <p>{{item.nickname}}</p>
          <p>{{item.prize}}</p>
        </div>
      </div>
      <div style="width: 100%;display: flex;justify-content: center;flex-direction: column;">
        <div v-for="item,index in list" class="listItemContainer" style="height: 25px;width: 100%;">
          <p>{{item.nickname}}</p>
          <p>{{item.prize}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fetch from '../../../api/http'
  export default {
    components: {},
    data() {
      return {
        list: []
      }
    },
    methods: {},
    computed: {},
    mounted() {
      fetch('http://tservice.prguanjia.com/egg/luckyDogList')
        .then(res => {
          this.list = res.data;
        }).catch(err => {
      });
      let self = this;
      setInterval(() => {
        if (self.$refs.list) {
          self.$refs.list.scrollTop++;
          if (self.$refs.list.scrollTop >= 39 * 25) {
            self.$refs.list.scrollTop = 0;
          }
        }
      }, 40);
    }
  }
</script>

<style scoped>

  .itemContainer {
    width: 90%;
    display: flex;
    height: 69.3vw;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    flex-direction: column;
    margin-top: 50px;
  }

  .listItemContainer {
    width: 80%;
    height: 40px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    text-align: center;
    flex: 1;
    color: #620a0a;
    font-size: 15px;
    line-height: 20px;
  }

  .anim {
    animation: run 1s steps(1) 0s infinite both;
  }

  @keyframes run {
    0% {
      background-position: 0 0;
    }
    30% {
      background-position: -84.5px 0;
    }
    60% {
      background-position: -169px 0;
    }
    90% {
      background-position: -253.5px 0;
    }
    100% {
      background-position: 0 0;
    }
  }

</style>
