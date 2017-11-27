<template>
  <div style="display:flex;width:96%; flex-direction:column;">
    <div class="item_container" style="display:flex;flex-direction:row;width:100%;">
      <div
        style="display:flex;width:100%; flex-direction:row;align-items:center;flex-wrap:nowrap; justify-content:flex-start;">
        <img
          style="border-radius:40px; width:40px;height:40px;margin:10px; align-items:center;"
          :src="avatar"/>
        <div style="flex:1;">
          <p
            style="padding-left:0; padding-right:0; flex:1; display: block; font-size:16px;color:#333333;line-height: 40px;overflow: hidden;white-space: nowrap; text-overflow:ellipsis;">
            {{item.nickname}}
          </p>
          <div style="display: flex; ">
            <div style="display:flex;flex-direction:row;flex: 1;">
              <div v-for="item,idx in stars">
                <img class="rating-image " :style="{left:(idx*25)}" style="width:12px;height:12px;"
                     :src="star(idx)"
                />
              </div>
            </div>
            <p style=" white-space:nowrap;padding-right:20px; align-self:center;font-size:15px;color: #999999">
              {{item.indate}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <p style="padding:10px; ">{{item.comment}}</p>
    <div style="display:flex; flex-direction:row-reverse;margin-bottom:10px; margin-right:10px;">
      <p style="color:#666; margin-top:10px;align-self:center; font-size:17px; margin-left:5px;">{{item.like}}</p>
      <div style="width:20px; height:20px;margin-left:10px;margin-right:10px; ">
        <img style="width:20px; height:20px;" @click="doStar"
             :src="zan"/>
      </div>
    </div>
  </div>
</template>
<script>
  import fetch from '../../../api/http'

  export default {
    props: ['message'],
    data() {
      return {
        stars: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      star(index) {
        return require(this.item.score > index ? '../../../assets/images/rating_selected.png' : '../../../assets/images/rating_normal.png');
      },
      doStar() {
        fetch('http://tservice.prguanjia.com/account/evaluationLike', {type: 'post', params: {eid: this.message.eid, like: 1}})
          .then(res => {

          }).catch(err => {

        })
      }
    },
    computed: {
      item() {
        return this.message;
      },
      avatar() {
        return this.message.avatarurl;
      },
      zan() {
        return require(this.item.ilike ? '../../../assets/images/praised.png' : '../../../assets/images/unpraised.png');
      }
    },
    mounted() {
      console.log(this.message);
    }
  }


</script>
