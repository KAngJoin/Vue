<!--
 * @Descripttion: 搜索框（使用transition添加过度，点击宽度增加）
 * @version: v1.0
 * @Author: Duk
 * @Date: 2020-07-22 22:56:38
 * @LastEditors: Duk
 * @LastEditTime: 2020-07-23 00:12:18
--> 
<template>
  <div id="search-component" @click.stop>
    <i class="el-icon-search search-input__icon" @click.stop="open()"></i>
    <transition name="search">
      <el-input class="search-input" v-if="show" v-model="value" ref="serachInput"></el-input>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Search",
  watch: {
    show(val) {
      if (val) {
        document.body.addEventListener("click", this.close);
      } else {
        document.body.removeEventListener("click", this.close);
      }
    },
  },
  data() {
    return {
      show: false,
      value: "",
    };
  },
  methods: {
    open() {
      this.show = !this.show;
      this.value = "";
      this.$nextTick(() => {
        this.$refs.serachInput && this.$refs.serachInput.focus();
      });
    },
    close() {
      this.value = "";
      this.$nextTick(() => {
        this.$refs.serachInput && this.$refs.serachInput.blur();
      });
      this.show = false;
    },
  },
};
</script>
<style lang='scss' scoped>
#search-component {
  width: 300px;
  height: 60px;
  position: relative;

  .search-input__icon {
    color: #fff;
    cursor: pointer;
    line-height: 1em;
    display: inline-block;
    width: 40px;
    height: 40px;
    font-size: 40px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .search-input {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
  }
  /deep/ {
    .el-input__inner {
      width: 100%;
      border-radius: 0;
      border: 0;
      background: transparent;
      font-size: 20px;
      border-bottom: 1px solid #fff;
      color: #fff;
    }
  }
}
.search-enter-active {
  animation: move 0.2s;
}
.search-leave-active {
  animation: move 0.2s reverse;
}

@keyframes move {
  // 这里必须从 0 开始,且使用 through
  // through 与 to 的含义：当使用 through 时，条件范围包含 <start> 与 <end> 的值，而使用 to 时条件范围只包含 <start> 的值不包含 <end> 的值
  @for $i from 0 to 100 {
    #{$i}% {
      width: 2.6px * $i;
      opacity: $i / 100;
    }
  }
}
</style>