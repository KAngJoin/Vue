<template>
  <div>
    <p>我是组件【child1】,我的父亲是：{{text}}</p>
    <ol>
      <li v-for="(item,ind) in user" :key="ind+item">{{item}}</li>
    </ol>

    <focus></focus>
  </div>
</template>

<script>
import focus from "./music/Focus";
export default {
  name: "Child1",
  props: {
    text: String
  },
  components: { focus },
  inject: ["user"]
};
</script>

<style lang="scss" scoped>
</style>