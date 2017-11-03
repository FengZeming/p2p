<template>

  <div>
    <sign-ranking-header-cell></sign-ranking-header-cell>
    <divider-one-px></divider-one-px>
    <divider :message="{height:'10px'}"></divider>
    <divider-one-px></divider-one-px>
    <div style="height:44px;">
      <sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
        <tab :line-width="1" bar-active-color="#080363" active-color="#080363" custom-bar-width="50%">
          <tab-item selected>签到排名</tab-item>
          <tab-item>脑容量排名</tab-item>
        </tab>
      </sticky>
    </div>
    <p v-for="i in 100">{{i}}<br></p>
  </div>
</template>

<script>
  import {Tab, TabItem, Sticky} from 'vux'
  import Divider from '../../../components/Divider'
  import DividerOnePx from '../../../components/Divider1px'
  import SignRankingHeaderCell from './components/SignRankingHeaderCell'
  import Vue from 'vue'

  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      DividerOnePx,
      SignRankingHeaderCell
    },
    data() {
      return {}
    },
    methods: {
      onScroll() {
        if (document.getElementById('vux_view_box_body').scrollHeight - 30 <
          document.getElementById('vux_view_box_body').scrollTop +
          document.getElementById('vux_view_box_body').clientHeight) {
          if (Vue.$vux.loading.showing) {
            return;
          }
          Vue.$vux.loading.showing = true;
          this.$vux.loading.show({
            text: 'Loading'
          });
        }
      },
      spaceChange() {
        this.showSpace = !this.showSpace
        this.$nextTick(() => {
          this.$refs.sticky.bindSticky()
        })
      },
      refresh(done) {

      },

      loadMore(done) {

      }
    },
    mounted() {
      document.getElementById('vux_view_box_body').addEventListener('scroll', this.onScroll);
    }
  }
</script>
<style scoped>
  .space-btn {
    padding: 5px 0;
    margin: 10px;
    text-align: center;
    border: 1px red solid;
  }

  div.vux-sticky-box.vux-fixed {
    top: 0 !important;
  }

  .space {
    padding: 30px 0;
    margin: 10px;
    text-align: center;
    border: 1px green solid;
  }
</style>
