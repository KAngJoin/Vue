<template>
  <div>
    <btn :type_of="'warning'" @clickEvent="sendAjax"></btn>
  </div>
</template>

<script>
import btn from "../../components/render/button.vue";
export default {
  name: "Ajax",
  components: { btn },
  beforeCreate() {
   this.$emit('send')
  },
  methods: {
    sendAjax() {
      this.$emit("send");
      // let _this = this;
      // let t = setInterval(function() {
      //   _this.ajax.Get("/ajax").then(function(res) {
      //     console.log(res);
      //   });
      // }, 800);
      // setTimeout(() => {
      //   clearInterval(t);
      // }, 4000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>