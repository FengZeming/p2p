<template>
  <div class="container" ref="cont">
    <p class="time" style="margin-top: 100px;color: white;" ref="timetext"><span id="sec">10.00</span>秒</p>
    <p style="margin-top: 50px;">点击开始，狂摇手机吧</p>

    <button class="score" ref="btn" @click="start"
            :style="{webkitTransform:'translate3d('+buttonTranslate.x+'px , '+buttonTranslate.y+'px , '+buttonTranslate.z+'px)'}"
    >开始
    </button>

    <!--<audio src="../../../assets/images/game/shake/shake.m4r" ref="audio"></audio>-->

  </div>
</template>


<script>
  export default {

    data() {
      return {
        last_x: 0,
        last_y: 0,
        last_z: 0,
        score: 0,
        shaking: false,
        last_update: 0,
        buttonTranslate: {
          x: 10, y: 0, z: 0
        },
      }
    },

    methods: {

      start() {
        console.log('start');
//        this.audio.play();
        this.shaking = true;

        var time =1000;
        var tid = setInterval(function () {
          time--;
//          document.body.style.backgroundColor = '#' + (time + 700).toString(16);
          if (time < 0) {
            audio.loop = false;
            audio.pause();
            document.body.style.backgroundColor = '#ccc';
            clearInterval(tid);
            begin = false;
            end = true;
            share.style.display = 'block';
            return;
          }
          sec.textContent = (time / 100).toPrecision(time.toString().length);
        }, 10);
      },
      deviceMotionHandler(event) {
        if (!this.shaking) {
          this.buttonTranslate = {x: 0, y: 0, z: 0}
          return;
        }
        let SHAKE_THRESHOLD = 600;
        let acceleration = event.accelerationIncludingGravity;


        let curTime = new Date().getTime();
        let diffTime = curTime - this.last_update;

        if (diffTime > 100) {
          console.log(this.last_update);
          this.last_update = curTime;

          this.buttonTranslate.x = acceleration.x;
          this.buttonTranslate.y = acceleration.y;
          this.buttonTranslate.z = acceleration.z;
          console.log(acceleration.x)
          console.log(this);
          console.log(this.last_x)
          console.log(acceleration.y)
          console.log(this.last_y)
          console.log(acceleration.z)
          console.log(this.last_z)


          let xdiff = (this.buttonTranslate.x - this.last_x);
          let ydiff = (this.buttonTranslate.y - this.last_y);
          let zdiff = (this.buttonTranslate.z - this.last_z);
          console.log(xdiff)
          console.log(ydiff)
          console.log(zdiff)
          this.buttonTranslate.x = xdiff;
          this.buttonTranslate.y = ydiff;
          this.buttonTranslate.z = zdiff;

//          ds.style.webkitTransform = 'translate3d(' + xdiff + 'px,' + ydiff + 'px,' + zdiff + 'px)';

          let value = this.buttonTranslate.x + this.buttonTranslate.y + this.buttonTranslate.z;
          let lastvalue = this.last_x + this.last_y + this.last_z;
          let speed = Math.abs(value - lastvalue) / diffTime * 10000;

          if (speed > SHAKE_THRESHOLD) {
            this.$refs.timetext.textContent = this.score++;
          }
          this.last_x = this.buttonTranslate.x;
          this.last_y = this.buttonTranslate.y;
          this.last_z = this.buttonTranslate.z;
        }
      }


    }
    ,
    mounted() {
      //消除父节点的和下边距
      this.$refs.cont.parentNode.style.paddingBottom = 0;
//      this.audio = this.$refs.audio;
//      this.audio.src = '../../../assets/images/game/shake/shake.m4r';
//      this.audio.loop = true;
      window.addEventListener('devicemotion', this.deviceMotionHandler, false)
      this.last_x = 0;
      this.last_y = 0;
      this.last_z = 0;
      console.log(this)
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
