<template>
  <div style="background-color: #f4f4f4;padding:20px 20px 10px 20px; ;">
    <div style="background-color:white;display: flex; flex-direction: column;">
      <divider :message="{height:'10px'}" :style="{backgroundColor: themeColor}"></divider>
      <div style="display: flex;flex-direction: row">
        <p style="width: 84px;
	height: 23px;
	margin-top: 10px;
	display: flex;
  justify-content: center;
  color: white;
align-items: center;
	border-radius: 0px 22px 22px 0px;
" :style="{backgroundColor: themeColor}"
        >{{couponsType}}</p>
        <p style=" flex: 1;height: 100%;line-height: 16px; font-size: 16px; align-self: flex-end;text-align: end;margin-right: 17px;"
           :style="{color: titleColor}"
        >{{message.item.title}}</p>
      </div>
      <div style="display: flex;">
        <p    :style="{color: titleColor}" class="amount"  v-if="message.item.ctype==0">{{message.item.amount}}<span style="font-size: 16px;">&nbsp;%</span></p>
        <p   :style="{color: titleColor}" class="amount"  v-if="message.item.ctype!=0"><span style="font-size: 16px;" :style="{color:themeColor}">¥</span>&nbsp;{{message.item.amount}}</p>
        <div style="display: flex;flex-direction: column;flex: 1;align-items: flex-end;
         margin-top: 22px;margin-bottom: 8px;">
          <button mini  :style="{color: themeColor,borderColor:themeColor}">{{message.item.usable ? '已使用' : '立即使用'}}</button>
          <p style="	color: #999999;margin-right: 4px; -webkit-transform: scale(0.8);">{{ timeInterval }}</p>
        </div>
      </div>
      <div style="display: flex;flex-direction: row;padding-left: 5px;padding-right: 1px;">
        <div v-for="i in 20" class="semi-circle"></div>
      </div>

    </div>

  </div>
</template>

<script>
  import Divider from '../../../components/Divider';
  import {XButton} from 'vux';

  export default {
    props: ['message'],
    components: {
      Divider,
      XButton
    },
    computed: {
      themeColor() {
          if (this.message.pageType==0 && this.message.item.usable==1){
            return '#2772ff'
          }
          return '#999999';
      },
      titleColor(){
        return (this.message.pageType==0 &&this.message.item.usable==1)?'#333333':'#999999';
      },
      timeInterval() {
        return this.message.item.start_date.split(' ')[0] + ' - ' + this.message.item.end_date.split(' ')[0]
      },
      couponsType() {

        return this.ctype == 1 ? '体验金' : (this.ctype == 2 ? '平台红包' : '加息券');
      }
    },
    mounted() {


    }


  }

</script>
<style scoped>
  .semi-circle {
    border-radius: 8vw 8vw 0 0;
    height: 1.5vw;
    width: 4vw;
    margin-right: 4px;
    background-color: #f4f4f4;
  }

  button {
    outline: none;
    border-radius: 18px;
    color: #999;
    background: white;
    font-size: 14px;
    margin-right: 16px;
    line-height: 12px;
    margin-bottom: 15px;
    padding: 4px 14px;
    border: solid 1px #999999;

  }

  .amount{
    margin-top: 26px;
    margin-left: 15px;
    font-size: 35px;
    line-height: 34px;
  }
  .amount span{
    font-size: 22px;
  }
</style>
