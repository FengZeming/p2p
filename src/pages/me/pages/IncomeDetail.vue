<template>
  <div>
    <div class="contianer">
      <p><span>1000</span> 元</p>
      <p style="font-family: PingFang-SC-Medium,normal; display: flex;align-items: center;margin-top: 5px;">
        <img style="width: 20px;height: 20px;" src="../../../assets/images/sign/问号.png" alt="">提现规则</p>
    </div>

    <div v-for="sectionItem,sctionIndex in list">
      <income-list-section-cell :message="sectionItem[0]"></income-list-section-cell>
      <div v-for="item,index in sectionItem">
        <income-list-cell :isLast="index ==sectionItem.length-1"></income-list-cell>
      </div>
    </div>

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
    computed: {},
    mounted() {
      fetch('http://tservice.prguanjia.com/account/walletDetail')
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
    background: url('../../../assets/images/user/bg_2.jpg') no-repeat center;
    background-size: 100% 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }

</style>
