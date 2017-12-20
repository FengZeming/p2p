<template>
  <div class="img-box" style="width: 100%;display: flex;flex-direction: column;height: 126.86vw;align-items: center;"
       :style="{backgroundImage:'url('+require('../../../assets/images/shuangdan/我的奖品@2x.png')+')'}"
       ref="box">
    <div class="listContainer" style="overflow: scroll;">
      <div v-for="item in list" @click="onClick(item)"
           style="width: 76vw; height: 24.5vw; background-size: 100%; background-repeat: no-repeat;margin-bottom: 15px;
        display: flex;"
           :style="{backgroundImage:'url('+(itemBg(item))+')'}">
        <div style="flex: 173; height: 100%;background-color: transparent;color: white;font-size: 20px;
        display: flex;justify-content: center;align-items: center;padding-top: 10px;">
          ¥&nbsp;{{item.desc}}
        </div>
        <div
          style="flex: 393; height: 100%;background: transparent;display: flex;flex-direction: column;justify-content: center;">
          <p style="color:#333333;font-size: 15px;text-align: left;padding-left: 15px;">{{item.name}}</p>
          <p style="color: #999;font-size: 12px;margin-top: 5px;text-align: left;padding-left: 15px;">
            {{item.indate}}-{{item.deadline}}</p>
        </div>
      </div>

    </div>


    <p v-if="!(list&&list.length)" style="width: 100%;height: 100%;text-align: center;">暂无奖品</p>

    <!--<div style="width: 100%;height:60%;display: flex;flex-direction: column;align-items: center;-->
    <!--background: #eeeeee;">-->
    <!--<img :src="require('../../../assets/images/user/叹号@2x.png')" alt=" "-->
    <!--style="width: 30px;height: 30px;align-self: center;margin-top: 22px;">-->
    <!--<p style="	font-size: 22px;color: #000000;margin-top: 12px;">余额不足！</p>-->
    <!--<p style="	font-size: 15px;color: #666;margin-top: 6px;">温馨提示：10元起提</p>-->
    <!--<p @click="toRule(false)"-->
    <!--style="width: 90px;height: 28px;border-radius: 14px;border: solid 1px #999;-->
    <!--font-size: 14px;text-align: center;display: flex;justify-content: center;align-items: center;-->
    <!--margin-top: 12px;color: #666;">-->
    <!--提现规则</p>-->
    <!--</div>-->
    <!--<div style="width: 100%;height:40%;display: flex;flex-direction: column;align-items: center;-->
    <!--background: white;justify-content: center;">-->
    <!--<p style="	font-size: 16px;color: #2772ff;">积分可兑换现金</p>-->
    <!--<p @click="toRule(true)"-->
    <!--style="width: 90px;height: 28px;border-radius: 14px;border: solid 1px #2772ff;-->
    <!--font-size: 14px;text-align: center;display: flex;justify-content: center;align-items: center;-->
    <!--margin-top: 8px;color: #2772ff;">-->
    <!--提现规则</p>-->
    <!--</div>-->
  </div>
</template>

<script>


  import {XDialog, XButton, Group} from 'vux'
  import DividerOnepx from '../../../components/Divider1px'
  import fetch from '../../../api/http';

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
        list: []
      }
    },
    methods: {
      onClick(item) {
        if ('0' != item.isexchange) {
          this.$router.push({name: 'result', params: item})
        }
      },
      itemBg(item) {
        if (item.isexchange == '0') {
          return require('../../../assets/images/shuangdan/已使用@2x.png');
        } else {
          return require('../../../assets/images/shuangdan/未使用@2x.png');
        }
      }
    },
    mounted() {
      this.$refs.box.parentNode.style.maxWidth = '90%';
      this.$refs.box.parentNode.style.width = '90%';
      this.$refs.box.parentNode.style.backgroundColor = 'transparent';
      fetch('http://tservice.prguanjia.com/xiaoying/myprize')
        .then(res => {
          this.list = res.data;
        }).catch(err => {

      })

    }
  }
</script>

<style scoped>
  .img-box {
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .listContainer {
    margin-top: 60px;
    overflow: hidden;

    flex: 1;
    margin-bottom: 20px;
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


</style>
