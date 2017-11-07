<template>
  <div class="container" ref="cont">
    <p class="time" style="margin-top: 100px;color: white;"><span id="sec">10.00</span>秒</p>
    <p style="margin-top: 50px;">点击开始，狂摇手机吧</p>

    <button class="score" ref="btn" @click="start"
            :style="{webkitTransform:'translate3d('+buttonTranslate.x+'px , '+buttonTranslate.y+'px , '+buttonTranslate.z+'px)'}"
    >开始</button>

    <audio src="../../../assets/images/game/shake/shake.m4r" ref="audio"></audio>

  </div>
</template>


<script>
  export default {

    data() {
      return {
        shaking: false,
        buttonTranslate: {
          x: 10, y: 0, z: 0
        },

      }
    },

    methods: {
      start() {
        console.log('start');
        this.audio.play();
      },
      deviceMotionHandler(event) {
        if (!this.shaking) {
            this.buttonTranslate={x: 0, y: 0, z: 0}
        }
        let acceleration = event.accelerationIncludingGravity;
        let curTime = new Date().getTime();
        let diffTime = curTime - last_update;

        if (diffTime > 100) {

          last_update = curTime;

          x = acceleration.x;
          y = acceleration.y;
          z = acceleration.z;

          let xdiff = (x - last_x);
          let ydiff = (y - last_y);
          let zdiff = (z - last_z);
          this.buttonTranslate={x: xdiff, y: ydiff, z: zdiff};

//          ds.style.webkitTransform = 'translate3d(' + xdiff + 'px,' + ydiff + 'px,' + zdiff + 'px)';

          let value = x + y + z;
          let lastvalue = last_x + last_y + last_z;
          let speed = Math.abs(value - lastvalue) / diffTime * 10000;

          if (speed > SHAKE_THRESHOLD) {
            ds.textContent = score++;
          }
          last_x = x;
          last_y = y;
          last_z = z;
        }


      }


    }
    ,
    mounted() {
      //消除父节点的和下边距
      this.$refs.cont.parentNode.style.paddingBottom = 0;
      this.audio = this.$refs.audio;
      this.audio.src = '../../../assets/images/game/shake/shake.m4r';
      this.audio.loop = true;
      window.addEventListener('devicemotion', this.deviceMotionHandler, false)

    }

  }
</script>

<style scoped>

  .container {
    background-color: #9b9b9b;
    height: 100vh;
    width: 100%;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-top: 50px;
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 70px;
    font-size: 15px;
  }

  /*body {*/
  /*text-align: center;*/
  /*background: #ccc;*/
  /*overflow: hidden;*/
  /*}*/

  /** {*/
  /*-webkit-touch-callout: none;*/
  /*-webkit-user-select: none;*/
  /*-khtml-user-select: none;*/
  /*-moz-user-select: none;*/
  /*-ms-user-select: none;*/
  /*user-select: none;*/
  /*-webkit-tap-highlight-color: rgba(0, 0, 0, 0);*/
  /*}*/

  /*html {*/
  /*-ms-touch-action: none;*/
  /*!* Direct all pointer events to JavaScript code. *!*/
  /*}*/

  #score {
    -webkit-transition: .3s;
    padding: 0;
    background: #eee;
    font-size: 1.5em;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 100%;
    border: 1px solid #eee;
    vertical-align: baseline;
    zoom: 1;
    width: 100px;
    height: 100px;
    line-height: 100px;
  }

  /*.time {*/
  /*font-size: 2em;*/
  /*color: #fff;*/
  /*}*/

  /*.share {*/
  /*color: #eee;*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  /*background: rgba(0, 0, 0, .5);*/
  /*padding-top: 240px;*/
  /*}*/

  /*.btn {*/
  /*margin-right: 10px;*/
  /*font-size: 1.5em;*/
  /*display: inline-block;*/
  /*background: #999;*/
  /*padding: 15px;*/
  /*border-radius: 15px;*/
  /*}*/

  /*.fx {*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  /*display: none;*/
  /*}*/


</style>
