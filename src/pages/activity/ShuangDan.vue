<template>
  <div class='container' ref="container"
       :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/双旦背景.jpg')+')'}">

    <div :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/我的金蛋@2x.png')+')'}"
         style="width: 110px;height: 35px;margin-top: 230px;align-self: flex-end;background-size: 100%;
         background-repeat: no-repeat;"
         @click="showGiftList"
    ></div>


    <div class="box"
         :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/帽子@2x.png')+')'}">
      <div v-for=" item,index in 3" :class="eggClass(item)" @click="start(item)" :ref="'index'+index"
           :style="{marginLeft:index==1?'12px':'0' , marginRight:index==1?'12px':'0',
           backgroundImage:'url('+require('../../assets/images/shuangdan/gif/egg.png')+')'}">
      </div>
    </div>


    <div class="listContainer"
         :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/中奖榜单1@2x.png')+')'}">
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

    <div class="listContainer" style="height: 470px;"
         :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/活动规则3@2x.png')+')'}">
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showListDialog" class="dialog" hide-on-blur>
        <gift-list-dialog ref="dialog" :message="data"
                          @onCancle="cancleScoreExchangeDialog" @onExchange="exchangeScore">
        </gift-list-dialog>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showGiftDialog" class="dialog" hide-on-blur>
        <gift-got-dialog ref="dialog" :message="data"
                         @onCancle="cancleScoreExchangeDialog" @onExchange="exchangeScore">
        </gift-got-dialog>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import fetch from '../../../dist/src/api/http'
  import {XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom, XInput} from 'vux'
  import GiftListDialog from './components/GiftListDialog.vue'
  import GiftGotDialog from './components/GiftGotDialog.vue'
  import {cookie} from 'vux'

  export default {
    name: 'shuangdan',
    directives: {
      TransferDom
    },
    components: {
      XDialog,
      XButton,
      Group,
      XSwitch,
      XInput,
      GiftGotDialog,
      GiftListDialog
    },
    data() {
      return {
        showListDialog: false,
        showGiftDialog: false,
        selectedIndex: false,
        list: [],
        data: {}
      }
    },
    computed: {},
    methods: {
      eggClass(item) {
        return this.selectedIndex == item ? 'egg anim' : 'egg';
      },
      start(item) {
        if (this.selectedIndex) {
          return
        }
        this.selectedIndex = item;
        // console.log(this.$refs['index'+index]).attr('class','egg anim')
        setTimeout(() => {
          this.selectedIndex = 0;
          console.log('end')
        }, 3000);

      },
      showGiftList() {
        this.showListDialog = true;
      },
      cancleScoreExchangeDialog() {

      },
      exchangeScore() {

      },
      getList() {
        fetch('http://tservice.prguanjia.com/xiaoying/luckyDogList')
          .then(res => {
            this.list = res.data;
          }).catch(err => {

        });
      }
    },
    mounted() {
      this.$refs.container.parentNode.style.paddingBottom = 0;
      this.getList();
      let self = this;
      setInterval(() => {
        self.$refs.list.scrollTop++;
        if (self.$refs.list.scrollTop >= 39 * 25) {
          self.$refs.list.scrollTop = 0;
        }
      }, 40);
    }
  }
</script>

<style lang="less" scoped>

  .container {
    width: 100%;
    height: 242%;
    flex-direction: column;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .box {
    width: 90%;
    display: flex;
    margin-top: 50px;
    height: 170px;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100%;

  }

  .listContainer {
    width: 90%;
    display: flex;
    height: 265px;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: 100%;
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

  .dialog {

    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 280px;
      width: 100% !important;
      overflow: hidden;
    }
  }

  .egg {
    width: 84.5px;
    height: 112px;
    background-size: 400%;
    background-repeat: no-repeat;
    /*background-position: 33% 0;*/
    background-image: url("../../assets/images/shuangdan/gif/egg.png");

  }

  .anim {
    animation:run 1s steps(1) 0s infinite both;
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
      background-position: -253.5px 0 ;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
