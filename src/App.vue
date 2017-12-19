<template>
  <div id="app">
    <router-view/>
    <div class="tabbar">
      <div class="one" @click="first">
        <img :src="path1" alt="">
        <span>首页</span>
      </div>
      <div class="one" @click="center">
        <img :src="path2" alt="">
        <span>
          个人中心
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  data: function() {
    return {
      path1: "./../static/tabbar/icon_home_n.png",
      path2: "./../static/tabbar/icon_persionalCerter.png"
    };
  },
  methods: {
    first() {
      if(this.path1=="./../static/tabbar/icon_home_n.png"){
        this.path1="././../static/tabbar/icon_home_selected.png"
        this.path2="./../static/tabbar/icon_persionalCerter.png"
      }
    },
    center() {
      if(this.path2=="./../static/tabbar/icon_persionalCerter.png"){
        this.path2="././../static/tabbar/icon_persionalCerter-selected.png"
        this.path1="./../static/tabbar/icon_home_n.png"
      }
    }
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  margin-bottom: 0.96rem;
}
</style>
