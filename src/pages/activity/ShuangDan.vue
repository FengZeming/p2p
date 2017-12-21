<template>
  <div class='container' ref="container"
       :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/双旦背景.jpg')+')'}">

    <div :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/我的金蛋@2x.png')+')'}"
         style="width: 110px;height: 35px;margin-top: 270px;align-self: flex-end;background-size: 100%;
         background-repeat: no-repeat;position: fixed;right: 0;"
         @click="showGiftList">
    </div>
    <div class="box"
         :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/帽子@2x.png')+')'}">
      <div v-for=" item,index in 3" :class="eggClass(item)" @click="start(item)" :ref="'index'+index"
           :style="{marginLeft:index==1?'12px':'0' , marginRight:index==1?'12px':'0',
           backgroundImage:'url('+require('../../assets/images/shuangdan/gif/egg.png')+')'}">
      </div>
    </div>
    <gift-winners-list></gift-winners-list>

    <div class="listContainer" style="height: 121vw;"
         :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/活动规则3@2x.png')+')'}">
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showListDialog" class="dialog" hide-on-blur>
        <gift-list-dialog ref="dialog" :message="data" @onClick="onGiftListDialogClick">
        </gift-list-dialog>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showGiftDialog" class="dialog" hide-on-blur>
        <gift-got-dialog ref="dialog" :message="gift" @onClick="onGiftGotDialogClick">
        </gift-got-dialog>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showWarn" class="dialog" hide-on-blur>
        <gift-warn-dialog ref="dialog" :message="warn" @onClick="onWarnDialogItemClick">
        </gift-warn-dialog>
      </x-dialog>
    </div>

    <div class="shareImage" v-if="showQrcode" @click="onBgClick" style=" align-items: center;flex-direction: column;">
      <img class="qrcode" src="../../assets/images/shuangdan/qrcode.jpg" alt=" " @click.stop="onQrCodeClick">
      <div style="margin-top: 20px;">
        <!--<p style="flex: 0;color: white;">1. 长按关注公众号 互金每日早知道&nbsp;&nbsp;</p>-->
        <p style="flex: 0;color: white;margin-top: 10px;">公众号内回复"再来一个"增加一枚金蛋</p>
      </div>
    </div>
    <div class="shareImage" v-if="showShare" @click="onBgClick">
      <img class="share" src="../../assets/images/shuangdan/图层3@2x.png" alt=" " @click.stop="onQrCodeClick">
    </div>
  </div>
</template>

<script>
  import fetch from '../../api/http.js'
  import {XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom, XInput} from 'vux'
  import GiftListDialog from './components/GiftListDialog.vue'
  import GiftGotDialog from './components/GiftGotDialog.vue'
  import GiftWarnDialog from './components/GiftWarnDialog.vue'
  import GiftWinnersList from './components/GiftWinnersList.vue'
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
      GiftListDialog,
      GiftWarnDialog,
      GiftWinnersList
    },
    data() {
      return {
        showListDialog: false,
        showGiftDialog: false,
        selectedIndex: false,
        showQrcode: false,
        showShare: false,
        showWarn: false,
        list: [],
        data: {
          hance: 0,
          guanzhu: 0,
          isover: 0,
          total: 0,
          used: 0,
        },
        gift: {
          chance: 100,
          isover: 0,
          prize: 0,
          prizeid: "31",
          total: 100,
          used: 0
        },
        warn: {
          state: 0
        }
      }
    },
    computed: {
      hasShare() {
        return (cookie.get(new Date().toLocaleDateString() + 'has_share', false));
      },
    },
    methods: {
      onGiftListDialogClick() {
        this.showListDialog = false;
        this.showGiftDialog = false;
      },
      onGiftGotDialogClick(showShare) {
        this.showGiftDialog = false;
        this.showListDialog = false;
        this.showShare = showShare;
      },

      onWarnDialogItemClick(state) {
        this.showWarn = false;
        this.showQrcode = state;
        this.showShare = !state;
      },
      onQrCodeClick() {

      },
      onBgClick() {
        this.showQrcode = false;
        this.showShare = false;
      },

      eggClass(item) {
        return this.selectedIndex == item ? 'egg anim' : 'egg';
      },
      start(item) {
        console.log(this.data.data);
        if (this.selectedIndex) {
          return;
        }
        if (this.data.data.isover) {
          this.$vux.toast.show({type: 'text', text: '活动已结束'});
          return;
        }
        if ((this.data.data.total >= 4 && this.data.data.total <= this.data.data.used) || this.data.data.used >= 4) {
          this.$vux.toast.show({type: 'text', text: '今日机会已用完, 请明日再来'});
          return;
        }
        console.log(this.hasShare)
        console.log(3 == this.data.data.total && 2 == this.data.data.used && !this.hasShare)
        if (3 == this.data.data.total && 2 == this.data.data.used && !this.hasShare) {
          this.showWarn = true;
          console.log('showshare')
          return;
        }
        if (4 == this.data.data.total && 3 == this.data.data.used && !this.hasShare) {
          this.showWarn = true;
          console.log('showshare2')
          return;
        }

        if (3 == this.data.data.used && 3 == this.data.data.total &&this.hasShare){
          this.showQrcode = true;
          console.log('showqrcode')
          return;
        }

        this.selectedIndex = item;
        setTimeout(() => {
          this.selectedIndex = 0;
        }, 2000);
        setTimeout(() => {
          fetch('http://tservice.prguanjia.com/egg/draw', {}, true)
            .then(res => {
              if (!res.result) {
                console.log()
                this.data.data.used = res.data.used;
                this.data.data.isover = res.data.isover;
                this.data.data.total = res.data.total;
                this.data.gift = res.data;
                this.showGiftDialog = true;
              } else {
                this.$vux.toast.show({type: 'text', text: res.msg})
              }
            }).catch(err => {
          });
        }, 1500);

      },
      showGiftList() {
        if (this.selectedIndex) {
          return;
        }
        this.showListDialog = true;
      },
      exchangeScore() {

      },
      getList() {
        fetch('http://tservice.prguanjia.com/egg/checkChance')
          .then(res => {
            this.data.data = res.data;
            console.log(this.data.data);
          }).catch(err => {

        })

      }
    },
    mounted() {
      this.$refs.container.parentNode.style.paddingBottom = 0;
      this.getList();

      let KEY_SHARE = new Date().toLocaleDateString() + 'has_share';
      this.wxShare(this.$wechat, location.href, () => {
        if (!this.hasShare) {
          this.data.data.used--;
          this.showShare = false;
        }
        cookie.set(KEY_SHARE, true)
      });
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
    margin-top: 330px;
    height: 47.5vw;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .listContainer {
    width: 90%;
    display: flex;
    height: 69.3vw;
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

  .shareImage {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
  }

  .qrcode {
    border: 4px solid #004624;
    width: 112px;
    height: 112px;
  }

  .share {
    width: 195px;
    margin-top: 100px;
    height: 182px;
  }
</style>
