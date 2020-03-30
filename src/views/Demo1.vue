<template>
  <div>
    我是主体
    <!-- 头部组件 -->
    <Top />
    <!-- 数据 -->
    <div>
      <span>{{msg}}</span>
    </div>
  </div>
</template>

<script>
import Top from "../views/Demo_top"; //引入头部组件
import msg from "./Demo.json"; //引入后台数据
import { mockbanner } from "../api/index"; //从index里拿到数据
// console.log(mockbanner);
mockbanner().then(data => {
  console.log(data);
});
export default {
  components: {
    Top
  },
  created() {
    //初始化数据 ajax发送  越早越好
    // console.log(msg);
    //将后台数据赋值给数据dada里的msg
    this.msg = msg.msg;
  },
  data() {
    return {
      msg: "green！~"
    };
  }
};
</script>

<style scoped>
span {
  color: #ff0000;
}
</style>

