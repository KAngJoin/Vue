<template>
  <div>
    <p>Login Page</p>
    <form action>
      <label for="user">{{userName}}</label>
      <input type="text" name="user" id="user" v-model="user" />
      <br />
      <label for="pwd">{{password}}</label>
      <input type="text" name="pwd" id="pwd" v-model="pwd" />
    </form>
    <button @click="savePwd">记住密码</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  isVuex: true,
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  computed: {
    userName() {
      return this.$store.state.login && this.$store.state.login.user;
    },
    password() {
      return this.$store.state.login && this.$store.state.login.password;
    }
  },
  methods: {
    savePwd() {
      this.user && this.$store.commit("changeUser", this.user);
      this.pwd && this.$store.commit("changePwd", this.pwd);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>