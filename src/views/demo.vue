<template>
  <div>
    组件refs基本用法
    <Mybutton ref="btn" />
  </div>
</template>

<script>
import Mybutton from "../components/Mybutton";
export default {
  components: {
    Mybutton
  },
  mounted() {
    const btn = this.$refs.btn;
    console.log(btn); //的到一个对像
    console.log(btn.msg); //得到数据
    btn.msg = "武松"; //修改数据  一般不用
    this.$refs.btn.ck(); //触发组件里面父元素的事件
  }
};
</script>
