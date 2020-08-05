<template>
  <div>
    <div @click="changeName" ref="a">Home Page</div>
    <p>user is : {{user}}</p>
    <ajax @send="handleReq" v-slot:ajax>
      <span>slot</span>
    </ajax>
  </div>
</template>

<script>
import ajax from "./axios/Ajax";
export default {
  name: "Home",
  isVuex: true,
  data() {
    return {
      name: "kidu"
    };
  },
  computed: {
    user() {
      const _state = this.$store.state;
      return _state.home && _state.home.homeUser;
    }
  },
  components: { ajax },
  beforeCreate() {
    console.log(this.$slots);
  },
  mounted() {
    console.log(this.$slots);
  },
  methods: {
    changeName() {
      this.$store.commit("changeHomeUser", "王五");
    },
    handleReq() {
      // alert(this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>