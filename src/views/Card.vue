<template>
  <div>
    选项卡
    <ul class="tab">
      <li
        :class="{acitve:tindex==index}"
        v-for="(item,index) in arr"
        :key="index"
        @click="tabchange(index)"
      >{{item}}</li>
    </ul>
    <!--  标题与内容索引相同 -->
    <div v-for="(cont,index) in content" :key="index">
      <span v-if="index==tindex">{{cont}}</span>
    </div>
    <div class="tab-abc">123</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ["sofa1", "sofa2", "sofa3"], //标题
      content: ["雪糕", "鸡蛋", " 牛奶"], //对应内容内容
      tindex: 0 //默认选中的索引
    };
  },
  methods: {
    tabchange(index) {
      // 默认tindex为0  点击的li时 tindex切换为点击的索引 使得点击的li的active类显示
      this.tindex = index;
    }
  }
};
</script>
<style  lang='less'>
// .tab {
//   display: flex;
// }
// li {
//   margin: 10px;
//   background: greenyellow;
// }
// .acitve {
//   background: purple;
// }
.tab {
  &-abc {
    //&-abc = tab-abc
    color: red;
  }
  display: flex;
  li {
    margin: 10px;
    background: greenyellow;
    &.acitve {
      //  &.active = li.active
      background: blue;
    }
  }
}
</style>

