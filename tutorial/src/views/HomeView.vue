<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" item="여러개가 있음" @aaa="childValue" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  methods: {
    childValue(v) {
      console.log(v);
    },
  },
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
