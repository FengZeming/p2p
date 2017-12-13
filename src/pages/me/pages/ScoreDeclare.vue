<template>
  <div>
    <div v-for="item in list">
      <h5 style="	margin-left: 10px;
	margin-right: 20px;	font-family: PingFang-SC-Bold;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 24px;
	letter-spacing: 0px;
	margin-top: 10px;
  margin-bottom: 10px;
	color: #000000;
"> {{item.title}}</h5>
      <p
        v-html="item.desc"
        style="	font-family: PingFang-SC-Regular;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 22px;
	letter-spacing: 0px;
	margin-left: 10px;
	margin-right: 20px;
	color: #666;"></p>
    </div>
    <div v-for="item ,index in table " style="margin: 0px 10px 0px 10px;">
      <div :style="{borderBottom:index == table.length-1 ? '1px solid #d5d5d5':''}"
           style="display: flex;width: 100%;border-top: 1px solid #d5d5d5;border-left: 1px solid #d5d5d5;border-right: 1px solid #d5d5d5;">
        <p
          style="flex: 42;padding: 10px;	color: #2772ff; font-size: 14px;display: flex;justify-content: flex-start;align-items: center;line-height: 20px;">
          {{item.title}}</p>
        <div
          style="width:1px;	background-color: #d5d5d5; font-size: 14px;display: flex;justify-content: flex-start;align-items: center;">
        </div>
        <p
          style="flex: 30;display: flex;padding: 10px;justify-content: center;align-self: center;	color: #2772ff;font-size: 14px;line-height: 15px;">
          {{item.desc}}</p>
      </div>
    </div>
    <p
      v-html="desc"
      style="font-family: PingFang-SC-Regular;
	font-size: 13px;
	font-weight: normal;
	font-stretch: normal;
	margin: 9px ;
	line-height: 22px;
	letter-spacing: 0px;
	color: #333333;"></p>
  </div>

</template>

<script>
  import {XTable} from 'vux'
  import DividerVertical from '../../../components/DividerVertical1px'

  export default {
    components: {XTable, DividerVertical},
    data() {
      return require(this.$route.query.pageType?'./json/ScoreDeclareConfig.js' :'./json/WithdrawDepositConfig').default
    },
    methonds: {},
    computed: {},
    mounted() {
    }
  }
</script>

<style scoped>

</style>
