<template>
  <div style="background-image: url(https://i.loli.net/2017/11/01/59f9ae238ae93.png)">
    <div style="display: flex;width: 100%;height: auto;">
      <img :src="require('../../../assets/images/钱包.png')" alt="头像">
      <div style="align-self: center;margin-left: -5px;">
        <p style="color: white;font-size: 17px;">miss古铜</p>
        <p style="color: white;font-size: 12px;">黄金会员</p>
      </div>


    </div>
    <div
      style="display: flex; background-color: dodgerblue;justify-content: center;align-items: center;align-self: center;">
      <p style="color: white;font-size: 16px;padding: 5px; flex: 1;align-self: center;">可提现金额: 10.36 </p>
      <button>提现</button>

    </div>

  </div>
</template>

<script>

</script>

<style scoped>
  img {
    width: 44px;
    height: 44px;
    margin: 20px;
    background-color: black;
    border-radius: 22px;
  }

  button {
    background-color: white;
    border-radius: 2px;
    border-color: darkblue;
    margin-top: 6px;
    margin-bottom: 6px;
    font-size: 15px;
    color: blue;
    margin-right: 10px;
    padding: 2px 10px;
  }

</style>
