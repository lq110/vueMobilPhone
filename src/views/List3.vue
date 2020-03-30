<template>
  <div ref="scele" @scroll="scmore">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <div v-for="item in list" :key="item.id">
        <van-card
          :num="item.id"
          :price="item.price"
          :desc="item.info"
          :title="item.name"
          :thumb="item.img"
        />
      </div>
    </van-list>
  </div>
</template>
<script>
import { getPage } from "../api/index.js";
export default {
  data() {
    return {
      list: [],
      page: 1, //默认拿第一页的数据
      hasMore: true,
      loading: false,
      finished: false
    };
  },
  created() {
    this.getlist();
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (!this.hasMore) {
          this.finished = true;
          return;
        }
        this.scmore();
      }, 500);
    },
    // 列表数据
    //下一页
    async getlist() {
      let { list, hasMore } = await getPage(this.page); //函数里是给服务器发的内容
      //es6数组合并
      this.list = [...this.list, ...list];
      this.hasMore = hasMore;
    },
    // 点击加载下一页
    loadmore() {
      this.page = this.page + 1;
      // 发送请求到页面
      this.getlist();
    },
    scmore() {
      console.log(1);
      clearTimeout(this.timer);
      //节流和防抖  节流 (用于优化性能 防止多次触发)
      this.timer = setTimeout(() => {
        console.log(2);
        let scele = this.$refs.scele;
        let { scrollTop, scrollHeight, clientHeight } = scele;
        // console.log(scrollTop, scrollHeight, clientHeight);
        // 判断到底部加载更多
        if (clientHeight + scrollTop + 200 > scrollHeight) {
          console.log("我到底部了！~");
          this.loadmore();
        }
      }, 13);
    }
  }
};
</script>


