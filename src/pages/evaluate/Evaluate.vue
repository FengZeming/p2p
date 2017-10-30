<template>
  <div style="display: flex; flex-direction: column;background-color: #f8f8f8;height: 100%;">
    <div style="display:flex; align-items:center; justify-content: center; margin-top: 20px; ">
      <p style="margin-right:10px;">评分:</p>
      <rater active-color="#249bd3" v-model="score" ></rater>
    </div>
    <group style="margin: 10px;">
      <x-textarea :max="200" v-model="comments" :placeholder="('说说您的看法和建议')" @on-focus="onEvent('focus')"
                  @on-blur="onEvent('blur')"></x-textarea>
    </group>

    <div style="background-color: #249bd3;margin-top: 20px;display: flex;border-radius: 2px;
     height: 34px;width: 70%;justify-content: center;align-self:center;align-items: center; color: white;font-size: 16px;">
      提交
    </div>

  </div>
</template>
<script>
  import {Rater, XTextarea, Group} from 'vux'

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

      }
    },
    computed: {}
  }

</script>
