<template>
  <div class='container' ref="container"
       :style="{backgroundImage:'url('+require('../../assets/images/shuangdan/兑奖页面.jpg')+')'}">

    <div
      v-if="showLogo"
      style="width: 90px;height: 40px;background-size: 100%;background-repeat: no-repeat;position: absolute;top: 20px;right: 10px;"
      :style="{backgroundImage:'url('+logoImage()+')'}">
    </div>

    <img :src="image" alt=" "
         style="width: 168px;height: 71px;margin-top: 60px;margin-left: -90px;">


    <div v-if="giftSelf" class="container" style="flex: 1;">
      <!--<p class="title">{{data[type].step1}} <span style="font-weight: bold;">{{data[type].wxcode}}</span></p>-->


      <div style="display: flex;margin-top: 100px;">
        <!--<p class="title" style="margin-top: 0;display: flex;">第二步：</p>-->
        <p style="display: inline-block;float: left;font-size: 16px;color: #333;flex: 1;text-align: center;"
           v-html="buildDesc()">
        </p>
      </div>
      <img class="qrcode" :src="qrcode" alt="">

      <p style="font-size: 12px;	line-height: 20px;	color: #666666;margin: 30px 20px 0 12px ">
        *本活动奖品由互金每日早知道提供。最终解释权归互金每日早知道所有
      </p>
    </div>

    <div class="container" style="flex: 1;" v-if="!giftSelf">

      <p style="font-size: 12px;line-height: 30px;color: #999999;margin: 50px 0  20px 0;">请输入手机号，注册投资后可获得</p>

      <div class="item_contianer">
        <p style="font-size: 17px;color: #333;">手机号</p>
        <input :disabled="inputStatus" type="number" v-model="phone">
        <div @click="register"
             style="height: 32px;width:64px;background-color: #b81a2c;border-radius: 4px;color: #FFFFFF;
        font-size: 16px;text-align: center;line-height: 32px;">
          提交
        </div>
      </div>
      <p style="font-size: 14px;color: #666;margin: 20px;line-height: 30px;">
        1.本活动仅限互金每日早知道注册的<span style="color: #b81a2c;font-weight: bold;">新老用户</span>领取。<br>
        2.{{oldUser()}}<br>
        3.老用户：通过互金每日早知道注册的老用户请提交手机号，<br>奖品将于3个工作日内发送至您的平台账户。
        4.活动时间：2017年12月22日-2018年1月5日。<br>
        <span style="font-weight: bold;"> 注：本奖品由<span style="color: #b81a2c;">{{platformName()}}</span>提供。</span><br>
        如有疑问，请添加客服微信号licaishi1124<br>
      </p>

      <div @click="register"
           style="margin-top: 30px;	height: 32px;width: 115px;background-color: #b81a2c;border-radius: 4px;color: #FFFFFF;
        font-size: 16px;text-align: center;line-height: 32px;margin-bottom: 30px;">
        立即注册
      </div>
    </div>

  </div>
</template>

