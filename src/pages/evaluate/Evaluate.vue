<template>
  <div style="display: flex; flex-direction: column;background-color: #f8f8f8;height: 100%;" ref="container">
    <div style="display:flex; align-items:center; justify-content: center; margin-top: 20px; ">
      <p style="margin-right:10px;">评分:</p>
      <rater active-color="#249bd3" v-model="score"></rater>
    </div>
    <group style="margin: 10px;">
      <x-textarea :max="200" v-model="comments" :placeholder="('说说您的看法和建议')" @on-focus="onEvent('focus')"
                  @on-blur="onEvent('blur')"></x-textarea>
    </group>

    <div
      @click="submitComment"
      style="background-color: #249bd3;margin-top: 20px;display: flex;border-radius: 2px;
     height: 34px;width: 70%;justify-content: center;align-self:center;align-items: center; color: white;font-size: 16px;">
      提交
    </div>

  </div>
</template>
<script>
  import {Rater, XTextarea, Group} from 'vux'
  import fetch from '../../api/http'

  export default {
    components: {Rater, XTextarea, Group},
    props: ['message'],
    data() {
      return {
        score: 0,
        comments: ''
      }
    },
    methods: {
      onEvent(event) {

      },
      submitComment() {
        if (!this.score) {
          this.$vux.toast.show({type: 'text', text: '请选择评分'});
          return;
        }
        if (!this.comments) {
          this.$vux.toast.show({type: 'text', text: '请输入您的评价'});
          return;
        }
        let url = 'http://tservice.prguanjia.com/account/evaluationPost';
        fetch(url, {
          type: 'post',
          params: {platid: this.$route.query.platid, comment: this.comments, score: this.score}
        }).then(res => {
          this.$vux.toast.show({type:'text',text:'评论成功'});
          this.$router.back();
        }).catch(err => {
          this.$vux.toast.show({type:'text',text:'评论失败'});
        })
      }
    },
    computed: {},
    mounted() {
      this.$refs.container.parentNode.style.paddingBottom = 0;
    }
  }

</script>
