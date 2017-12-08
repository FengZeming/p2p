<template>
  <div class="img-box" style="width: 100%;display: flex;flex-direction: column;height: 190px;align-items: center;"
       ref="box">

      <img :src="require('../../../assets/images/user/叹号@2x.png')" alt=" "
           style="width: 30px;height: 30px;align-self: center;margin-top: 22px;">

      <p style="	font-size: 22px;color: #000000;margin-top: 12px;">积分不足！</p>

      <p style="	font-size: 15px;color: #666;margin-top: 6px;">温馨提示：100积分起兑换</p>

      <p @click="toRule(true)"
        style="width: 90px;height: 28px;border-radius: 14px;border: solid 1px #999;
        font-size: 14px;text-align: center;display: flex;justify-content: center;align-items: center;
        margin-top: 12px;color: #666;">
        提现规则</p>
    </div>
</template>

<script>


  import {XDialog, XButton, Group} from 'vux'
  import DividerOnepx from '../../../components/Divider1px'

  export default {
    props: ['message'],
    components: {
      XDialog,
      XButton,
      Group,
      DividerOnepx
    },
    data() {
      return {

      }
    },
    methods: {
      toRule(pageType){
        this.$router.push({path: '/scoreDeclare', query: {pageType: pageType}});
      }
    },
    mounted() {
      this.$refs.box.parentNode.style.maxWidth = '92%';
      this.$refs.box.parentNode.style.width = '92%';
    }
  }
</script>

<style scoped>

  #arrow {
    display: block;
    height: 8px;
    width: 8px;

    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    border-bottom-color: #d8d8d8;
    border-left-color: #d8d8d8;
    transform: rotate(-45deg);
  }

  input {
    color: #2772ff;
    font-size: 18px;
    border-radius: 4px;
    border: solid 1px #bfbfbf;
    width: 80px;
    height: 30px;
    text-shadow: none;
    box-shadow: none;
    outline: none;
    padding-right: 5px;
    padding-left: 5px;
  }

  .calc {
    border: solid 1px #666666;
    background-color: white;
    border-radius: 18px;
    align-self: center;
    justify-content: center;
    outline: none;
    line-height: 36px;
    width: 36px;
    height: 36px;
    align-items: center;
    text-align: center;
    font-size: 15px;
    color: #666666;
  }

  .calc:disabled {
    border: solid 1px #eee;
    background-color: white;
    border-radius: 18px;
    align-self: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: none;
    line-height: 36px;
    width: 36px;
    height: 36px;
    font-size: 15px;
    color: #ccc;
  }

  .score {
    color: #666666;
    font-size: 14px;
    text-align: center;
    display: flex;
    align-self: center;
    margin-left: 8px;
  }
</style>
