<template>
  <div>
    Vant.vue
    <!-- 按钮 -->
    <van-button @click="btnclik" type="default" van-button>默认按钮</van-button>
    <!-- 图标 -->
    <van-icon name="success" />
    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
    <!--商品卡片  -->
    <!-- 描边 -->

    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
  </div>
</template>
<script>
export default {
  methods: {
    btnclik() {
      alert(123);
    }
  }
};
</script>

<style>
</style>


