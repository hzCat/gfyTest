<template>
  <div class="container">
    <div class="bg-img"></div>
    <div class="cover">
      <div class="circle"></div>
      <div class="circle">
        <img src="../../assets/img/index/logo.png" alt="">
      </div>
      <div class="circle"></div>
    </div>
    <div class="bottom-bg">
      <div class="scan" @click="scanClick">
        <div class="title">
          <img src="../../assets/img/index/icon_scan.png">
        </div>
        <div class="content">扫码</div>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.css";
export default {
  data: function() {
    return {};
  },
  methods: {
    scanClick() {
      let that=this;
      that.axios.get("https://jsonplaceholder.typicode.com/posts/20").then(res => {
        console.log(res);
      });
      this.$http.get("https://jsonplaceholder.typicode.com/posts/20").then(res => {
        console.log(res);
      });
    }
  }
};
</script>
