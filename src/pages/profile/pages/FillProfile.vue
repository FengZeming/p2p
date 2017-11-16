<template>
  <div>
    <group gutter="0">
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name" v-model="data.realname"></x-input>
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"
               v-model="data.phone"></x-input>

      <x-input title="地址" :max="30" placeholder="请输入收货地址" v-model="data.address"></x-input>
      <x-input title="邮编" :max="5" placeholder="请输入邮编" type="number" v-model="data.postcode"></x-input>
    </group>
    <x-button style="margin-top: 30px; width: 80%;" type="primary" @click.native="saveAddressInfo">提交</x-button>

  </div>

</template>
<script>
  import {XInput, Group, XButton, Cell} from 'vux'
  import fetch from '../../../api/http'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    data() {
      return {
        data: {
          address: '',
          realname: '',
          postcode: '',
          phone: ''
        }
      }
    },
    methods: {
      saveAddressInfo() {
        let url = 'http://tservice.prguanjia.com/account/delivery';
        fetch(url, {type: 'post', params: this.data})
          .then(res => {
            if (res.result == 0) {
              this.showLoading();
              setTimeout(() => {
                this.$router.back();
              }, 500);
            }
          }).catch(err => {

        });
      },
      showLoading() {
        this.$vux.toast.show({
          text: '保存成功',

        })
      }
    },
    mounted() {
      this.data={
        address: this.$route.query.address,
        realname: this.$route.query.realname,
        postcode: this.$route.query.postcode,
        phone: this.$route.query.phone
      }

//      fetch('http://tservice.prguanjia.com/account/delivery')
//        .then(res => {
//          console.log(res);
//        }).catch(err => {
//
//      });
    }
  }
</script>

<style scoped>


</style>
