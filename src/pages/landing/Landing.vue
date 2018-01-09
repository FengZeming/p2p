<template>
  <div>

    <div class="root" ref="root">
      <div class="item-container" v-if="powerDatas && powerDatas.length">
        <span class="label" v-for="item in powerDatas"> {{item}} </span>
      </div>
      <div class="divider"></div>
      <div class="title">
        <img class="icon" src="../../assets/images/landing/点评@2x.png" alt=" "> 理财师评语：
      </div>
      <p class="comments">{{detail.advice}}</p>
      <div class="divider" style="margin-top:8px;"></div>
      <div class="title">
        <img class="icon" src="../../assets/images/landing/添加@2x.png" alt=" "> 添加理财师咨询详情：
      </div>

      <img class="qrcode" :src="qrcode" alt=" ">
      <div class="divider" style="margin-top:10px;"></div>

      <div class="title">
        <img class="icon" src="../../assets/images/landing/数据@2x.png" alt=" "> 平台相关数据：
      </div>

      <div style="display: flex;flex-direction: row; flex-wrap: wrap;width: 100%; margin-bottom:10px;">
        <div v-for="i, index in relativeData" class="box">
          <p style="margin-top:6px;color:#666666; font-size: 14px;">
            {{ i}}
          </p>
          <p style="margin-top:3px; color:#666666;font-size:12px;margin-bottom: -3px;">
            {{platDtaName[index]}}
          </p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="title" style="margin-left: 12px;height: 40px;">早知道热门活动：</div>

      <div class="item-container" style="margin-left: 4px;margin-top: 5px">
        <img src="../../assets/images/landing/任务(1)@2x.png" alt=" " @click="toDetail(0)"/>
        <img src="../../assets/images/landing/签到(1)@2x.png" alt=" " @click="toDetail(1)"/>
        <img src="../../assets/images/landing/优惠券券面@2x.png" alt=" " @click="toDetail(2)"/>
      </div>

      <p class="recommend" v-for="item in recommendList" style="align-self: left;" @click="goDetail(item)">
        <img style="height: 16.5px" :src="generateSrc()" alt="">
        <span>
         {{item.name}}：{{item.desc}}
        </span>
      </p>

    </div>
  </div>
</template>

<script>
  import fetch from '../../api/http'

  export default {
    name: 'landing',
    components: {},
    data() {
      return {
        platDtaName: {
          incomeRate: "平均收益率",
          amount: "昨日成交量",
          avgBidMoney: "人均投资金额",
          netInflowOfThirty: "昨日资金净流入",
          stayStillOfTotal: "待还余额",
          bidderNum: "投资人数",
          loanPeriod: '平均借款期限',
        },
        recommendList: [],
        detail: {}
      }
    },
    methods: {
      loadData() {
        fetch('/table/platformDetail', {type: 'post', params: {'platid': this.$route.query.platid}})
          .then((response) => {
            this.detail = response.data;
            console.log(response)
          }).catch(function (err) {
        });
      },
      generateSrc() {
        if (Math.random() * 3 > 2) {
          return require('../../assets/images/landing/热门@2x.png')
        } else {
          if (Math.random() * 2 > 1) {
            return require('../../assets/images/landing/推荐@2x.png')
          } else {
            return require('../../assets/images/landing/矩形3@2x.png')
          }
        }
      },
      goDetail(item) {
        window.location = item.url;
      },
      toDetail(index) {
        if (index == 0) {
          window.location.href = 'http://game.prguanjia.com/user/scoremall.html';
        }
        if (index == 1) {
          window.location.href = 'http://game.prguanjia.com/check/index.html?type=check&onlyId=010909uaMqjp3MY';
        }
        if (index == 2) {
          window.location.href = 'http://game.prguanjia.com/user/couponlist.html';
        }
      },
      generateData() {
        let arr = [];
        require('./recomendList').default.forEach((item, index) => {
          let randomKey = parseInt(Math.random() * 10);
          if (randomKey > 5) {
            arr.push(item);
          }
        });
        return arr.length > 2 && arr.length < 7 ? arr : this.generateData();
      }
    },
    computed: {
      qrcode() {
        if (parseInt(Math.random() * 10 / 3) == 1) {
          return require('../../assets/images/shuangdan/yueke101.jpg')
        } else if (parseInt(Math.random() * 10 / 3) == 2) {
          return require('../../assets/images/shuangdan/小麦.jpg')
        } else {
          return require('../../assets/images/shuangdan/licaishi1124.jpg')
        }
      },
      powerDatas() {
        let platDepend = [];
        if (this.detail.background) {
          platDepend.push(this.detail.background);
        }
        if (this.detail.regCapital) {
          platDepend.push(this.detail.regCapital);
        }
        if (this.detail.bank_status === "存管上线") {
          platDepend.push(this.detail.bank_status);
        }
        return platDepend;
      },
      relativeData() {
        return {
          incomeRate: this.detail.incomeRate,
          amount: this.detail.amount,
          bidderNum: this.detail.bidderNum
        }
      }
    },
    mounted() {
      this.$refs.root.parentNode.style.paddingBottom = 0;
      this.loadData();
      this.recommendList = this.generateData();
    }
  }
</script>

<style lang="less" scoped>
  .root {
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item-container {
    width: 100%;
    background: white;
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    justify-content: flex-start;
    align-items: center;

    img {
      align-self: flex-start;
      margin-left: 8px;
      height: 20px;
    }
  }

  .label {
    font-size: 13px;
    color: #056bcb;
    margin-left: 12px;
    border-radius: 2px;
    border: solid 1px #056bcb;
    text-align: center;
    padding: 1px 10px;
  }

  .divider {
    background-color: #eeeeee;
    width: 100%;
    height: 8px;
  }

  .title {
    align-self: flex-start;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      transform: scale(0.5);
    }
  }

  .comments {
    font-size: 14px;
    color: #333;
    line-height: 23px;
    margin: 6px 10px;
    border-radius: 4px;
    padding: 6px;
    background-color: #fdf7fa;
    border: solid 1px #ffd31b;
  }

  .qrcode {
    width: 115px;
    height: 115px;
  }

  .box {
    width: 26%;
    height: auto;
    margin-left: 4%;
    margin-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: solid 1px #666666;
  }

  .recommend {
    display: flex;
    margin-left: 12px;
    align-items: center;
    margin-bottom: 10px;
    width: calc (100% - 12px );
    span {
      font-size: 14px;
      line-height: 16.5px;
      font-weight: lighter;
      margin-left: 5px;
      color: #333;
    }

  }
</style>
