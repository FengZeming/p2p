<template>
  <div style="width: 100%;height: 100%;display: flex;">
    <symbol-bar ref="sybolBar" style="position: fixed;"></symbol-bar>
    <div
      style="display: flex;flex-direction: row; padding-top:44px;height: 1000px;min-width: 20%; align-items: center;">
      <div style="min-width: 100px;display: flex;flex-direction: column; height: 1000px;">
        <div v-for="ix in 20"
             style="display:flex; align-items: center;background-color:palevioletred;justify-content: center;
              font-size: 15px;width:100%; height: 50px; text-align: center;">
          侧边栏
        </div>
      </div>
    </div>

    <div style="overflow: scroll; background-color: #10aeff;min-width: 80%; margin-top: 44px;" :style="{height:1000+'px'}"
         ref="gridContentContainer">
      <div v-for="ixxx in 20">
        <div
          style="display: flex;flex-direction: row;width: 100%;  align-items: center;flex: 1; height: 50px;">
          <div style="min-width: 100px;display: flex;flex-direction: row;">
            <div v-for="ix in 6">
              <div style="display:flex; align-items: center;justify-content: center; font-size: 15px;min-width: 100px;">
                内容
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SymbolBar from './components/AttentionSymbolBar.vue'
  import fetch from '../../api/http'
  export default {

    components: {
      SymbolBar
    },
    methods: {
      scrollLeft() {
        console.log(this.$refs.gridContentContainer.scrollLeft);
        this.$refs.sybolBar.scrollLeftTo(this.$refs.gridContentContainer.scrollLeft)
      }
    },
    mounted() {
      this.$refs.gridContentContainer.addEventListener('scroll', this.scrollLeft)

      fetch('http://tservice.prguanjia.com/account/followList')
        .then(function (resp) {
          console.log(resp)

        }).catch(function (err) {
          console.log(err);
      })
    }
  }

</script>
<style scoped>




</style>
