<template>
  <div class="root" ref="root"></div>
</template>

<script>
  export default {
    name: 'landing',
    components: {},
    data() {
      return {}
    },
    methods: {},
    computed: {},
    mounted() {
      this.$refs.root.parentNode.paddingBottom = 0;
      console.log(this.$route.query)
    }
  }
</script>

<style scoped>
  .root {

  }

</style>