<script>
  import fetch from '../../api/http';
  import {cookie} from 'vux'

  export default {
    prop: ['message'],
    components: {},
    data() {
      return {
        phone: '',
        inputStatus:false,
        data: {
          type0: {
            step1: '第一步：扫码添加微信',
            wxcode: '',
            desc: '注册并投资相应金额即可获得！(限即日起至12月20日新注册用户）',
          },
          type1: {
            step1: '第一步：进入公众号',
            wxcode: '互金每日早知道',
            desc: '在公众号“互金每日早知道”内回复“兑奖”，即可兑奖。',
          }
        }
      }
    },
    methods: {
      platformName() {
        return this.$route.query.prize == 9 ? '钱保姆' : '普资金服'
      },
      oldUser(){
        return this.$route.query.prize == 9 ? '新用户：注册成功后，奖品将于3个工作日内发送至您的平台账户。':'新用户：注册并成功投资任意金额任意标的后，奖品将于3个工作日内发送至您的平台账户。'
      },
      buildDesc() {
        if (this.$route.query && this.$route.query.prize == 1) {
          return this.data[this.type].desc
        } else {

          let arr = ['', ''
            , '<span style="font-size: 18px;">投资2000元即可领取！<span><br><span style="font-size: 14px;">扫码添加理财师领取<span>'
            , '<span style="font-size: 18px;">投资5000元即可领取！<span><br><span style="font-size: 14px;">扫码添加理财师领取<span>'
            , '<span style="font-size: 18px;">投资10000元即可领取！<span><br><span style="font-size: 14px;">扫码添加理财师领取<span>'
            , '<span style="font-size: 18px;">投资20000元即可领取！<span><br><span style="font-size: 14px;">扫码添加理财师领取<span>'
            , '<span style="font-size: 18px;">投资50000元即可领取！<span><br><span style="font-size: 14px;">扫码添加理财师领取<span>'
            , '<span style="font-size: 18px;">投资100000元即可领取！<span><br><span style="font-size: 14px;">扫码添加理财师领取<span>'
          ];
          return arr[this.$route.query.prize]
        }
      },
      register() {
        if (this.checkMobile(this.phone)) {
          cookie.set('phone', this.phone);
          let url = 'http://tservice.prguanjia.com/egg/phoneSave';
          fetch(url, {type: 'post', params: {phone: this.phone, prizeid: this.$route.query.prizeid}})
            .then(res => {
              window.location = 'https://www.qbm360.com/apiurl/activity/2017/reg/reg1.html?fromType=wechat1';
              window.location = 'https://pccb.com/wap/sem/soeRegister?registerSource=CBGJ001'
            }).catch(err => {
            window.location = 'https://www.qbm360.com/apiurl/activity/2017/reg/reg1.html?fromType=wechat1';
            window.location = 'https://pccb.com/wap/sem/soeRegister?registerSource=CBGJ001'
          });
        } else {
          this.$vux.toast.show({type: 'text', text: '请输入有效的手机号'})
        }

      },
      checkMobile(sMobile) {
        let reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
        return reg.test(sMobile); //true

      },
      logoImage() {
        return require('../../assets/images/' + this.platformName() + '@2x.png');
      }
    },
    computed: {
      showLogo() {
        return this.$route.query.prize == 8 || this.$route.query.prize == 9;
      },
      type() {
        return 'type' + (this.$route.query && this.$route.query.prize == 1 ? '1' : '0')
      },
      image() {
        return require('../../assets/images/shuangdan/' + (this.$route.query && this.$route.query.prize ? this.$route.query.prize : 2) + 'yuan.png')
      },
      qrcode() {
        if (this.$route.query.prize == 1) {
          return require('../../assets/images/shuangdan/qrcode.jpg');
        } else {
          if (parseInt(Math.random() * 10 / 3) == 1) {
            return require('../../assets/images/shuangdan/yueke101.jpg')
          } else if (parseInt(Math.random() * 10 / 3) == 2) {
            return require('../../assets/images/shuangdan/小麦.jpg')
          } else {
            return require('../../assets/images/shuangdan/licaishi1124.jpg')
          }
        }
      },
      giftSelf() {
        return this.$route.query.type != 'platform';
      }
    },

    mounted() {
      this.$refs.container.parentNode.style.paddingBottom = 0;
      this.phone = cookie.get('phone');
      if(this.checkMobile(this.phone)){
        console.log(this.phone)
        this.inputStatus=true;
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .title {
    font-size: 15px;
    line-height: 23px;
    margin-top: 75px;
    color: #333333;
    align-self: flex-start;
    margin-left: 12px;
  }

  .item_contianer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .qrcode {
    border: 4px solid #004624;
    width: 112px;
    height: 112px;
    margin: 20px;

  }

  input {
    text-shadow: none;
    box-shadow: none;
    outline: none;
    margin: 0 10px;
    padding: 0 5px;
    width: 54%;
    height: 30px;
    -webkit-appearance: none;
    border-radius: 2px;
    border: solid 1px #dbdbdb;
  }
</style>
