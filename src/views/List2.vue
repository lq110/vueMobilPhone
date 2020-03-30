<template>
  <div class="container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p :class="{hide:isShow}">下拉刷新</p>
      <div v-for="item in list" :key="item.id">
        <van-card
          :num="item.id"
          :price="item.price"
          :desc="item.info"
          :title="item.name"
          :thumb="item.img"
        />
      </div>
    </van-pull-refresh>
  </div>
</template>




<script>
import { getPage } from "../api/index.js";
export default {
  data() {
    return {
      isLoading: false,
      list: [],
      page: 1, //默认拿第一页的数据
      hasMore: true,
      isShow: false
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    onRefresh() {
      this.isShow = true;
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.loadmore();
        this.isShow = false;
      }, 500);
    },
    async getlist() {
      let { list, hasMore } = await getPage(this.page); //函数里是给服务器发的内容
      // 把新请求回来的数据和原来的this.list 的数据合并就可以保留所有数据

      //es6数组合并
      this.list = [...this.list, ...list];
      this.hasMore = hasMore;
    },
    // 点击加载下一页
    loadmore() {
      // 如果没有更多数据了就不在发送请求
      if (!this.hasMore) {
        return;
      }
      // 页数加1
      this.page = this.page + 1;
      // 发送请求到页面
      this.getlist();
    }
  }
};
</script>
<style>
p {
  text-align: center;
  font-size: 14px;
  margin: 10px 0;
  color: #999;
}
.hide {
  display: none;
}
.container {
  position: fixed;
  top: 0;
  bottom: 50px;
}
</style>



