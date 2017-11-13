<template>
  <div style="justify-content: center;display: flex;align-items: center;
        height: 100%;flex-direction: column;">

    <group class="weui-cells_form" style="margin: 10px;">
      <x-input title="验证码" class="weui-cell_vcode">
        <img slot="right" :src="code" class="tianxie_img weui-vcode-img" @click="change" >
      </x-input>
    </group>

    <div style="width: 100%;margin-top: 20px;">

      <div class="stage">
        <div class="slider" id="slider">
          <div class="label">向右滑动验证</div>
          <div class="track" id="track">
            <div class="bg-green"></div>
          </div>
          <div class="button" id="btn">
            <div class="icon" id="icon"></div>
            <div class="spinner" id="spinner"></div>
          </div>
        </div>
      </div>
    </div>


  </div>


</template>
<script>
  import verification from 'verification-code';
  import { XInput, Group } from 'vux'
  export default {
    components:{
      XInput,
      Group
    },

    data() {
      return {
        code: 'http://ti.prguanjia.com/verification/generate',
        count: 0
      }
    },
    methods: {
      change() {
        this.count++;
        this.code = 'http://ti.prguanjia.com/verification/generate?count=' + this.count;
      }
    },
    mounted() {
      this.change();

      var oBtn = document.getElementById('btn');
      var oW, oLeft;
      var oSlider = document.getElementById('slider');
      var oTrack = document.getElementById('track');
      var oIcon = document.getElementById('icon');
      var oSpinner = document.getElementById('spinner');
      var flag = 1;

      oBtn.addEventListener('touchstart', function (e) {
        if (flag == 1) {
          console.log(e);
          var touches = e.touches[0];
          oW = touches.clientX - oBtn.offsetLeft;
          oBtn.className = "button";
          oTrack.className = "track";
        }

      }, false);

      oBtn.addEventListener("touchmove", function (e) {
        if (flag == 1) {
          var touches = e.touches[0];
          oLeft = touches.clientX - oW;
          if (oLeft < 0) {
            oLeft = 0;
          } else if (oLeft > document.documentElement.clientWidth - oBtn.offsetWidth - 30) {
            oLeft = (document.documentElement.clientWidth - oBtn.offsetWidth - 30);
          }
          oBtn.style.left = oLeft + "px";
          oTrack.style.width = oLeft + 'px';
        }

      }, false);

      oBtn.addEventListener("touchend", function () {
        if (oLeft >= (oSlider.clientWidth - oBtn.clientWidth)) {
          oBtn.style.left = (document.documentElement.clientWidth - oBtn.offsetWidth - 30);
          oTrack.style.width = (document.documentElement.clientWidth - oBtn.offsetWidth - 30);
          oIcon.style.display = 'none';
          oSpinner.style.display = 'block';
          flag = 0;
        } else {
          oBtn.style.left = 0;
          oTrack.style.width = 0;
        }
        oBtn.className = "button-on";
        oTrack.className = "track-on";
      }, false);

    }
  }
</script>
<style scoped>
  .stage {
    position: relative;
    padding: 0 15px;
    height: 55px;
  }

  .slider {
    position: absolute;
    height: 52px;
    box-shadow: 0 0 3px #999;
    background-color: #ddd;
    left: 15px;
    right: 15px;
  }

  .label {
    background: -webkit-gradient(linear, left top, right top, color-stop(0, #4d4d4d), color-stop(.4, #4d4d4d), color-stop(.5, white), color-stop(.6, #4d4d4d), color-stop(1, #4d4d4d));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: slidetounlock 3s infinite;
    -webkit-text-size-adjust: none;
    line-height: 52px;
    height: 52px;
    text-align: center;
    font-size: 16px;
    width: 100%;
    color: #aaa;
  }

  @keyframes slidetounlock {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: 200px 0;
    }
  }

  @-webkit-keyframes slidetounlock {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: 200px 0;
    }
  }

  .button {
    position: absolute;
    left: 0;
    top: 0;
    width: 52px;
    height: 52px;
    background-color: #fff;
    transition: left 0s;
    -webkit-transition: left 0s;
  }

  .button-on {
    position: absolute;
    left: 0;
    top: 0;
    width: 52px;
    height: 52px;
    background-color: #fff;
    transition: left 1s;
    -webkit-transition: left .5s;
  }

  .track {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    overflow: hidden;
    transition: width 0s;
    -webkit-transition: width 0s;
  }

  .track-on {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    overflow: hidden;
    transition: width 1s;
    -webkit-transition: width .5s;
  }

  .icon {
    width: 32px;
    height: 32px;
    position: relative;
    top: 10px;
    left: 20px;
    font-family: sans-serif;
  }

  .icon:before {
    content: '>>';
    color: #ccc;
    line-height: 32px;
  }

  .spinner {
    width: 32px;
    height: 32px;
    background: url('../../assets/images/ok.png') no-repeat;
    position: relative;
    top: 10px;
    left: 10px;
    display: none;
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0.0)
    }
    40% {
      -webkit-transform: scale(1.0)
    }
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    }
    40% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }

  .bg-green {
    line-height: 52px;
    height: 52px;
    text-align: center;
    font-size: 16px;
    background-color: #78c430;
  }

</style>
