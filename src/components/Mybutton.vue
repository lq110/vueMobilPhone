<template>
  <button @click="ck">{{msg}}</button>
</template>
<script>
export default {
  data() {
    return {
      msg: "这是我的按钮"
    };
  },
  methods: {
    ck() {
      alert("1234");
    }
  }
};
</script>

