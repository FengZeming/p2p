<template>
  <div>

    <group gutter="0">
      <cell :title="$route.query.nickname">
        <img slot="icon" width="40px" style="display:block;margin-right:20px;border-radius: 20px;"
             :src="$route.query.headimgurl">
      </cell>
      <popup-picker title="性别" :data="sexs" v-model="sex" @on-show="onShow" @on-hide="onHide"
                    @on-change="onSexChange" placeholder="请选择性别"></popup-picker>
      <datetime v-model="date" @on-change="onChange" title="生日" :min-year=1950 :max-year=2017></datetime>
      <cell title="手机号" :value="data.phone" is-link link="/fillPhone">
      </cell>
    </group>

    <group>
      <x-address title="地区" v-model="value" raw-value :list="addressData" hide-district></x-address>
      <cell title="我的收货地址" :value="data.address" is-link :link="{path:'/fillProfile',query:data}">
      </cell>
    </group>
    <x-button @click.native="saveUserInfo"
              style="width: 80%; margin-top: 40px;margin-left:10%;margin-bottom: 40px;height: 40px;font-size: 18px;"
              mini
              type="primary"
              :disabled="JSON.stringify(this.data)==this.backupData || !this.backupData"
    >保存
    </x-button>

  </div>

</template>
<script>
  import {
    Group,
    XAddress,
    ChinaAddressV4Data,
    XButton,
    Cell,
    Value2nameFilter as value2name,
    PopupPicker,
    Picker,
    Datetime
  } from 'vux'

  import fetch from '../../api/http'

  export default {

    components: {
      XAddress,
      Cell,
      Group,
      PopupPicker,
      Picker, XButton,
      Datetime
    },
    data() {
      return {
        data: {
          nickname: '',
          headimgurl: '',
          mywallet: '',
          mycoin: '',
          withdrawable: '',
          realname: '',
          phone: '',
          address: '',
          postcode: ''
        },
        backupData: '',
        addressData: ChinaAddressV4Data,
        value: ['北京市', '北京市'],
        showAddress: false,
        sexs: [['男', '女']],
        sex: [],
        date: '1990-1-1',
        phoneNumber: ''
      }
    },
    methods: {
      callBack(params) {

      },
      onSexChange() {

      }, onChange() {
        console.log(this.data)
        console.log( JSON.stringify(this.data)==this.backupData)
      }
      , onShow() {

      }, onHide() {

      },
      buttonState() {
        return  JSON.stringify(this.data)==this.backupData;
      },
      saveUserInfo() {
      }
    },

    mounted() {
      fetch('http://tservice.prguanjia.com/account/home')
        .then(res => {
          this.data = res.data;
          this.backupData = JSON.stringify(res.data);
          console.log(this.backupData)
        }).catch(err => {

      })
    }

  }


</script>

<style scoped>


</style>
