<template>
  <div>
    <me-header-cell>
    </me-header-cell>
    <me-wealth-cell style="margin-top: 5px;">

    </me-wealth-cell>
    <divider :message="{height:'15px'}"></divider>

  </div>
</template>

<script>
  import MeHeaderCell from './components/MeHeaderCell'
  import MeWealthCell from './components/MeWealthCell'
  import Divider from '../../components/Divider'

  export default {
    components: {
      MeHeaderCell,
      MeWealthCell,
      Divider
    }

  }


</script>

<style scoped>

</style>
