<template>
  <div class="container">
    <div class="leftContianer childContiner"
         style="">
      <p style="color: white; font-size: 24px;">
        {{message.platform}} <span style="color:#ffea00; font-size: 14px; ">{{message.background}}</span>
      </p>
      <p style="font-size: 14px; color: #b6ccd9;">
        正常运营:<span style="font-size: 15px;"> {{message.timeOperation}} </span>
      </p>
    </div>
    <div class="rightContainer childContiner"
         style="flex: 1; margin-top: 15px;align-content: flex-end;margin-right: 10px;margin-left: 0;align-items: flex-end;display: flex;">
      <p style="padding: 0px 10px;border-radius:20px;border:1px;color: white;border-style: solid;display: inline-block;
       font-size: 14px; margin: 0; align-items: flex-end;
      line-height: 20px;">第{{message.ranking}}名</p>
      <p style="margin-top: 16px;color: white; display: inline-block;">{{message.bank}}
        <span style="color: #b6ccd9; font-size: 13px;display: inline-block;">{{message.bank_status}}</span></p>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['message']

  }

</script>

<style scoped>
  .container {
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#2593fb), to(#0554c6));
    height: 100px;
    width: 100%;
    display: flex;
    padding: 0;
    margin: 0;
    /*-moz-transform:rotate(45deg);*//*-webkit-transform:rotate(45deg);*//*-o-transform:rotate(45deg);  *//*-ms-transform:rotate(45deg); */
    flex-direction: row;
    transform: rotate(0deg);
  }

  .childContiner {
    flex: 1;
    align-self: center;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    margin-left: 10px;
  }

</style>
