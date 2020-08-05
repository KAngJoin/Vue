<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/views/header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  text-align: center;
}
body {
  min-height: 100%;
}
</style>
