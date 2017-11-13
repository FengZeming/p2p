<template>
  <div style="width: 100%;height: 100%;display: flex; flex-direction: column;" ref="contianer">
    <symbol-bar ref="sybolBar" style="position: relative;background-color: white;"></symbol-bar>
    <divider></divider>
    <div style="width: 100%;height: 100%;display: flex; flex-direction: row;">
      <div
        style="display: flex;flex-direction: row; margin-top:0px;min-width: 25%; ">
        <div style="min-width: 100px;display: flex;flex-direction: column;"
             :style="{height:list.length*44+'px'}">

          <div v-for="item ,index in list"
               :style="{backgroundColor: backgroundColor(index)}"
               style="display:flex; align-items: center;justify-content: center;
              font-size: 15px;width:100%; height: 44px; text-align: center;">
            <router-link :to="{path:'/detail',query:item}" v-if="item.platid">
              <div style="color: #873000;font-size: 14px;">
                {{item.platform}}
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div style="overflow: scroll;min-width: 75%; margin-top: 0px;"
           :style="{height:list.length*44+'px'}"
           ref="gridContentContainer">

        <div v-for="item,index in list">
          <router-link :to="{path:'/detail',query:item}">
            <div :style="{backgroundColor:backgroundColor(index)}"
                 style="display: flex;flex-direction: row;width: 100%;  align-items: center;flex: 1;max-height: 44px;height: 44px">
              <div style="min-width:100%;display: flex;flex-direction: row;">
                <div v-for="key in keys" style="min-width: 33.33%;">
                  <div style="display:flex; align-items: center;justify-content: center; font-size: 14px;color: #333">
                    {{item[key] || '-'}}
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import SymbolBar from './components/AttentionSymbolBar.vue'
  import fetch from '../../api/http'
  import Divider from '../../components/Divider1px'

  export default {

    data() {
      return {
        list: [],
        keys: ['incomeRate', 'bidderNum', 'amount']
      }
    },
    computed: {},
    components: {
      SymbolBar,
      Divider
    },
    methods: {
      backgroundColor(index) {
        return index % 2 === 0 ? '#fff6d6' : 'white';
      },
      scrollLeft() {
//        console.log(this.$refs.gridContentContainer.scrollLeft);
        this.$refs.sybolBar.scrollLeftTo(this.$refs.gridContentContainer.scrollLeft)
      }
    },
    mounted() {
      this.$refs.contianer.parentNode.style.paddingBottom = 0;
      this.$refs.gridContentContainer.addEventListener('scroll', this.scrollLeft);
      fetch('http://tservice.prguanjia.com/account/followList')
        .then((resp) => {
          this.list = resp.data;
          console.log(this.list);
        }).catch(function (err) {
        console.log(err);
      })
    }
  }

</script>
<style scoped>


</style>
