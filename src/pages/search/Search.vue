<template>
  <div style="display: flex;flex-direction: column;">
    <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"
            v-model="keyword"></search>
    <div v-for="item,index in searchList">

      <search-list-cell v-if="item.is_question" :message='{item:item ,index:index}'></search-list-cell>
      <router-link v-if="!item.is_question" :to="{path:'/detail',query:item}">
        <search-list-cell :message='{item:item ,index:index}'></search-list-cell>
      </router-link>

    </div>

  </div>

</template>
<script>
  import {Search, Divider} from 'vux'
  import fetch from '../../api/http'
  import SearchListCell from './components/SearchListCell'

  export default {
    components: {
      Search,
      Divider,
      SearchListCell
    },
    methods: {
      resultClick(item) {
      },

      onSubmit(val) {
        fetch('table/searchListApi', {type: 'post', params: {param: JSON.stringify({keyword: [this.keyword]})}})
          .then(response => {
            this.searchList = response.data.data;
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
