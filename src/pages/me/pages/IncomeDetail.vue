<template>
  <div ref="container" style="height: 100%;width: 100%;">
    <div class="contianer" :style="{backgroundImage:'url('+headerBackgroudImage+')'}">
      <p><span>{{totalBalance}}</span> 元</p>
      <p style="font-family: PingFang-SC-Medium,normal; display: flex;align-items: center;margin-top: 5px;">
        <img style="width: 18px;height: 18px;background-size: 18px 18px;" src="../../../assets/images/user/问号.png" alt="">&nbsp;{{pageType?'提现':'积分'}}规则</p>
    </div>
    <div v-for="sectionItem,sctionIndex in list">
      <income-list-section-cell :message="{item:sectionItem[0],pageType:pageType}"></income-list-section-cell>
      <div v-for="item,index in sectionItem">
        <income-list-cell :message="{isLast:index ==sectionItem.length-1,item:item}"></income-list-cell>
      </div>
    </div>
    <div style="width: 100%;height: 10px;"></div>
  </div>
</template>

<script>
  import fetch from '../../../api/http'

  import IncomeListSectionCell from './components/IncomeListSectionCell.vue'
  import IncomeListCell from './components/IncomeListCell.vue'

  export default {
    components: {
      IncomeListSectionCell,
      IncomeListCell
    },
    data() {
      return {
        list: []
      }
    },
    methonds: {},
    computed: {
      headerBackgroudImage(){
        return require(this.pageType?'../../../assets/images/user/bg_2.jpg':'../../../assets/images/user/bg_1.jpg')
      },
      totalBalance() {
        return this.queryParams? (this.pageType? this.queryParams.mywallet:this.queryParams.mycoin ):'0';
      },
      pageType(){
        return this.$route.query.type;
      },
      queryParams(){
        return this.$route.query.message;
      }
    },
    mounted() {
      this.$refs.container.parentNode.style.marginBottom = '0px';
      let url = 'http://tservice.prguanjia.com/account/'+ (this.pageType?'walletDetail':'coinDetail');
      fetch(url)
        .then(res => {
          let arr = [];
          let currentMonth = -1;
          let itemArr = [];
          res.data.list.forEach(function (item, index) {
            if (currentMonth !== -1 && currentMonth !== item.indate.split('-')[1]) {
              currentMonth = item.indate.split('-')[1];
              arr.push(itemArr);
              itemArr = [];
            } else if (currentMonth === -1) {
              currentMonth = item.indate.split('-')[1];
              itemArr.push(item)
            }
            if (index !== res.data.list.length - 1) {
              itemArr.push(item);
            } else {
              arr.push(itemArr);
              arr.push(itemArr);
            }

          })
          this.list = arr;
        }).catch(err => {
      })

    }
  }
</script>

<style scoped>
  p {
    font-family: PingFang-SC-Medium;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
  }

  span {
    font-family: PingFang-SC-Medium;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 15px;
    letter-spacing: 0px;
    color: #ffffff;
  }

  .contianer {
    width: 100%;
    height: 160px;
    background: url('../../../assets/images/user/bg_1.jpg') no-repeat center;
    background-size: 100% 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }

</style>
