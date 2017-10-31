<template>
  <router-link :to="{path:'/search'}">
    <div
      style="display: flex; flex: 1; height: 34px; margin: 5px 10px ; justify-content: center;
        align-items: center;background-color: #f4f4f4;border-radius: 4px;">
      <img :src="require('../assets/images/rightmagnifier.png')" alt="search" style="width: 20px;height: 20px;">
      <p style="color: #333;font-size: 16px;margin-left: 10px;">搜索</p>
    </div>
  </router-link>

</template>
