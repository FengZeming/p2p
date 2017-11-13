<template>
  <div>

    <group>
      <cell title="昵称" is-link>
        <img slot="icon" width="40px" style="display:block;margin-right:5px;"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
      <popup-picker title="性别" :data="sexs" v-model="sex" @on-show="onShow" @on-hide="onHide"
                    @on-change="onChange" placeholder="请选择性别"></popup-picker>
      <datetime v-model="date" @on-change="onChange" title="生日" :min-year=1950 :max-year=2017></datetime>
      <cell title="手机号" :value="phoneNumber" is-link>
      </cell>
    </group>

    <group>
      <x-address title="地区" v-model="value" raw-value :list="addressData" hide-district></x-address>
      <cell title="我的收货地址" value="北京市 朝阳区" is-link link="/fillProfile">
      </cell>
    </group>

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

  export default {
    components: {
      XAddress,
      Cell,
      Group,
      PopupPicker,
      Picker,
      Datetime
    },
    data() {
      return {
        addressData: ChinaAddressV4Data,
        value: ['广东省', '中山市'],
        showAddress: false,
        sexs: [['男', '女', '保密']],
        sex: [],
        date: '1990-1-1',
        phoneNumber: ''
      }
    },
    methods: {
      onChange() {

      }, onShow() {

      }, onHide() {

      }
    }


  }


</script>

<style scoped>


</style>
