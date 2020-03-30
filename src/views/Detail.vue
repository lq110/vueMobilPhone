<template>
  <div class="goods">
    <!-- <share :config="config"
           class="share">分享</share> -->
    <van-nav-bar title="详情"
                 left-text="返回"
                 right-text="分享"
                 left-arrow
                 @click-left="goback"
                 @click-right="share" />
    <van-swipe class="goods-swipe"
               :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb"
                      :key="thumb">
        <img :src="thumb" />
        <!-- {{waresData}} -->
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice() }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺"
                icon="shop-o"
                is-link
                @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag"
                   type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店"
                icon="location-o"
                is-link
                @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情"
                is-link
                @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o"
                             @click="sorry">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o"
                             @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning"
                               @click="sorry">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger"
                               @click="sorry">立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
// import "../../node_modules/social-share.js/dist/js/social-share.min.js";
import { getDetail } from "../api";
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      },
      config: {
        // url: "", // 网址，默认使用 window.location.href
        // source: "", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        // title: "红富士苹果", // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        // description: "超级好吃！~", // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        // image: "", // 图片, 默认取网页中第一个img标签
        sites: ["qzone", "qq", "weibo", "wechat", "douban"] // 启用的站点
        // disabled: ["google", "facebook", "twitter"], // 禁用的站点
        // wechatQrcodeTitle: "微信扫一扫：分享", // 微信二维码提示文字
        // wechatQrcodeHelper:
        //   "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"
      }
    };
  },
  methods: {
    //分享
    share() {},
    // 返回
    goback() {
      this.$router.push("/detail");
      this.$router.go(-1);
      // window.history.go(-1)
    },
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("/car");
    },
    sorry() {
      Toast("加入失败！~");
    },
    //获取点击商品的数据
    async getWares(id) {
      const { data } = await getDetail(id);
      this.goods = data;
      console.log(data);
      console.log(123);
    }
  },
  //简化属性
  // computed: {
  //   shopid() {
  //     return this.$route.query.id;
  //   }
  // },
  created() {
    // 简化值
    //  this.$route.params.id;
    //方法一
    // this.waresData = await getDetail(this.$route.query.id || 1);
    // console.log(this.waresData);
    // console.log(await getDetail(this.$route.params.id));
    // console.log(this.waresData);
    // 方法二
    this.getWares(this.$route.query.id || 1);
  }
};
</script>

<style>
/* .share {
  position: fixed;
  top: 0;
} */
/* .van-swipe-item img {
  width: 100%;
}
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
} */
.van-swipe-item img {
  height: 24rem;
}
</style>
