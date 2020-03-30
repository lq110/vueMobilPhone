<template>
  <div>
    这是首页
    <!-- <van-loading class="loading" size="50px" :vertical="true" v-if="showData">加载中...</van-loading> -->
    <div class="container">
      <!-- 轮播图 -->
      <Banner :swiperSlides="slider" />
      <!-- 列表 -->
      <div class="listBox">
        <ul class="homeList">
          <li v-for="item in listData"
              :key="item.id">
            <img :src="item.img"
                 alt />
            <h3>{{item.name}}</h3>
            <p>{{item.info}}</p>
            <p>
              <span>{{item.price}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
//export { getBanner, getlist };
import { getHomeAll, getlist } from "../api";

export default {
  name: "home",

  components: {
    Banner
  },
  created() {
    this.getHome();
  },
  data() {
    return {
      slider: [],
      listData: [],
      showData: true
    };
  },
  methods: {
    //两个请求结合
    async getHome() {
      let [{ banner }, { list }] = await getHomeAll();
      console.log(await getHomeAll());
      this.listData = list;
      this.slider = banner;
      // console.log("我是list" + list);
      // settimeout 只是为了模拟网速慢，写项目中不需要写
      setTimeout(() => {
        this.showData = false;
      }, 1000);
    }
  }
};

//睡眠函数
</script>
<style coped>
ul {
  list-style: none;
  width: 80%;
  /* height: 100%; */
  height: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* align-content: space-around; */
  text-align: center;
}
li {
  /* height: 300px; */
  width: 45%;
  margin: 6px 0;
  /* border: 1px solid #ccc; */
}
li img {
  width: 80%;
  border-radius: 5px;
}
/* 当网速卡顿时显示加载 */
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
.swiper-slide img {
  width: 100%;
  height: 12rem !important;
}
</style>
