<template>
  <div>
    <div class="header-container">
      <div style="flex: 1; width: 100%;display: flex;margin: 0;flex-direction: column;">
        <p style="margin-top: 16px;color: white;font-size: 20px;">第 <span style="font-size: 39px;">4567</span> 名</p>
      </div>
    </div>
    <div style="margin-left: 0;margin-right: 0; width: 100%;height: 40px;display: flex;  align-items: center;">
      <img>
      <p style="color: #666;font-size: 13px;">
        恭喜发财大吉大利
      </p>
    </div>
  </div>
</template>
<style scoped>
  .header-container {
    background: url("../../../../assets/images/sign/脑容量.png") no-repeat center center;
    width: 100%;
    height: 22vh;
    background-size: 100% 22vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

  }

  .header-container div {
    height: 40px;
    width: 100%;
    margin-bottom: 20px;
    padding-left: 12px;
    margin-right: 12px;
    display: flex;
    align-items: center;
  }

  img {
    background: black;
    width: 40px;
    height: 40px;
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 20px;

  }

  .header-container div p {
    color: #666;
    font-size: 14px;
    text-align: start;
    flex: 1;
    margin-left: 10px;
  }
</style>
