<template>
  <div>
    <div>我是组件【child0】,我的父亲是：{{text}}</div>
    <div>{{count}}</div>
    <ul v-for="(name,ind) in user" :key="ind">{{name}}</ul>
  </div>
</template>

<script>
import { state } from "../../common/store.oneself";
export default {
  name: "Child",
  props: {
    text: String
  },
  data() {
    return {
      users: this.user
    };
  },
  inject: ["user"],
  computed: {
    count() {
      return state.count;
    }
  },
  created() {
    console.log(this.user);
  },
  mounted() {
    this.bus.$on("busClick", function(info) {
      alert(info);
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>