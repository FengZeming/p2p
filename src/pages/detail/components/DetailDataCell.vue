<template>
  <div>
    <p style="padding-left: 10px;padding-top: 6px;padding-bottom: 3px;font-size: 13px;color: #999;">平台数据</p>
    <div style="width: 100%;height: 0.5px;background-color: #d8d8d8;padding-left: 10px;"></div>

    <div style="display: flex;flex-direction: row; flex-wrap: wrap;width: 100%; margin-bottom:10px;">
      <div v-for="i, index in powerDatas"
           style="width: 30%;height:auto; margin-left:2.5%;margin-top:2.5%; padding-bottom:10px;display:flex;
            flex-direction:column;align-items:center;justify-content:center;  background:#f8f8f8;border:1px;
            solid: #d8d8d8; border-radius:10px;">
        <p style="margin-top:10px; font-size:18px;color:#0554c6;">
          {{ i}}
        </p>
        <p style="margin-top:5px; color:#999999;font-size:15px;">
          {{platDtaName[index]}}
        </p>
      </div>
    </div>


  </div>


</template>

<script>

  import {Grid, GridItem} from 'vux';

  export default {
    components: {
      Grid, GridItem
    },
    props: ['message'],
    data() {
      return {
        platDtaName: {
          incomeRate: "平均收益率",
          amount: "昨日成交量",
          netInflowOfThirty: "昨日资金净流入",
          stayStillOfTotal: "待还余额",
          avgBidMoney: "人均投资金额",
          bidderNum: "投资人数",
          loanPeriod: '平均借款期限',
        }
      }
    },
    computed: {
      itemData() {
        return this.message
      },
      powerDatas() {
        return {
          incomeRate: this.itemData.incomeRate,
          amount: this.itemData.amount,
          netInflowOfThirty: this.itemData.netInflowOfThirty,
          stayStillOfTotal: this.itemData.stayStillOfTotal,
          avgBidMoney: this.itemData.avgBidMoney,
          bidderNum: this.itemData.bidderNum,
          loanPeriod: this.itemData.loanPeriod
        }
      }
    },
    mounted() {

    }
  }

</script>
