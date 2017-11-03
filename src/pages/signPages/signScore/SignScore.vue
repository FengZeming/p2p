<template>
  <div class="vux-circle-demo">
    <div style='width:150px;height:150px;'>
      <x-circle :percent="percent2" :stroke-width="10" :trail-width="7" :stroke-color="strokeColor2" trail-color="#ececec">
        <span :style="{color: strokeColor2}">{{percent2}}%</span>
      </x-circle>
    </div>
  </div>
</template>

<script>
  import { XCircle, Range, Icon } from 'vux'

  export default {
    ready () {
      setInterval(this.update2, 2000)
    },
    components: {
      XCircle,
      Range,
      Icon
    },
    data () {
      return {
        percent1: 10,
        percent2: 60,
        strokeColor2: '#448aff'
      }
    },
    methods: {
      update2 () {
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
  span{
    font-size: 32px;
  }
</style>
