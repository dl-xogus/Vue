<template>
  <div class="SampleIf" v-if="this.isLogin">
      <button @click="login">로그인</button>

    <p>로그아웃 되었습니다.</p>
  </div>

  <div class="SampleIf" v-else>
      <button @click="login">로그아웃</button>

    <p>로그인 되었습니다.</p>
  </div>
</template>

<script>
export default {
  name: "SampleIf",
  data() {
    return {
      isLogin: null,
    };
  },
  methods: {
    login() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style lang="scss" scoped></style>
