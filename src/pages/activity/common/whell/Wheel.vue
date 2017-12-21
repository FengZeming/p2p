<template>
  <div class="wheel_wp">
    <div v-if="mode == 1">
      <img src="../../../../assets/images/common/dial_bg.png" style="max-width: 100%;max-height: 100%;"
           :style="{transform:'rotate('+deg+'deg)'}"
      />
      <!--style="-webkit-transform:rotate({{deg}}deg) translateZ(0);transform:rotate({{deg}}deg) translateZ(0)"-->
      <div class="wheel_pointer"
           @click="start">
        <img src="../../../../assets/images/common/dial_pointer.png" style="max-height: 100%;max-width: 100%;"/>
      </div>
    </div>
    <div v-if="mode == 2">
      <!--style="-webkit-transform:rotate({{deg}}deg) translateZ(0);transform:rotate({{ deg}}deg) translateZ(0)"-->
      <img src="../../../../assets/images/common/dial_bg.png" style="max-width: 100%;max-height: 100%;"
      />
      <div class="wheel_pointer" @click="start">
        <img src="../../../../assets/images/common/dial_pointer.png" :style="{transform:'rotate('+deg+'deg)'}"
             style="max-height: 100%;max-width: 100%;"/>
      </div>
    </div>
  </div>
</template>
<script>
  import wheelutil from "./wheel"
  export default {
    data() {
      return {
        wheel: {
          deg: 0,
        },
        mode: 1
      }
    },
    computed: {
      deg() {
        return this.wheel && this.wheel.deg ? this.wheel.deg : 0;
      }
    },
    methods: {
      start() {
        this.wutil.start();
      },
      refresh(data) {
        this.wheel = data;
      }
    },
    mounted() {
      let self = this;
      this.wutil = new wheelutil(self, {
        areaNumber: 8,
        speed: 16,
        awardNumer: 1,
        mode: 1,
        callback: () => {
          console.log('success');
        }
      })
    }
  }

</script>
<style scoped>

  .wheel_wp {
    width: 250px;
    height: 250px;
    position: relative;
    margin: 0 auto;
  }

  .wheel_wp image {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
  }

  .wheel_wp .wheel_pointer {
    position: absolute;
    width: 75px;
    height: 75px;
    top: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    left: 50%;
    margin: -37.5px 0 0 -37.5px;
    transform-origin: 50% 50%;
  }

  .wheel_wp .wheel_pointer image {
    position: absolute;
    width: 75px;
    height: 119px;
    left: 0;
    top: -32px;
  }

</style>
