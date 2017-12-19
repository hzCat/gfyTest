<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="tabbar">
      <div class="one">首页</div>
      <div class="one">个人中心</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app"
  };

</script>

<style>
  #app {
    margin:0;
    padding:0;
    margin-bottom:0.96rem
  }

</style>
