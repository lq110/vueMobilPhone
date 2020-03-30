<template>
  <div>
    选项卡练习页
    <div>
      <ul class="title">
        <li
          :class="{active:tindex==index}"
          v-for="(item,index) in title"
          :key="index"
          @click="colorChange(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div>
      <div v-for="(cont,index) in content" :key="index">
        <div v-if="tindex==index">{{cont}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: ["商店", "电影院", "肯德基"],
      content: ["矿泉水", "功夫", "汉堡包"],
      tindex: 0
    };
  },
  methods: {
    colorChange(index) {
      this.tindex = index;
    }
  }
};




</script>
<style lang='less'>
.title {
  display: flex;
  color: green;

  li {
    width: 60px;
    &.active {
      background: purple;
    }
  }
}
</style>

