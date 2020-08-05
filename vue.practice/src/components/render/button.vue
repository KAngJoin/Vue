
<script>
import { state } from "../../common/store.oneself";
export default {
  props: {
    type_of: {
      type: String,
      default: "normal"
    },
    text: {
      type: String,
      default: "Click Me"
    }
  },
  render(h) {
    return h("button", {
      // v-bind:css
      class: {
        btn: true,
        "btn-success": this.type_of === "success",
        "btn-danger": this.type_of === "danger",
        "btn-warning": this.type_of === "warning",
        normal: !this.type_of
      },
      // dom操作
      domProps: {
        innerText: this.text + state.count
      },
      on: {
        click: this.myClick
      }
    });
  },
  methods: {
    myClick() {
      this.$emit("clickEvent");
    }
  }
};
</script>

<style scoped>
.btn {
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background: #ccc;
  cursor: pointer;
  /* outline: 0; */
  border: 0;
}
.btn-success {
  background: green;
}
.btn-danger {
  background: red;
}
.btn-warning {
  background: orange;
}
</style>