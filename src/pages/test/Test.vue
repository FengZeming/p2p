<template>
  <div style="justify-content: center;display: flex;align-items: center; height: 100%;">
    <img :src="code" class="tianxie_img" style="min-width: 100px; min-height: 30px;" @click="change">
  </div>


</template>
<script>
  import verification from 'verification-code';
  export default {

    data() {
      return {
        code: ''
      }
    },
    methods: {
      change() {
        this.code = verification.create().dataURL;
      }
    },
    mounted(){
      this.change();
    }
  }
</script>
