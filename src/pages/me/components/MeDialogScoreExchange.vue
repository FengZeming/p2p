<template>
  <div class="img-box" style="width: 100%;display: flex;flex-direction: column;height: 320px;" ref="box">
    <p @click="toScoreExchage"
       style="display: flex;color: #999999; font-size: 12px;align-items: center;margin-top: 10px;align-self: flex-end;margin-bottom: 25px;margin-right: 20px;">
      <img src="../../../assets/images/sign/问号.png"
           style="width: 10px;height: 10px;padding:1px;border: solid 1px #bfbfbf;border-radius: 7px;"
           alt=" ">
      &nbsp;&nbsp;积分规则</p>

    <div style="display: flex;margin-left: 30px;margin-right: 30px;">
      <p
        style="border: solid 1px #bfbfbf;border-radius: 18px;display:flex;align-self:center;justify-content: center;line-height:38px;width: 36px;height: 36px;	font-size: 15px;	color: #bfbfbf;">
        一</p>
      <div style="display:flex;flex: 1;justify-content: center;align-self: center;">
        <input type="text" v-model="score"
               style="color:#2772ff;font-size: 18px; 	border-radius: 4px;border: solid 1px #bfbfbf;width: 80px;height: 30px;outline: none;padding-right: 5px;padding-left: 5px;">
        <span
          style="	color: #666666;font-size: 14px;text-align: center;display: flex;align-self: center;margin-left:8px;">积分</span>
      </div>
      <p
        style="border: solid 1px #bfbfbf;border-radius: 18px;display:flex;align-self:center;justify-content: center;line-height:38px;width: 36px;height: 36px;	font-size: 18px;	color: #bfbfbf;">
        ＋</p>

    </div>
    <p style="color: #999999; font-size: 10px; text-align: left; margin: 20px 20px 15px 20px;">
      提示：提现金额以元为单位，须为10的整数倍。</p>
    <div
      style="flex: 1;width: 100%;justify-content: center;align-items: center;align-self: center;flex-direction: column;">
      <div id="arrow"
           style="position:relative;left: 0 ;right: 0;margin: auto;top: 5.6px;background-color: white;"></div>
      <divider-onepx style="flex: 1px;"></divider-onepx>
      <div
        style="display: flex;flex-direction: column;justify-content: center;align-self: center;
              width: 100%;height:100%;border-radius: 0 0 4px 4px;background-color: #eeeeee;">

        <p style="font-size:34px;color: #ff6600;">{{parseInt(score / 100)}}.00<span style="color:#333;font-size: 12px;">元</span>
        </p>

        <div
          style="width: 100%;display: flex; height: 32px;flex-direction: row;margin-top: 18px;margin-bottom: 20px;">
          <div style="display: flex;flex: 1;">
            <x-button mini type="primary" style="width: 120px;color: white" @click.native="doExchange">确定</x-button>
          </div>
          <div style="flex: 1;display: flex;">
            <x-button mini style="width: 120px;background-color: #999;color: white;" @click.native="doCancle">取消
            </x-button>
          </div>
        </div>

      </div>
    </div>
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
        score: 100

      }
    },
    methods: {
      toScoreExchage() {
        this.$emit("onScoreExchage")
      },
      doExchange() {
        this.$emit("onExchange")
      },
      doCancle() {
        this.$emit("onCancle")
      }

    },
    computed: {},
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
</style>
