<template>
  <div>
    <p v-if="powerDatas.length>0"
       style="padding-left: 10px;padding-top: 8px;padding-bottom: 5px;font-size: 13px;color: #999;">平台实力</p>
    <div v-if="powerDatas.length>0"
         style="width: 100%;height: 1px;background-color: #f4f4f4;"></div>
    <div v-if="powerDatas.length>0"
         style="display:flex;flex-wrap: wrap;flex-direction: row;padding-bottom:10px; background:white; width:100%;">

      <div v-for="i, index in powerDatas" style="width:auto;padding-left:10px;padding-right:10px;height:30px; border-radius:2px;
        margin-left:2%;margin-top:2% ;display:flex; color:white;justify-content:center;align-items:center;font-size:14px;"
           :style="{background: isQuestion?'#b9b9b9':'#0554c6'}">
        <p>{{powerDatas[index]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['message'],

    computed: {
      itemData() {
        return this.message;
      }
      , powerDatas() {
        var platDepend = [];
        if (this.itemData.background) {
          platDepend.push(this.itemData.background);
        }
        if (this.itemData.regCapital) {
          platDepend.push(this.itemData.regCapital);
        }
        if (this.itemData.bank_status === "存管上线") {
          platDepend.push(this.itemData.bank_status);
        }
        return platDepend;
      }

      , isQuestion() {
        return this.itemData.is_question * 1;
      }
    }

  }
</script>
