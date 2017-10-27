<template>
  <div>
    detail
  </div>
</template>

<script>
  import fetch from '../../api/http'

  export default {

    name: 'detail',
    date() {
      return {}
    },
    mounted() {
      console.log(this.$route.query);
      fetch('/table/platformDetail', {type: 'post', params: {'platid': this.$route.query.platid}})
        .then(function (response) {
          console.log(response)
        }).catch(function (err) {
        console.log(err)
      })
    }

  }
</script>
