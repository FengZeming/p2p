<template>
  <div>
    <p>普资金服</p>
    <div style="display: flex;">
      <div v-for="item in 2 ">上海银行存管</div>
    </div>
    <p>4年老平台！实力股东 53亿成交额4年老平台！实力股东
      53亿成交额 百度V2！夏商集团 国资赛领资本（500亿母
      基金）！！股东为上汽集团 宝钢集团等500强企业...</p>

    <p>投资活动</p>

    <div>

    </div>
    <div>

    </div>
    <div>

    </div>
    <p>
      注意事项
    </p>
    <div>
      <div v-for="item,index in 2" style="display: flex; margin-left: 15px;margin-right: 25px;">
        <div>{{index+1}}、</div>
        <div>定额10100才能用10的卷！投成10000无法用卷！
          以此类推！.
        </div>
      </div>
    </div>
    <div class="buttonContainer">
      <div class="button">注册投资</div>
      <div style="width: 1px; height: 100%;"></div>
      <div class="button" style="background-color: #aaaaaa">上传记录</div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    computed: {},
    mounted() {

    }
  }
</script>

<style scoped>
  .buttonContainer {
    width: 100%;
    height: 42px;
    display: flex;
    position: fixed;
    bottom: 0;
  }

  .button {
    flex: 1;
    height: 42px;
    display: flex;
    background: #2772ff;
    color: white;
    font-size: 18px;
    justify-content: center;
    align-items: center;
  }
</style>
