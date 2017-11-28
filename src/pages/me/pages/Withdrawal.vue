<template>
  <div style="display: flex;flex-direction: column;height: 100%;width: 100%">
    <div style="flex: 1;display: flex;flex-direction: column;width:100%;">
      <div
        style="height: 125px;width: 100%;justify-content: center;align-items: center;display: flex;"
        :style="{background:status?'#2772ff':'#ccc'}"
      >
        <p style="font-family: PingFang-SC-Bold;font-size:18px;font-weight: normal;font-stretch: normal;line-height: 14px;
	letter-spacing: 0px;color: #ffffff;text-align: center;display: flex;justify-content: center;align-items: center;">
          <img style="width: 22px;height: 22px;"
               :src="require(status? '../../../assets/images/user/对号@2x.png':'../../../assets/images/user/椭圆1@2x.png')"
               :style="{background:status?'#2772ff':'#ccc'}"
               alt=" ">&nbsp;{{status?'提现成功':'提现失败'}}！
        </p>
      </div>
      <divider :message="{height:'10px'}" style="width: 100%;background-color: #f4f4f4;"></divider>
      <div v-if="!status" style="display: flex;flex-direction: column;">

        <p style="display: flex;justify-content: center;align-items: center;text-align: center;	font-family: PingFang-SC-Medium;
	font-size: 18px;font-weight: normal;font-stretch: normal;line-height: 30px;letter-spacing: 0px;color: #333333;margin-top: 75px;">
          失败原因<br>
          请稍后再次尝试，如有问题请联系客服！</p>
        <p style="	font-family: PingFang-SC-Medium;font-size: 13px;font-weight: normal;
      align-self: center;margin-top: 18px;
	font-stretch: normal;line-height: 13px;letter-spacing: 0px;color: #2772ff;">微信号：licaishi1123</p>

      </div>
      <div v-if="status" style="display: flex;flex-direction: column;">
        <p style="display: flex;justify-content: center;align-items: center;font-family: PingFang-SC-Medium;
	font-size: 18px;font-weight: normal;font-stretch: normal;line-height: 30px;letter-spacing: 0px;color: #333333;margin-top: 75px;">
          <span style="color: #333;font-size: 18px;">请在</span><span>微信零钱</span>中查询，零钱收支明细会<br>
          展示相应记录。
        </p>
        <p style="	font-family: PingFang-SC-Medium;font-size: 13px;font-weight: normal;
      align-self: center;margin-top: 18px;
	font-stretch: normal;line-height: 13px;letter-spacing: 0px;color: #999999;">提醒：微信-我-钱包-零钱</p>
      </div>
    </div>

    <x-button style="width:50%;font-size: 16px;" type="primary"  @click.native="onConfirmClick" mini>确定</x-button>
  </div>
</template>


<script>

  import Divider from '../../../components/Divider'
  import {XButton} from 'vux'

  export default {

    components: {XButton, Divider},
    data() {
      return {
        pageType: false
      }
    },
    methods: {
      onConfirmClick(){
        this.$router.push('/me')
      }

    },
    computed: {
      status() {
        return this.$route.query.success
      }
    },
    mounted() {
      console.log(this.$route.query.success)

    }
  }
</script>

<style scoped>
  span {
    align-self: flex-start;
    line-height: 30px;
    font-size: 19px;
    color: #163f8e;
  }


</style>
