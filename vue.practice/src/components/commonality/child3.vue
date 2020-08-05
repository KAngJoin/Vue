<template>
  <div>我是组件【child3】,我的父亲是：{{text}}</div>
</template>

<script>
export default {
  name: "Child2",
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
</style>