<template>
  <div>
    <sign-score-header-cell></sign-score-header-cell>
    <p>
      继续加油!<br/>比25%的小伙伴懂得多
    </p>
    <div class="vux-circle-demo">
      <div style='width:150px;height:150px;'>
        <x-circle :percent="percent2" :stroke-width="10" :trail-width="7" :stroke-color="strokeColor2"
                  trail-color="#ececec">
          <span :style="{color: strokeColor2}">{{percent2}}%</span>
        </x-circle>
      </div>
    </div>

    <sign-score-stat-cell></sign-score-stat-cell>
    <sign-score-qrcode-cell></sign-score-qrcode-cell>


  </div>

</template>

<script>
  import {XCircle, Range, Icon} from 'vux'
  import SignScoreHeaderCell from './components/SignScoreHeaderCell'
  import SignScoreStatCell from './components/SignScoreStatCell'
  import SignScoreQrcodeCell from './components/SignScoreQrcodeCell'

  export default {
    ready() {
      setInterval(this.update2, 2000)
    },
    components: {
      XCircle,
      Range,
      Icon,
      SignScoreHeaderCell,
      SignScoreStatCell,
      SignScoreQrcodeCell
    },
    data() {
      return {
        percent1: 10,
        percent2: 60,
        strokeColor2: '#448aff'
      }
    },
    methods: {
      update2() {
        const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A']
        this.percent2 = parseInt(Math.random() * 100, 10)
        this.strokeColor2 = colorMap[parseInt(Math.random() * 3, 10)]
      }
    }
  }
</script>

<style scoped>
  .vux-circle-demo {
    text-align: center;
  }

  .vux-circle-demo > div {
    margin: 0 auto;
  }

  span {
    font-size: 32px;
  }

  p {
    width: 100%;
    height: 82px;
    margin-top: 30px;
    font-family: ﻿FZLTHK--GBK1-0;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    text-align: center;
    color: #448aff;
  }
</style>
