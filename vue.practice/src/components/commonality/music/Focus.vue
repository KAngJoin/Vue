<template>
  <div>
    <div class="box">
      <input ref="ipt" type="text" />
      <span class="circle-btn" @click="iptShow"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Focus",
  // directives: {
  //   focus: {
  //     bind: function(el) {
  //       el.onfocus = function() {
  //         console.log(32);
  //         el.style.width = "200px";
  //         el.style.height = "20px";
  //         el.style.visibility = "visible";
  //       };
  //       el.onblur = function() {
  //         el.style.visibility = "hidden";
  //       };
  //     },
  //     inserted: function(el) {
  //       el.focus();
  //     }
  //   }
  // },
  inject: ["user"],
  created() {
    console.log(this.user);
  },
  methods: {
    iptShow() {
      this.$refs.ipt.focus();
    }
  }
};
</script>

<style scoped>
.box {
  width: auto;
  height: 20px;
  display: flex;
}
.circle-btn {
  width: 20px;
  height: 20px;
  background: rgb(58, 23, 23, 0.6);
  cursor: pointer;
}
</style>