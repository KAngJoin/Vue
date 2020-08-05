<!--
 * @Descripttion: header navigation component
 * @version: 
 * @Author: Duk
 * @Date: 2020-07-22 23:33:21
 * @LastEditors: Duk
 * @LastEditTime: 2020-07-23 09:54:45
--> 

<template>
  <header id="header-navigation__wrapper">
    <search />
  </header>
</template>

<script>
import Search from "@/components/search";
export default {
  name: "Header",
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
#header-navigation__wrapper {
  width: 100%;
  height: 80px;
  background: rgb(83, 79, 79);
}
</style>