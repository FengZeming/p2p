<template>
  <div>
    <p class="title">普资金服</p>
    <div style="display: flex;margin: 10px 12px 15px 6px;">
      <div v-for="item in 2 " class="tag">上海银行存管</div>
    </div>
    <p class="desc">
      4年老平台！实力股东 53亿成交额4年老平台！实力股东
      53亿成交额 百度V2！夏商集团 国资赛领资本（500亿母
      基金）！！股东为上汽集团 宝钢集团等500强企业...</p>
    <div class="divider"></div>

    <p style="color: #333;font-size: 17px;margin-top: 14px;margin-left: 13px;margin-bottom: 16px;">投资活动</p>

    <div style="margin: 0px 28px 0px 21px; width: calc(100% - 49px);display: flex;position: relative;">
      <p class="xinshoubiao">10000元新手标</p>
      <div class="xinshoubiaoContainer">
        <div class="shoutou">
          <div v-for="item in 2" style="margin-top: 10px;display: flex;justify-content: center;align-items: center;
            flex-direction: column;">
            <p class="touzijine">投资金额</p>
            <p class="touzijinenumber">1000<span style="font-size: 12px;">元</span></p>
          </div>
        </div>
        <div class="futou">
          <div v-for="item in 2" style="margin-top: 10px;display: flex;justify-content: center;align-items: center;
            flex-direction: column;">
            <p class="touzijine">投资金额</p>
            <p class="touzijinenumber">1000<span style="font-size: 12px;">元</span></p>
          </div>
        </div>

      </div>
    </div>

    <div style="margin: 0px 28px 0px 21px; width: calc(100% - 49px);display: flex;position: relative;margin-top: 30px;">
      <p class="xinshoubiao2">10000元新手标</p>
      <div class="xinshoubiaoContainer" style="background:#fff3e0;">
        <div
          style="margin-top: 55px;display: flex;justify-content: space-around; margin-left: 10px;margin-right: 10px;">
          <div v-for="item in 3" style="display: flex;flex-direction: column;align-items: center;">
            <p class="touzijine" style="color:#e65100;">投资金额</p>
            <p class="touzijinenumber">1000<span style="font-size: 12px;">元</span></p>
          </div>
        </div>
        <div class="divider_1px"></div>
        <span style="color: #e65100; font-size: 14px;align-self: center;margin-top: 8px;margin-bottom: 10px;">年化收益率:39.2%</span>
      </div>
    </div>



    <div class="divider" style="height: 1px;color: #bfbfbf;">
    </div>
    <p style="color: #333;font-size: 15px;margin-top: 14px;margin-left: 13px;margin-bottom: 16px;">
      注意事项
    </p>
    <div>
      <div class="attention" v-for="item,index in 2" style="display: flex; margin-left: 15px;margin-right: 25px;">
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

  .title {
    font-size: 18px;
    margin-left: 12px;
    margin-top: 20px;
    color: #333333;
  }

  .tag {
    border: solid 0.5px #2772ff;
    font-size: 12px;
    color: #2772ff;
    display: flex;
    height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 6px;
    font-weight: lighter;

  }

  .divider {
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
  }

  .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 14px;
    margin: 0px 14px 25px 12px;
    line-height: 25px;
    color: #999999;
  }

  .touzijine {
    font-size: 13px;
    line-height: 24px;
    color: #333333;
    margin-bottom: 8px;
  }

  .touzijinenumber {
    font-size: 22px;
    line-height: 24px;
    color: #6d4a10;
  }
  .divider_1px{
    height: 0.5px;
    background: #e65100;
    margin-left: 8px;
    margin-top: 18px;
    width: calc(100% - 16px);
  }

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

  .xinshoubiao {
    display: inline-block;
    width: auto;
    position: absolute;
    color: white;
    margin-top: 10px;
    background-image: url("../../assets/images/distribution/2 (2).png");
    background-repeat: no-repeat;
    padding: 4px 30px 4px 12px;
    background-size: 100% 100%;
  }

  .xinshoubiao2 {
    display: inline-block;
    width: auto;
    position: absolute;
    color: white;
    margin-top: 10px;
    background-image: url("../../assets/images/distribution/2 (1).png");
    background-repeat: no-repeat;
    padding: 4px 30px 4px 12px;
    background-size: 100% 100%;
  }

  .xinshoubiaoContainer {
    width: calc(100% - 7px);
    height: 100%;
    margin-left: 7px;
    background-color: #fffbd4;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

  }

  .shoutou {
    background-image: url('../../assets/images/distribution/组5@2x.png');
    background-repeat: no-repeat;
    width: 237px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 93px;
    margin-top: 55px;
    background-size: 100% 100%;
  }

  .futou {
    display: flex;
    background-image: url('../../assets/images/distribution/组6@2x.png');
    background-repeat: no-repeat;
    width: 237px;
    align-self: center;
    justify-content: space-around;
    height: 93px;
    margin-top: 18px;
    background-size: 100% 100%;
  }

  .attention div{
    font-size: 14px;
    line-height: 25px;
    color: #666666;
  }
</style>
