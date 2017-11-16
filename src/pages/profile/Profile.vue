<template>
  <div>

    <group gutter="0">
      <cell :title="$route.query.nickname">
        <img slot="icon" width="40px" style="display:block;margin-right:20px;border-radius: 20px;"
             :src="$route.query.headimgurl">
      </cell>
      <popup-picker title="性别" :data="sexs" v-model="sex" @on-show="onShow" @on-hide="onHide"
                    @on-change="onChange" placeholder="请选择性别"></popup-picker>
      <datetime v-model="date" @on-change="onChange" title="生日" :min-year=1950 :max-year=2017></datetime>
      <cell title="手机号" :value="data.phoneNumber" is-link link="/fillPhone">
      </cell>
    </group>

    <group>
      <x-address title="地区" v-model="value" raw-value :list="addressData" hide-district></x-address>
      <cell title="我的收货地址" :value="data.address" is-link :link="{path:'/fillProfile',query:{address:callBack}}">
      </cell>
    </group>
    <x-button @click.native="saveUserInfo"
              style="width: 80%; margin-top: 40px;margin-left:10%;margin-bottom: 40px;height: 40px;" mini
              type="primary">保存
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
      onChange() {

      }, onShow() {

      }, onHide() {

      },
      saveUserInfo() {

      }
    },

    mounted() {
      fetch('http://tservice.prguanjia.com/account/home')
        .then(res => {
          this.data= res.data;
          console.log(this.data)
        }).catch(err => {

      })
    }

  }


</script>

<style scoped>


</style>
