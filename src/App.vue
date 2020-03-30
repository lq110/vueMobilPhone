<template>
  <div id="app">
    <!-- 3用标签的形式使用 -->
    <Nav />

    <!-- 缓存路由所有请求 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 需要缓存的路由 -->
    <!-- <keep-alive> -->
    <!-- <router-view v-if="$route.meta.keepplive"></router-view> -->
    <!-- </keep-alive> -->
    <!-- 不需要缓存的路由 代表不需要发送请求的数据-->
    <!-- <router-view v-if="!$route.meta.keepplive"></router-view> -->
  </div>
</template>
<script>
//1 引入组件
import Nav from "./components/Nav";
export default {
  //2注册
  components: {
    Nav
  },
  created() {
    console.log(this.$route.meta.keepplive);
  }
};
</script>
<style>
.container {
  position: fixed;
  top: 0;
  width: 100%;
  overflow-y: scroll;
  bottom: 58px;
}
ul,
li {
  list-style: none;
}
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
