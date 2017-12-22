<template>
  <div class="contianer">
    <p v-for="item in list">{{item}}</p>

    <div class="declare">
      {{declare}}
    </div>

  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        list: [
          ' 1.每人每日可砸2枚金蛋，每日分享此活动可额外获取1枚金蛋。公众号内回复“再来一个”可再获得一枚金蛋。',
          ' 2.实物奖品用户，请仔细填写邮寄地址（姓名、手机、详细地址）。',
          ' 3.现金奖品用户，请在公众号“互金每日早知道”内回复“领奖”领取。',
          ' 4.平台奖励用户，请通过本活动页面注册，奖励将于3个工作日内发送至平台账户。',
          ' 5.双旦礼包用户，请扫码添加理财师微信领取。',
          ' 6.活动期限：2017年12月22日-2018年1月5日。'
        ],
        declare: '*本活动为“互金每日早知道”粉丝福利，最终解释权归“互金每日早知道”所有。'
      }
    },
    methods: {},
    computed: {},
    mounted() {

    }
  }
</script>

<style scoped>
  .contianer {
  }
  p {
    font-size: 14px;
    line-height: 30px;
    color: #620a0a;
  }

  .declare {
    font-size: 12px;
    line-height: 26px;
    color: #333333;
  }
</style>
