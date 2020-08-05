<template>
  <div>
    <h1>my name is rendr page</h1>
    <btn :type_of="'success'" :text="'提交'" v-slot:butt @clickEvent="handerClick">
      <span>点我</span>
    </btn>
    <button v-display-key="'211'">支付</button>
    <child :text="'render'"></child>
    <child1 :text="'render'"></child1>
  </div>
</template>

<script>
import btn from "../components/render/button.vue";
export default {
  name: "Render",
  components: { btn },
  provide: {
    user: ["dk", "yf", "dj", "cl"]
  },
  methods: {
    handerClick() {
      // this.bus.$emit("busClick", "Render");
      console.log("render");
    }
  }
};
</script>