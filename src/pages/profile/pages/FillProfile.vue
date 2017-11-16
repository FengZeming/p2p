<template>
  <div>
    <group>
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>

      <x-input title="地址" :max="30" placeholder="请输入收货地址"></x-input>
      <x-input title="邮编" :max="5" placeholder="请输入邮编" type="number"></x-input>
    </group>
    <x-button style="margin-top: 30px; width: 80%;" type="primary">提交</x-button>

  </div>

</template>
<script>
  import {XInput, Group, XButton, Cell} from 'vux'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    mounted() {

    }
  }
</script>

<style scoped>


</style>
