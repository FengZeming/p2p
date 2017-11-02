<template>
  <div style="height: 60px;width: 100%; display: flex;align-items: center;">
    <img :src="require('../../../assets/images/钱包.png')" style="max-width: 70%;margin-left: 10px;
    max-height: 70%;" alt="卡券">
    <p style="font-size: 18px;color: #333;margin-right: 4px;">我的优惠券</p>
    <p
      style="padding: 2px 5px;background-color:#f60; border-radius: 8px;font-size: 8px;color: white;line-height: 12px;">
      即将过期</p>
    <p style="flex: 1; text-align: right;font-size: 12px;color: #999">1张待使用</p>
    <img :src="require('../../../assets/images/arrow.png')"
         style="max-height:30%;margin-right: 10px;margin-left: 10px;">
  </div>
</template>
