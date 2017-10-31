<template>
  <div style="display: flex;flex-direction: column;">
    <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"
            v-model="keyword"></search>


  </div>

</template>
<script>
  import {Search, Divider} from 'vux'
  import fetch from '../../api/http'

  export default {
    components: {
      Search,
      Divider
    },
    methods: {
      resultClick(item) {
      },

      onSubmit(val) {
        fetch('table/searchListApi', {type: 'post', params: {param: JSON.stringify({keyword: [this.keyword]})}})
          .then(response => {
            this.searchList = response.data.data;
            console.log(response);
          }).catch(err => {
        });
      },
      onCancel() {
      },
      onFocus() {
      }
    },
    data() {
      return {
        results: [],
        autoFixed: false,
        keyword: '',
        searchList: []
      }
    },
    mounted() {

    }
  }

</script>

<style scoped>
  p {
    padding: 10px 15px;
    font-size: 14px;
    color: #888;
  }
</style>
