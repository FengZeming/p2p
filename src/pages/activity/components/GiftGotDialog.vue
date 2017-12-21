<template>
  <!--<div class="img-box" style="width: 100%;display: flex;flex-direction: column;height: 120vw;align-items: center;"-->
  <!--:style="{backgroundImage:'url('+require('../../../assets/images/shuangdan/图层4@2x.png')+')'}"-->
  <!--ref="box">-->
  <!--<div class="listContainer" style="overflow: scroll;">-->
  <!--<div v-for="item in 3"-->
  <!--style="width: 76vw; height: 23.1vw; background-size: 100%; background-repeat: no-repeat;margin-bottom: 15px;"-->
  <!--:style="{backgroundImage:'url('+require('../../../assets/images/shuangdan/已使用@2x.png')+')'}">-->
  <!--</div>-->

  <!--</div>-->
  <!--</div>-->

  <div style="height: 244px;width: 224px;background-size: 100%;background-repeat: no-repeat;" ref="box"
       :style="{backgroundImage:'url('+giftImage+')'}"
       @click="onClick"
  ></div>

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
      return {}
    },
    methods: {
      onClick() {
        this.$emit('onClick', (!this.message || !this.message.prize));
        console.log(this.message)
        if ((this.message && this.message.prize)) {
          this.$router.push({name: 'result', params: this.message})
        }
      }
    },
    computed: {
      giftImage() {
        return require('../../../assets/images/shuangdan/' + ((this.message && this.message.prize) ? this.message.prize : '未中奖') + '@2x.png')
      }
    },
    mounted() {
      this.$refs.box.parentNode.style.maxWidth = '224px';
      this.$refs.box.parentNode.style.width = '224px';
      this.$refs.box.parentNode.style.backgroundColor = 'transparent';
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
