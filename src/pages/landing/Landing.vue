<template>
  <div class="root" ref="root"></div>
</template>

<script>
  import fetch from '../../api/http'
  export default {
    name: 'landing',
    components: {},
    data() {
      return {}
    },
    methods: {
      loadData(){
        fetch('/table/platformDetail', {type: 'post', params: {'platid': this.$route.query.platid}})
          .then((response) => {
            console.log(response)
          }).catch(function (err) {
            console.log(err)
        });
      }
    },
    computed: {},
    mounted() {
      this.$refs.root.parentNode.paddingBottom = 0;
      console.log(this.$route.query)
      this.loadData()
    }
  }
</script>

<style scoped>
  .root {

  }

</style>
