<template>
  <div class="container" ref="scele" @scroll="scmore">
    <div v-for="item in list" :key="item.id">
      <router-link :to="{name:'detail',query:{id:item.id}}">
        <van-card
          :num="item.id"
          :price="item.price"
          :desc="item.info"
          :title="item.name"
          :thumb="item.img"
        />
      </router-link>
    </div>
    <van-button type="primary" class="btn-box" @click="loadmore">{{hasMore?'点击加载更多':'没有数据了'}}</van-button>
  </div>
</template>
<script>
import { getPage, getDetail } from "../api";
export default {
  created() {
    this.getlist();
  },
  mounted() {
    //获取dom元素
    // console.log(this.$el);
    console.log(this.$refs.scele);
  },
  data() {
    return {
      list: [],
      page: 1, //默认拿第一页的数据
      hasMore: true,
      wares: ""
    };
  },
  methods: {
    //下一页
    async getlist() {
      let { list, hasMore } = await getPage(this.page); //函数里是给服务器发的内容
      // 把新请求回来的数据和原来的this.list 的数据合并就可以保留所有数据
      // this.list = this.list.concat(list);
      // es6写法
      getPage(this.page).then(data => {
        // console.log(data);
      });
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
    },
    scmore() {
      console.log(1);
      clearTimeout(this.timer);
      //节流和防抖  节流 (用于优化性能 防止多次触发)
      this.timer = setTimeout(() => {
        // console.log(2);
        let scele = this.$refs.scele;
        // console.log("我是值" + scele.scrollTop);
        let { scrollTop, scrollHeight, clientHeight } = scele;

        // console.log(scrollTop, scrollHeight, clientHeight);
        // 判断到底部加载更多
        if (clientHeight + scrollTop + 10 > scrollHeight) {
          console.log("我到底部了！~");
          this.loadmore();
        }
      }, 13);
    }
  }
};
</script>
<style>
.btn-box {
  text-align: center;
}
</style>


